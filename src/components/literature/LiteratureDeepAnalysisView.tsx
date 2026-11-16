import React, { useState } from 'react';
import { LiteraryWork, SupportedLang } from '../../types';
import {
  Sparkles,
  Layers,
  History,
  Compass,
  MessageSquare,
  FileCheck,
  ChevronDown,
  ChevronUp,
  Copy,
  Check,
  BookOpen,
} from 'lucide-react';

interface LiteratureDeepAnalysisViewProps {
  work: LiteraryWork;
  lang: SupportedLang;
}

export const LiteratureDeepAnalysisView: React.FC<LiteratureDeepAnalysisViewProps> = ({ work, lang }) => {
  const [copiedPlan, setCopiedPlan] = useState(false);
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    history: true,
    composition: true,
    poetics: true,
    criticism: true,
    essayPlan: true,
  });

  const toggleSection = (key: string) => {
    setExpandedSections((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const analysis = work.deepAnalysis;

  if (!analysis) {
    return (
      <div className="bg-white rounded-2xl p-8 border border-slate-200 text-center">
        <Sparkles className="w-10 h-10 text-amber-500 mx-auto mb-3 opacity-60" />
        <h3 className="text-lg font-bold text-slate-900 mb-1">
          {lang === 'ru' ? 'Академический разбор формируется' : 'Academic analysis in preparation'}
        </h3>
        <p className="text-sm text-slate-500 max-w-md mx-auto">
          {lang === 'ru'
            ? 'Подробный литературоведческий разбор для этого произведения загружается.'
            : 'Detailed literary analysis for this work is being prepared.'}
        </p>
      </div>
    );
  }

  const handleCopyEssayPlan = () => {
    if (!analysis.sampleEssayPlanRu) return;
    const plan = analysis.sampleEssayPlanRu;
    const textToCopy = `Тема сочинения: ${plan.topic}\n\n1. Вступление:\n${plan.introduction}\n\n2. Основная часть (Тезис 1):\n${plan.thesis1}\n\n3. Основная часть (Тезис 2):\n${plan.thesis2}\n\n4. Заключение:\n${plan.conclusion}`;
    navigator.clipboard.writeText(textToCopy);
    setCopiedPlan(true);
    setTimeout(() => setCopiedPlan(false), 2500);
  };

  return (
    <div className="space-y-6">
      {/* Overview Card */}
      <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 rounded-3xl p-6 sm:p-8 text-white relative overflow-hidden shadow-md">
        <div className="relative z-10 max-w-3xl">
          <div className="flex items-center space-x-2 text-amber-300 font-bold text-xs uppercase tracking-wider mb-2">
            <Sparkles className="w-4 h-4" />
            <span>{lang === 'ru' ? 'Академический литературоведческий разбор' : 'In-Depth Literary Analysis'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black mb-3">
            {lang === 'ru' ? `Глубокий анализ: «${work.titleRu}»` : `Deep Dive: "${work.titleEn}"`}
          </h2>
          <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
            {lang === 'ru'
              ? 'Исследование генезиса произведения, архитектоники сюжета, философской символики, оценок классической критики и эталонной модели сочинения для выпускных экзаменов.'
              : 'Detailed study of the work’s genesis, plot architecture, philosophical symbols, classic literary criticism, and model essay blueprints for state exams.'}
          </p>
        </div>
      </div>

      {/* Section 1: Creation History & Historical Context */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
        <button
          onClick={() => toggleSection('history')}
          className="w-full px-6 py-4 flex items-center justify-between bg-slate-50/70 hover:bg-slate-100/70 transition-colors cursor-pointer text-left"
        >
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
              <History className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900">
                {lang === 'ru' ? '1. История создания и историко-культурный контекст' : '1. History of Creation & Cultural Context'}
              </h3>
              <p className="text-xs text-slate-500">
                {lang === 'ru' ? 'Творческий замысел, цензура, редакции и эпоха' : 'Creative vision, censorship, editions and historical era'}
              </p>
            </div>
          </div>
          {expandedSections.history ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
        </button>

        {expandedSections.history && (
          <div className="p-6 space-y-4 border-t border-slate-100">
            <div className="bg-amber-50/60 rounded-xl p-4 border border-amber-200/70">
              <h4 className="text-xs font-bold text-amber-900 uppercase tracking-wide mb-1.5 flex items-center space-x-1.5">
                <BookOpen className="w-3.5 h-3.5 text-amber-700" />
                <span>{lang === 'ru' ? 'Генезис и авторский замысел' : 'Genesis & Author Vision'}</span>
              </h4>
              <p className="text-sm text-slate-800 leading-relaxed">
                {analysis.creationHistoryRu}
              </p>
            </div>

            {analysis.historicalContextRu && (
              <div className="bg-blue-50/50 rounded-xl p-4 border border-blue-100">
                <h4 className="text-xs font-bold text-[#0039A6] uppercase tracking-wide mb-1.5 flex items-center space-x-1.5">
                  <Compass className="w-3.5 h-3.5 text-[#0039A6]" />
                  <span>{lang === 'ru' ? 'Исторический фон в России' : 'Historical Backdrop in Russia'}</span>
                </h4>
                <p className="text-sm text-slate-800 leading-relaxed">
                  {analysis.historicalContextRu}
                </p>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Section 2: Composition & Plot Architecture */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
        <button
          onClick={() => toggleSection('composition')}
          className="w-full px-6 py-4 flex items-center justify-between bg-slate-50/70 hover:bg-slate-100/70 transition-colors cursor-pointer text-left"
        >
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-xl bg-blue-100 text-[#0039A6] flex items-center justify-center font-bold">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900">
                {lang === 'ru' ? '2. Композиция, фабула и архитектоника' : '2. Composition, Plot & Architectonics'}
              </h3>
              <p className="text-xs text-slate-500">
                {lang === 'ru' ? 'Экспозиция, кульминация, развязка и внесюжетные элементы' : 'Exposition, climax, resolution & non-plot layers'}
              </p>
            </div>
          </div>
          {expandedSections.composition ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
        </button>

        {expandedSections.composition && (
          <div className="p-6 border-t border-slate-100 space-y-4">
            <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 text-sm font-semibold text-slate-800">
              <span className="text-[#0039A6] font-bold mr-1.5">{lang === 'ru' ? 'Конструкция:' : 'Structure:'}</span>
              {analysis.compositionAnalysisRu.structure}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-bold bg-slate-200 text-slate-800 mb-2">
                  {lang === 'ru' ? 'Экспозиция и завязка' : 'Exposition & Incipit'}
                </span>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {analysis.compositionAnalysisRu.exposition}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-red-50/50 border border-red-200">
                <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-bold bg-red-100 text-red-800 mb-2">
                  {lang === 'ru' ? 'Кульминация (наивысшее напряжение)' : 'Climax'}
                </span>
                <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
                  {analysis.compositionAnalysisRu.climax}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-emerald-50/50 border border-emerald-200">
                <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 mb-2">
                  {lang === 'ru' ? 'Развязка и финал' : 'Denouement & Finale'}
                </span>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {analysis.compositionAnalysisRu.denouement}
                </p>
              </div>
            </div>

            {analysis.compositionAnalysisRu.nonPlotElements && (
              <div className="p-4 rounded-xl bg-purple-50/60 border border-purple-200 text-xs sm:text-sm text-purple-900 leading-relaxed">
                <span className="font-bold mr-1.5">{lang === 'ru' ? 'Внесюжетные элементы:' : 'Non-plot elements:'}</span>
                {analysis.compositionAnalysisRu.nonPlotElements}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Section 3: Poetics, Symbols & Leitmotifs */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
        <button
          onClick={() => toggleSection('poetics')}
          className="w-full px-6 py-4 flex items-center justify-between bg-slate-50/70 hover:bg-slate-100/70 transition-colors cursor-pointer text-left"
        >
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-xl bg-purple-100 text-purple-800 flex items-center justify-center font-bold">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900">
                {lang === 'ru' ? '3. Художественное своеобразие, поэтика и символика' : '3. Poetics, Symbols & Imagery'}
              </h3>
              <p className="text-xs text-slate-500">
                {lang === 'ru' ? 'Смысловые лейтмотивы, скрытые подтексты и образы-символы' : 'Key leitmotifs, hidden subtexts and symbols'}
              </p>
            </div>
          </div>
          {expandedSections.poetics ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
        </button>

        {expandedSections.poetics && (
          <div className="p-6 border-t border-slate-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {analysis.poeticsAndSymbolsRu.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-gradient-to-br from-slate-50 to-purple-50/30 border border-slate-200 hover:border-purple-300 transition-all"
                >
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="w-6 h-6 rounded-lg bg-purple-100 text-purple-700 font-black text-xs flex items-center justify-center">
                      {idx + 1}
                    </span>
                    <h4 className="text-sm font-bold text-slate-900">
                      {item.symbol}
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-8">
                    {item.meaning}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Section 4: Critical Reception & Classical Discourse */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
        <button
          onClick={() => toggleSection('criticism')}
          className="w-full px-6 py-4 flex items-center justify-between bg-slate-50/70 hover:bg-slate-100/70 transition-colors cursor-pointer text-left"
        >
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900">
                {lang === 'ru' ? '4. Классическая литературная критика' : '4. Classic Literary Criticism'}
              </h3>
              <p className="text-xs text-slate-500">
                {lang === 'ru' ? 'Оценки В. Г. Белинского, И. А. Гончарова, Д. И. Писарева и др.' : 'Analyses by renowned literary critics'}
              </p>
            </div>
          </div>
          {expandedSections.criticism ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
        </button>

        {expandedSections.criticism && (
          <div className="p-6 border-t border-slate-100 space-y-4">
            {analysis.criticalReceptionRu.map((item, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-emerald-50/40 border border-emerald-200">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <div className="flex items-center space-x-2">
                    <span className="font-bold text-emerald-900 text-sm">{item.critic}</span>
                    <span className="text-xs text-emerald-700/80 italic font-medium">«{item.workOrArticle}»</span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-200/70 text-emerald-900">
                    {lang === 'ru' ? 'Академическая оценка' : 'Academic Rating'}
                  </span>
                </div>
                <blockquote className="text-xs sm:text-sm font-semibold text-slate-800 border-l-3 border-emerald-500 pl-3 py-1 my-2 bg-white/70 rounded-r-lg">
                  {item.quote}
                </blockquote>
                <p className="text-xs text-slate-600 mt-2">
                  <strong className="text-slate-800">{lang === 'ru' ? 'Суть суждения: ' : 'Core Insight: '}</strong>
                  {item.summary}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Section 5: Sample Essay Blueprint (ОГЭ / ЕГЭ) */}
      {analysis.sampleEssayPlanRu && (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
          <button
            onClick={() => toggleSection('essayPlan')}
            className="w-full px-6 py-4 flex items-center justify-between bg-slate-50/70 hover:bg-slate-100/70 transition-colors cursor-pointer text-left"
          >
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-xl bg-rose-100 text-rose-800 flex items-center justify-center font-bold">
                <FileCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900">
                  {lang === 'ru' ? '5. Образцовый план-конспект сочинения (ОГЭ / ЕГЭ)' : '5. Model Exam Essay Blueprint'}
                </h3>
                <p className="text-xs text-slate-500">
                  {lang === 'ru' ? 'Тезисный каркас сочинения с максимальным баллом по критериям ФИПИ' : 'Structured thesis framework for high score'}
                </p>
              </div>
            </div>
            {expandedSections.essayPlan ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
          </button>

          {expandedSections.essayPlan && (
            <div className="p-6 border-t border-slate-100 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-3 bg-rose-50/60 p-4 rounded-xl border border-rose-200">
                <div>
                  <span className="text-xs font-bold text-rose-800 uppercase tracking-wide block mb-1">
                    {lang === 'ru' ? 'Тема сочинения:' : 'Essay Topic:'}
                  </span>
                  <h4 className="text-sm sm:text-base font-bold text-slate-900">
                    «{analysis.sampleEssayPlanRu.topic}»
                  </h4>
                </div>
                <button
                  onClick={handleCopyEssayPlan}
                  className="px-3.5 py-1.5 rounded-xl bg-white border border-rose-200 hover:bg-rose-100/50 text-rose-800 text-xs font-bold transition-all flex items-center space-x-1.5 shadow-2xs"
                >
                  {copiedPlan ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-rose-700" />}
                  <span>{copiedPlan ? (lang === 'ru' ? 'Скопировано!' : 'Copied!') : (lang === 'ru' ? 'Копировать план' : 'Copy Plan')}</span>
                </button>
              </div>

              <div className="space-y-3">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm">
                  <span className="font-bold text-slate-900 block mb-1">
                    1. {lang === 'ru' ? 'Вступление:' : 'Introduction:'}
                  </span>
                  <p className="text-slate-700">{analysis.sampleEssayPlanRu.introduction}</p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm">
                  <span className="font-bold text-[#0039A6] block mb-1">
                    2. {lang === 'ru' ? 'Основная часть (Тезис 1):' : 'Body Paragraph 1 (Thesis):'}
                  </span>
                  <p className="text-slate-700">{analysis.sampleEssayPlanRu.thesis1}</p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm">
                  <span className="font-bold text-[#0039A6] block mb-1">
                    3. {lang === 'ru' ? 'Основная часть (Тезис 2):' : 'Body Paragraph 2 (Thesis):'}
                  </span>
                  <p className="text-slate-700">{analysis.sampleEssayPlanRu.thesis2}</p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm">
                  <span className="font-bold text-emerald-800 block mb-1">
                    4. {lang === 'ru' ? 'Заключение:' : 'Conclusion:'}
                  </span>
                  <p className="text-slate-700">{analysis.sampleEssayPlanRu.conclusion}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
