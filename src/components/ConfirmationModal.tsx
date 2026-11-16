import React from 'react';
import { AlertTriangle, Calendar, Trash2, CheckCircle2 } from 'lucide-react';

interface ConfirmationModalProps {
  isOpen: boolean;
  title: string;
  description: string;
  itemCount?: number;
  itemsPreview?: string[];
  confirmLabel: string;
  confirmVariant?: 'primary' | 'danger';
  onConfirm: () => void;
  onCancel: () => void;
  isLoading?: boolean;
}

export const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  isOpen,
  title,
  description,
  itemCount,
  itemsPreview,
  confirmLabel,
  confirmVariant = 'primary',
  onConfirm,
  onCancel,
  isLoading = false,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fadeIn">
      <div className="bg-white rounded-2xl max-w-lg w-full shadow-2xl border border-slate-200 overflow-hidden transform transition-all">
        {/* Header */}
        <div className="p-6 pb-4">
          <div className="flex items-start space-x-4">
            <div
              className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                confirmVariant === 'danger'
                  ? 'bg-rose-50 text-rose-600 border border-rose-200'
                  : 'bg-blue-50 text-[#0039A6] border border-blue-200'
              }`}
            >
              {confirmVariant === 'danger' ? (
                <Trash2 className="w-6 h-6" />
              ) : (
                <Calendar className="w-6 h-6" />
              )}
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-slate-900 leading-snug">{title}</h3>
              <p className="mt-1 text-sm text-slate-600 leading-relaxed">{description}</p>
            </div>
          </div>

          {/* Items preview if count > 0 */}
          {itemCount !== undefined && itemCount > 0 && (
            <div className="mt-4 p-3.5 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-700">
              <div className="flex items-center justify-between font-semibold text-slate-900 mb-1.5">
                <span>Количество событий в Google Календаре:</span>
                <span className="px-2 py-0.5 bg-blue-100 text-[#0039A6] rounded-md font-bold">
                  {itemCount} дн.
                </span>
              </div>
              {itemsPreview && itemsPreview.length > 0 && (
                <ul className="space-y-1 mt-2 text-slate-600 max-h-32 overflow-y-auto pr-1">
                  {itemsPreview.slice(0, 5).map((item, idx) => (
                    <li key={idx} className="flex items-center space-x-1.5 truncate">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></span>
                      <span className="truncate">{item}</span>
                    </li>
                  ))}
                  {itemsPreview.length > 5 && (
                    <li className="text-slate-400 italic pt-0.5">
                      ...и ещё {itemsPreview.length - 5} событий
                    </li>
                  )}
                </ul>
              )}
            </div>
          )}

          {/* Security note */}
          <div className="mt-4 flex items-center space-x-2 text-[11px] text-slate-500">
            <AlertTriangle className="w-3.5 h-3.5 text-amber-500 shrink-0" />
            <span>Действие выполняется в вашем личном Google Календаре с вашего согласия.</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="bg-slate-50 px-6 py-4 flex items-center justify-end space-x-3 border-t border-slate-200">
          <button
            type="button"
            onClick={onCancel}
            disabled={isLoading}
            className="px-4 py-2.5 rounded-xl border border-slate-300 text-slate-700 hover:bg-white font-medium text-xs sm:text-sm transition-colors cursor-pointer disabled:opacity-50"
          >
            Отмена
          </button>
          <button
            type="button"
            onClick={onConfirm}
            disabled={isLoading}
            className={`px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-white shadow-md transition-all cursor-pointer flex items-center space-x-2 ${
              confirmVariant === 'danger'
                ? 'bg-rose-600 hover:bg-rose-700 shadow-rose-600/20'
                : 'bg-[#0039A6] hover:bg-[#002d84] shadow-blue-800/20'
            } disabled:opacity-50`}
          >
            {isLoading ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Выполняется...</span>
              </>
            ) : (
              <>
                {confirmVariant === 'danger' ? (
                  <Trash2 className="w-4 h-4" />
                ) : (
                  <CheckCircle2 className="w-4 h-4" />
                )}
                <span>{confirmLabel}</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
