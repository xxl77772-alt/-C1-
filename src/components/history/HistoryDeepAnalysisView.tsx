import React, { useState } from 'react';
import { HistoryTopic, SupportedLang } from '../../types';
import {
  Sparkles,
  GitFork,
  BookOpen,
  MapPin,
  Scale,
  CheckCircle,
  HelpCircle,
  Eye,
  EyeOff,
  ChevronDown,
  ChevronUp,
  FileText,
  Compass,
} from 'lucide-react';

interface HistoryDeepAnalysisViewProps {
  topic: HistoryTopic;
  lang: SupportedLang;
}

export const HistoryDeepAnalysisView: React.FC<HistoryDeepAnalysisViewProps> = ({ topic, lang }) => {
  const [revealedAnswers, setRevealedAnswers] = useState<Record<string, boolean>>({});
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    causes: true,
    debates: true,
    sources: true,
    geography: true,
  });

  const toggleAnswer = (docId: string) => {
    setRevealedAnswers((prev) => ({ ...prev, [docId]: !prev[docId] }));
  };

  const toggleSection = (key: string) => {
    setExpandedSections((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const deep = topic.deepAnalysis;
  const sources = topic.sourceDocuments || [];

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-amber-900 via-orange-950 to-slate-900 rounded-3xl p-6 sm:p-8 text-white relative overflow-hidden shadow-md">
        <div className="relative z-10 max-w-3xl">
          <div className="flex items-center space-x-2 text-amber-300 font-bold text-xs uppercase tracking-wider mb-2">
            <Sparkles className="w-4 h-4" />
            <span>{lang === 'ru' ? 'Академический исторический разбор' : 'In-Depth Historical Analysis'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black mb-3">
            {lang === 'ru' ? `Глубокий разбор: ${topic.titleRu}` : `In-Depth Analysis: ${topic.titleEn}`}
          </h2>
          <p className="text-amber-100 text-sm sm:text-base leading-relaxed">
            {lang === 'ru'
              ? 'Многофакторный анализ причинно-следственных связей (ПСС), историографические споры ведущих учёных, разбор подлинных исторических документов и геополитический контекст.'
              : 'Multi-factor cause-and-effect breakdown, historiographical debates, primary source documents, and geopolitical context.'}
          </p>
        </div>
      </div>

      {/* Section 1: Cause and Effect Matrix (ПСС) */}
      {deep?.causeAndEffectRu && (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
          <button
            onClick={() => toggleSection('causes')}
            className="w-full px-6 py-4 flex items-center justify-between bg-slate-50/70 hover:bg-slate-100/70 transition-colors cursor-pointer text-left"
          >
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
                <GitFork className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900">
                  {lang === 'ru' ? '1. Причинно-следственные связи (Задание 17–18 ЕГЭ)' : '1. Cause and Effect Connections'}
                </h3>
                <p className="text-xs text-slate-500">
                  {lang === 'ru' ? 'Предпосылки, повод, кульминация и долгосрочные последствия' : 'Prerequisites, trigger, turning point & historical impact'}
                </p>
              </div>
            </div>
            {expandedSections.causes ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
          </button>

          {expandedSections.causes && (
            <div className="p-6 border-t border-slate-100 space-y-6">
              <div>
                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">
                  {lang === 'ru' ? 'Фундаментальные предпосылки по сферам:' : 'Foundational Prerequisites by Sphere:'}
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                  {deep.causeAndEffectRu.prerequisites.map((p, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                      <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-bold bg-[#0039A6]/10 text-[#0039A6] mb-1.5">
                        {p.categoryRu}
                      </span>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                        {p.descriptionRu}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pretext vs Turning Point */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-orange-50/60 border border-orange-200">
                  <span className="text-xs font-bold text-orange-900 uppercase tracking-wide block mb-1">
                    {lang === 'ru' ? 'Повод к событиям (Триггер):' : 'Pretext / Trigger:'}
                  </span>
                  <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
                    {deep.causeAndEffectRu.pretextRu}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-red-50/60 border border-red-200">
                  <span className="text-xs font-bold text-red-900 uppercase tracking-wide block mb-1">
                    {lang === 'ru' ? 'Кульминационный / поворотный момент:' : 'Turning Point:'}
                  </span>
                  <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
                    {deep.causeAndEffectRu.turningPointRu}
                  </p>
                </div>
              </div>

              {/* Outcomes & Significance */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-blue-50/50 border border-blue-200">
                  <span className="text-xs font-bold text-[#0039A6] uppercase tracking-wide block mb-2">
                    {lang === 'ru' ? 'Непосредственные итоги:' : 'Short-Term Outcomes:'}
                  </span>
                  <ul className="space-y-1.5">
                    {deep.causeAndEffectRu.shortTermOutcomesRu.map((item, idx) => (
                      <li key={idx} className="text-xs sm:text-sm text-slate-700 flex items-start space-x-2">
                        <span className="text-[#0039A6] font-bold mt-0.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-emerald-50/50 border border-emerald-200">
                  <span className="text-xs font-bold text-emerald-800 uppercase tracking-wide block mb-2">
                    {lang === 'ru' ? 'Долгосрочное всемирно-историческое значение:' : 'Long-Term Significance:'}
                  </span>
                  <ul className="space-y-1.5">
                    {deep.causeAndEffectRu.longTermSignificanceRu.map((item, idx) => (
                      <li key={idx} className="text-xs sm:text-sm text-slate-800 flex items-start space-x-2">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Section 2: Historiographical Debates */}
      {deep?.historiographyDebatesRu && deep.historiographyDebatesRu.length > 0 && (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
          <button
            onClick={() => toggleSection('debates')}
            className="w-full px-6 py-4 flex items-center justify-between bg-slate-50/70 hover:bg-slate-100/70 transition-colors cursor-pointer text-left"
          >
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-xl bg-purple-100 text-purple-800 flex items-center justify-center font-bold">
                <Scale className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900">
                  {lang === 'ru' ? '2. Историографические дискуссии (Взгляды историков)' : '2. Historiographical Debates'}
                </h3>
                <p className="text-xs text-slate-500">
                  {lang === 'ru' ? 'Полярные концепции ученых и современный академический консенсус' : 'Scholarly viewpoints and modern consensus'}
                </p>
              </div>
            </div>
            {expandedSections.debates ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
          </button>

          {expandedSections.debates && (
            <div className="p-6 border-t border-slate-100 space-y-6">
              {deep.historiographyDebatesRu.map((debate, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-purple-50/30 border border-purple-200 space-y-4">
                  <div className="flex items-center space-x-2">
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-200 text-purple-900">
                      Дискуссия {idx + 1}
                    </span>
                    <h4 className="text-sm sm:text-base font-bold text-slate-900">
                      {debate.topic}
                    </h4>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-white border border-purple-200/80 shadow-2xs">
                      <span className="text-xs font-bold text-indigo-700 block mb-1">
                        {debate.viewpointA.historianOrSchool}
                      </span>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        {debate.viewpointA.argument}
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-white border border-purple-200/80 shadow-2xs">
                      <span className="text-xs font-bold text-purple-700 block mb-1">
                        {debate.viewpointB.historianOrSchool}
                      </span>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        {debate.viewpointB.argument}
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-xs sm:text-sm text-slate-800">
                    <strong className="text-emerald-900 font-bold block mb-0.5">
                      {lang === 'ru' ? 'Современный научный консенсус:' : 'Modern Academic Consensus:'}
                    </strong>
                    {debate.modernConsensus}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Section 3: Primary Source Documents with Exam Practice */}
      {sources.length > 0 && (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
          <button
            onClick={() => toggleSection('sources')}
            className="w-full px-6 py-4 flex items-center justify-between bg-slate-50/70 hover:bg-slate-100/70 transition-colors cursor-pointer text-left"
          >
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-xl bg-blue-100 text-[#0039A6] flex items-center justify-center font-bold">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900">
                  {lang === 'ru' ? '3. Исторические первоисточники и практикум ОГЭ / ЕГЭ' : '3. Primary Sources & Exam Practice'}
                </h3>
                <p className="text-xs text-slate-500">
                  {lang === 'ru' ? 'Тексты летописей, указов, грамот с вопросами на атрибуцию' : 'Chronicle & decree excerpts with attribution questions'}
                </p>
              </div>
            </div>
            {expandedSections.sources ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
          </button>

          {expandedSections.sources && (
            <div className="p-6 border-t border-slate-100 space-y-6">
              {sources.map((doc) => {
                const isRevealed = revealedAnswers[doc.id];
                return (
                  <div key={doc.id} className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200/80 pb-3">
                      <div>
                        <h4 className="text-sm sm:text-base font-bold text-slate-900">
                          {lang === 'ru' ? doc.titleRu : doc.titleEn}
                        </h4>
                        <span className="text-xs text-slate-500 font-medium">
                          {doc.authorOrSourceRu} • {doc.yearOrCentury}
                        </span>
                      </div>
                      <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-blue-100 text-[#0039A6]">
                        {lang === 'ru' ? 'Подлинный документ' : 'Authentic Document'}
                      </span>
                    </div>

                    <blockquote className="text-xs sm:text-sm font-serif italic text-slate-800 bg-white p-4 rounded-xl border border-slate-200 shadow-2xs leading-relaxed border-l-4 border-l-[#0039A6]">
                      {doc.excerptRu}
                    </blockquote>

                    <p className="text-xs sm:text-sm text-slate-600">
                      <strong className="text-slate-800">{lang === 'ru' ? 'Историко-правовой анализ: ' : 'Analysis: '}</strong>
                      {doc.analysisRu}
                    </p>

                    <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200">
                      <div className="flex items-start space-x-2 mb-2">
                        <HelpCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                        <span className="text-xs font-bold text-amber-900">
                          {lang === 'ru' ? 'Экзаменационный вопрос (ОГЭ / ЕГЭ):' : 'Exam Question:'}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm font-semibold text-slate-900 mb-3">
                        {doc.examQuestionRu}
                      </p>

                      <button
                        onClick={() => toggleAnswer(doc.id)}
                        className="px-3 py-1.5 rounded-lg bg-white border border-amber-300 text-amber-900 text-xs font-bold hover:bg-amber-100/50 transition-colors flex items-center space-x-1.5 cursor-pointer shadow-2xs"
                      >
                        {isRevealed ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                        <span>{isRevealed ? (lang === 'ru' ? 'Скрыть эталонный ответ' : 'Hide Answer') : (lang === 'ru' ? 'Показать эталонный ответ эксперта' : 'Show Model Answer')}</span>
                      </button>

                      {isRevealed && (
                        <div className="mt-3 p-3 rounded-lg bg-emerald-50 border border-emerald-200 text-xs sm:text-sm text-emerald-950 animate-fadeIn">
                          <span className="font-bold block mb-1">{lang === 'ru' ? 'Критерии ФИПИ и эталонный ответ:' : 'Model Answer:'}</span>
                          {doc.examAnswerRu}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* Section 4: Geography & Geopolitical Context */}
      {deep?.geographyRu && (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
          <button
            onClick={() => toggleSection('geography')}
            className="w-full px-6 py-4 flex items-center justify-between bg-slate-50/70 hover:bg-slate-100/70 transition-colors cursor-pointer text-left"
          >
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center font-bold">
                <Compass className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900">
                  {lang === 'ru' ? '4. Географический и картографический контекст' : '4. Geographical & Cartographic Context'}
                </h3>
                <p className="text-xs text-slate-500">
                  {lang === 'ru' ? 'Ключевые географические точки, границы и стратегическое значение' : 'Key locations, borders and geopolitical roles'}
                </p>
              </div>
            </div>
            {expandedSections.geography ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
          </button>

          {expandedSections.geography && (
            <div className="p-6 border-t border-slate-100 space-y-4">
              <div className="p-3.5 bg-teal-50/50 rounded-xl border border-teal-200 text-xs sm:text-sm text-teal-950">
                <strong className="block mb-1 font-bold">{lang === 'ru' ? 'Геополитическое значение периода:' : 'Geopolitical Significance:'}</strong>
                {deep.geographyRu.strategicSignificance}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5">
                {deep.geographyRu.keyLocations.map((loc, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="flex items-center space-x-1.5 text-teal-700 font-bold text-xs mb-1">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{loc.name}</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {loc.role}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
