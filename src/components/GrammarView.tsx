import React, { useState } from 'react';
import {
  RUSSIAN_CASES,
  C1_PARTICIPLES,
  C1_GERUNDS,
  C1_DERIVATIVE_PREPOSITIONS,
  C1_VERBAL_GOVERNANCE,
  C1_PARONYMS,
} from '../data/grammarData';
import { SupportedLang } from '../types';
import { playRussianAudio } from '../utils/audio';
import {
  Volume2,
  BookOpen,
  Sparkles,
  Layers,
  Scale,
  Compass,
  AlertTriangle,
  CheckCircle2,
  HelpCircle,
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface GrammarViewProps {
  lang: SupportedLang;
  audioSpeed: number;
  onEarnXP: (xp: number) => void;
}

const C1_BLITZ_QUESTIONS = [
  {
    question: 'Согласно (утверждённый регламент) доклад длится 15 минут.',
    options: ['утверждённому регламенту', 'утверждённого регламента', 'утверждённом регламенте'],
    correct: 'утверждённому регламенту',
    rule: '«Согласно» требует строго Дательного падежа (Кому? Чему?)',
  },
  {
    question: 'Во избежание (дальнейшие разногласия) стороны подписали протокол.',
    options: ['дальнейших разногласий', 'дальнейшим разногласиям', 'дальнейшие разногласия'],
    correct: 'дальнейших разногласий',
    rule: '«Во избежание» требует Родительного падежа (Кого? Чего?)',
  },
  {
    question: 'Переговорщик дал очень ______ и взвешенный ответ.',
    options: ['дипломатичный', 'дипломатический', 'дипломатский'],
    correct: 'дипломатичный',
    rule: '«Дипломатичный» = тактичный, чуткий; «дипломатический» относится к дипслужбе.',
  },
  {
    question: 'Бюрократические барьеры препятствуют (развитие) бизнеса.',
    options: ['развитию', 'развития', 'развитием'],
    correct: 'развитию',
    rule: 'Глагол «препятствовать» управляет Дательным падежом без предлога.',
  },
  {
    question: 'Тщательно ______ все риски, совет директоров утвердил проект.',
    options: ['взвесив', 'взвешивая', 'взвесят'],
    correct: 'взвесив',
    rule: 'Деепричастие СВ «взвесив» выражает действие, завершённое до главного глагола.',
  },
];

export const GrammarView: React.FC<GrammarViewProps> = ({ lang, audioSpeed, onEarnXP }) => {
  const [activeSection, setActiveSection] = useState<
    'participles' | 'prepositions' | 'governance' | 'paronyms' | 'cases' | 'blitz'
  >('participles');
  const [selectedCaseIndex, setSelectedCaseIndex] = useState<number>(0);

  // Blitz Mini-Game State
  const [blitzIdx, setBlitzIdx] = useState<number>(0);
  const [blitzScore, setBlitzScore] = useState<number>(0);
  const [blitzFeedback, setBlitzFeedback] = useState<'correct' | 'wrong' | null>(null);

  const currentBlitz = C1_BLITZ_QUESTIONS[blitzIdx];

  const handleChooseBlitz = (chosen: string) => {
    if (blitzFeedback) return;

    if (chosen === currentBlitz.correct) {
      setBlitzFeedback('correct');
      setBlitzScore((s) => s + 10);
      onEarnXP(10);
      confetti({ particleCount: 25, spread: 60, origin: { y: 0.8 } });
      setTimeout(() => {
        setBlitzFeedback(null);
        setBlitzIdx((prev) => (prev + 1) % C1_BLITZ_QUESTIONS.length);
      }, 1200);
    } else {
      setBlitzFeedback('wrong');
      setTimeout(() => {
        setBlitzFeedback(null);
        setBlitzIdx((prev) => (prev + 1) % C1_BLITZ_QUESTIONS.length);
      }, 2000);
    }
  };

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-rose-700 bg-rose-50 px-2.5 py-1 rounded-full border border-rose-200">
            {lang === 'ru' ? 'Уровень C1 / ТРКИ-III' : 'Level C1 / Advanced Register'}
          </span>
          <h2 className="text-2xl font-serif font-bold text-stone-900 mt-1">
            {lang === 'ru' ? 'Академическая и нормативная грамматика' : 'Academic & Normative Russian Grammar'}
          </h2>
          <p className="text-stone-500 text-xs sm:text-sm mt-0.5">
            {lang === 'ru'
              ? 'Причастные обороты, синтаксис деепричастий, строгое управление производных предлогов, паронимы и предикативный строй.'
              : 'Participles, verbal adverbs, derivative preposition governance, paronym distinctions, and stylistic syntax.'}
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap items-center gap-1.5 bg-stone-100 p-1.5 rounded-xl">
          {[
            { id: 'participles', labelRu: 'Причастия и деепричастия', labelEn: 'Participles & Gerunds' },
            { id: 'prepositions', labelRu: 'Производные предлоги', labelEn: 'Prepositions' },
            { id: 'governance', labelRu: 'Глагольное управление', labelEn: 'Governance' },
            { id: 'paronyms', labelRu: 'Паронимы', labelEn: 'Paronyms' },
            { id: 'cases', labelRu: 'Падежи C1', labelEn: 'C1 Cases' },
            { id: 'blitz', labelRu: 'Блиц-тест', labelEn: 'C1 Blitz' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveSection(tab.id as any)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                activeSection === tab.id
                  ? 'bg-white text-stone-900 shadow-sm font-bold'
                  : 'text-stone-500 hover:text-stone-800'
              }`}
            >
              {lang === 'ru' ? tab.labelRu : tab.labelEn}
            </button>
          ))}
        </div>
      </div>

      {/* SECTION 1: PARTICIPLES & GERUNDS */}
      {activeSection === 'participles' && (
        <div className="space-y-6">
          <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200">
            <h3 className="font-serif text-lg font-bold text-stone-900 mb-1">
              {lang === 'ru' ? 'Причастия: ядро научного и публицистического стиля' : 'Participles: Core of Academic Russian'}
            </h3>
            <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
              {lang === 'ru'
                ? 'Причастие объединяет признаки глагола и прилагательного. В книжном стиле оно позволяет заменить громоздкие придаточные предложения с союзным словом «который». Помните: краткие страдательные причастия всегда пишутся с одной буквой «Н» (решён, утверждена).'
                : 'Participles combine verbal aspect/tense with adjectival agreement. They streamline academic prose by substituting clumsy "который" clauses.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {C1_PARTICIPLES.map((item, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm space-y-4">
                <div className="flex items-start justify-between border-b border-stone-100 pb-3">
                  <div>
                    <span className="text-[10px] font-bold uppercase text-stone-500 bg-stone-100 px-2 py-0.5 rounded">
                      {item.voice} • {item.tense}
                    </span>
                    <h4 className="font-serif text-base font-bold text-stone-900 mt-1">
                      {item.type}
                    </h4>
                  </div>
                </div>

                <div className="bg-rose-50/70 border border-rose-100 p-2.5 rounded-xl text-xs text-rose-900 font-mono">
                  <span className="font-semibold text-rose-700">Суффиксы:</span> {item.suffixes}
                </div>

                <p className="text-xs text-stone-600 leading-relaxed">{item.formationRu}</p>

                <div className="space-y-2 pt-2 border-t border-stone-100">
                  <span className="text-[11px] font-bold uppercase text-stone-400 tracking-wider">Примеры C1:</span>
                  {item.examples.map((ex, eIdx) => (
                    <div key={eIdx} className="bg-stone-50 p-3 rounded-xl space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-rose-600 text-sm">{ex.word}</span>
                        <button
                          onClick={() => playRussianAudio(ex.sentence, audioSpeed)}
                          className="text-stone-400 hover:text-rose-600 p-1"
                        >
                          <Volume2 className="w-4 h-4" />
                        </button>
                      </div>
                      <p className="text-xs text-stone-800 font-medium">{ex.sentence}</p>
                      <p className="text-[11px] text-stone-500 italic">{ex.translation}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* GERUNDS SECTION */}
          <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm space-y-5">
            <div className="border-b border-stone-100 pb-4">
              <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200">
                Деепричастный оборот
              </span>
              <h3 className="font-serif text-xl font-bold text-stone-900 mt-1">
                {lang === 'ru' ? 'Правило единого субъекта в деепричастиях' : 'The Subject Agreement Constraint'}
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 mt-1">
                {lang === 'ru'
                  ? 'Действие деепричастия и действие сказуемого обязаны совершаться ОДНИМ И ТЕМ ЖЕ лицом (подлежащим).'
                  : 'The verbal adverb (gerund) must strictly share the subject of the finite verb.'}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {C1_GERUNDS.map((g, gIdx) => (
                <div key={gIdx} className="p-4 rounded-xl border border-stone-200 bg-stone-50/50 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sm text-stone-900">{g.aspect}</span>
                    <span className="text-xs font-mono bg-stone-200 text-stone-700 px-2 py-0.5 rounded">
                      {g.suffixes}
                    </span>
                  </div>
                  <p className="text-xs text-stone-600">{g.meaningRu}</p>
                  <div className="space-y-2 pt-2 border-t border-stone-200">
                    {g.examples.map((ex, exIdx) => (
                      <div key={exIdx} className="bg-white p-3 rounded-lg border border-stone-100 space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-rose-600">{ex.word}</span>
                          <button
                            onClick={() => playRussianAudio(ex.sentence, audioSpeed)}
                            className="text-stone-400 hover:text-rose-600 p-0.5"
                          >
                            <Volume2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <p className="text-xs text-stone-800">{ex.sentence}</p>
                        {ex.errorComparison && (
                          <p className="text-[11px] text-rose-600 bg-rose-50 p-1.5 rounded mt-1">
                            ⚠️ {ex.errorComparison}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* SECTION 2: DERIVATIVE PREPOSITIONS */}
      {activeSection === 'prepositions' && (
        <div className="space-y-5">
          <div className="bg-amber-50 rounded-2xl p-5 border border-amber-200 text-amber-950">
            <h3 className="font-serif text-lg font-bold mb-1 flex items-center space-x-2">
              <Scale className="w-5 h-5 text-amber-700" />
              <span>{lang === 'ru' ? 'Золотые нормы падежного управления производных предлогов' : 'Strict Prepositional Governance'}</span>
            </h3>
            <p className="text-xs sm:text-sm text-amber-900 leading-relaxed">
              {lang === 'ru'
                ? 'Нарушение управления предлога «согласно» (с родительным вместо дательного) — самая частая ошибка даже среди образованных носителей. Запомните: согласно, благодаря, вопреки — ТОЛЬКО ДАТЕЛЬНЫЙ ПАДЕЖ!'
                : 'Using Genitive with "согласно" is an egregious error. Always use Dative with: согласно, благодаря, вопреки.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {C1_DERIVATIVE_PREPOSITIONS.map((prep, pIdx) => (
              <div key={pIdx} className="bg-white rounded-2xl p-5 border border-stone-200 shadow-sm space-y-3">
                <div className="flex items-center justify-between border-b border-stone-100 pb-2.5">
                  <span className="font-serif text-xl font-bold text-stone-900">{prep.prepositionRu}</span>
                  <span className="text-xs font-bold text-rose-600 bg-rose-50 px-2.5 py-0.5 rounded-full border border-rose-200">
                    {prep.caseGovernedRu}
                  </span>
                </div>
                <p className="text-xs text-stone-500 italic">({prep.meaningEn})</p>
                <div className="bg-stone-50 p-3 rounded-xl border border-stone-100 flex items-start justify-between gap-2">
                  <p className="text-xs font-medium text-stone-800">{prep.exampleSentenceRu}</p>
                  <button
                    onClick={() => playRussianAudio(prep.exampleSentenceRu, audioSpeed)}
                    className="text-stone-400 hover:text-rose-600 p-1 shrink-0"
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>
                </div>
                <div className="text-[11px] text-stone-600 bg-rose-50/50 p-2.5 rounded-lg border border-rose-100">
                  {prep.typicalMistakeRu}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SECTION 3: VERBAL GOVERNANCE */}
      {activeSection === 'governance' && (
        <div className="space-y-5">
          <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm">
            <h3 className="font-serif text-xl font-bold text-stone-900 mb-1">
              {lang === 'ru' ? 'Трудные случаи глагольного управления C1' : 'Advanced Russian Verbal Governance'}
            </h3>
            <p className="text-stone-500 text-xs sm:text-sm">
              {lang === 'ru'
                ? 'Абстрактные и книжные глаголы с беспредложным и предложным управлением, требующие заучивания падежей.'
                : 'High-register verbs with non-intuitive case government required for academic writing and professional debates.'}
            </p>

            <div className="divide-y divide-stone-100 mt-5">
              {C1_VERBAL_GOVERNANCE.map((item, idx) => (
                <div key={idx} className="py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="space-y-0.5">
                    <div className="flex items-center space-x-2">
                      <span className="font-serif font-bold text-base text-stone-900">{item.verbRu}</span>
                      <span className="text-xs font-semibold text-rose-600 bg-rose-50 px-2 py-0.5 rounded">
                        {item.governanceRu}
                      </span>
                    </div>
                    <p className="text-xs text-stone-500 italic">({item.meaningEn})</p>
                    <p className="text-xs text-stone-700 font-medium mt-1">{item.exampleRu}</p>
                  </div>
                  <button
                    onClick={() => playRussianAudio(item.exampleRu, audioSpeed)}
                    className="self-start sm:self-center p-2 rounded-lg bg-stone-100 hover:bg-rose-100 text-stone-700 hover:text-rose-700 transition-colors"
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* SECTION 4: PARONYMS */}
      {activeSection === 'paronyms' && (
        <div className="space-y-5">
          <div className="bg-white rounded-2xl p-5 border border-stone-200 shadow-sm">
            <h3 className="font-serif text-xl font-bold text-stone-900 mb-1">
              {lang === 'ru' ? 'Словарь паронимов русского языка C1' : 'Dictionary of Russian Paronyms (C1)'}
            </h3>
            <p className="text-stone-500 text-xs sm:text-sm">
              {lang === 'ru'
                ? 'Слова, близкие по звучанию, но имеющие разное лексическое значение и сочетаемость.'
                : 'Near-homophones with completely divergent semantics and collocations.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {C1_PARONYMS.map((pair, pIdx) => (
              <div key={pIdx} className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm space-y-4">
                <div className="grid grid-cols-2 gap-3 border-b border-stone-100 pb-4">
                  <div className="space-y-1">
                    <span className="font-serif text-lg font-bold text-rose-600">{pair.wordA}</span>
                    <p className="text-xs text-stone-600">{pair.meaningA}</p>
                    <p className="text-[11px] text-stone-500 italic bg-stone-50 p-2 rounded">
                      {pair.exampleA}
                    </p>
                  </div>
                  <div className="space-y-1">
                    <span className="font-serif text-lg font-bold text-sky-600">{pair.wordB}</span>
                    <p className="text-xs text-stone-600">{pair.meaningB}</p>
                    <p className="text-[11px] text-stone-500 italic bg-stone-50 p-2 rounded">
                      {pair.exampleB}
                    </p>
                  </div>
                </div>
                <div className="text-xs text-stone-700 bg-amber-50/70 p-2.5 rounded-xl border border-amber-100">
                  💡 <span className="font-semibold">Мнемоника:</span> {pair.mnemonicRu}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SECTION 5: C1 CASES */}
      {activeSection === 'cases' && (
        <div className="space-y-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
            {RUSSIAN_CASES.map((item, idx) => {
              const isSelected = selectedCaseIndex === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setSelectedCaseIndex(idx)}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    isSelected
                      ? 'bg-stone-900 text-white border-stone-900 shadow-sm'
                      : 'bg-white text-stone-700 border-stone-200 hover:border-rose-300'
                  }`}
                >
                  <div className="text-[10px] font-mono uppercase text-stone-400">
                    Падеж {idx + 1}
                  </div>
                  <div className="font-serif font-bold text-xs truncate mt-0.5">
                    {item.nameRu.split(' ')[0]}
                  </div>
                  <div className="text-[11px] text-rose-500 font-medium truncate mt-0.5">
                    {item.questionRu}
                  </div>
                </button>
              );
            })}
          </div>

          {(() => {
            const currentCase = RUSSIAN_CASES[selectedCaseIndex];
            return (
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-6">
                <div className="border-b border-stone-100 pb-4">
                  <span className="text-xs font-mono uppercase font-bold text-stone-400">
                    Падеж #{selectedCaseIndex + 1}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 mt-0.5">
                    {lang === 'ru' ? currentCase.nameRu : currentCase.nameEn}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 mt-2 leading-relaxed">
                    {lang === 'ru' ? currentCase.usageRu : currentCase.usageEn}
                  </p>
                </div>

                {/* Examples */}
                <div className="space-y-3">
                  <h4 className="text-xs font-mono uppercase font-bold text-stone-400">
                    {lang === 'ru' ? 'Примеры в контексте уровня C1:' : 'C1 Examples in Context:'}
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {currentCase.examples.map((ex, eIdx) => (
                      <div key={eIdx} className="bg-stone-50 p-4 rounded-xl space-y-2 border border-stone-100">
                        <div className="flex items-start justify-between">
                          <p className="text-stone-900 font-medium text-sm leading-snug">
                            {ex.sentenceRu}
                          </p>
                          <button
                            onClick={() => playRussianAudio(ex.sentenceRu, audioSpeed)}
                            className="text-stone-400 hover:text-rose-600 p-1 shrink-0"
                          >
                            <Volume2 className="w-4 h-4" />
                          </button>
                        </div>
                        <p className="text-xs text-stone-500 italic">{ex.translationEn}</p>
                        <span className="inline-block text-[11px] font-semibold text-rose-600 bg-rose-50 px-2 py-0.5 rounded">
                          {ex.caseName}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })()}
        </div>
      )}

      {/* SECTION 6: BLITZ MINI-GAME */}
      {activeSection === 'blitz' && (
        <div className="bg-gradient-to-br from-stone-900 to-stone-850 rounded-2xl p-6 sm:p-8 text-white shadow-md border border-stone-800">
          <div className="max-w-xl mx-auto text-center space-y-5">
            <div className="flex items-center justify-between text-xs text-stone-400 border-b border-stone-800 pb-3">
              <span className="font-semibold text-rose-400">
                {lang === 'ru' ? 'Блиц-тренажёр норм русского языка C1' : 'C1 Russian Syntax & Governance Blitz'}
              </span>
              <span className="flex items-center space-x-1 text-amber-300 font-bold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{blitzScore} {lang === 'ru' ? 'XP' : 'XP'}</span>
              </span>
            </div>

            <div className="py-4 space-y-2">
              <span className="text-xs uppercase tracking-wider text-stone-400">Вопрос #{blitzIdx + 1}</span>
              <div className="font-serif text-xl sm:text-2xl font-bold text-white">
                {currentBlitz.question}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {currentBlitz.options.map((opt, oIdx) => (
                <button
                  key={oIdx}
                  onClick={() => handleChooseBlitz(opt)}
                  disabled={!!blitzFeedback}
                  className="py-3 px-3 rounded-xl border border-stone-700 bg-stone-800/80 hover:bg-stone-700 text-sm font-medium text-stone-200 transition-all hover:border-rose-400"
                >
                  {opt}
                </button>
              ))}
            </div>

            {blitzFeedback && (
              <div
                className={`p-3 rounded-xl text-xs sm:text-sm font-semibold animate-fadeIn ${
                  blitzFeedback === 'correct'
                    ? 'bg-emerald-900/60 text-emerald-200 border border-emerald-700'
                    : 'bg-rose-900/60 text-rose-200 border border-rose-700'
                }`}
              >
                {blitzFeedback === 'correct' ? 'Правильно! +10 XP. ' : 'Неверно! '}
                <span className="font-normal">{currentBlitz.rule}</span>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
