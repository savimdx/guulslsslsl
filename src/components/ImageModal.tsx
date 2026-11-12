import { X, ZoomIn, ZoomOut, RotateCcw } from 'lucide-react';
import { useState } from 'react';

interface ImageModalProps {
  isOpen: boolean;
  imageSrc: string;
  title: string;
  onClose: () => void;
}

export function ImageModal({ isOpen, imageSrc, title, onClose }: ImageModalProps) {
  const [scale, setScale] = useState(1);

  if (!isOpen) return null;

  const zoomIn = () => setScale((s) => Math.min(s + 0.25, 2.5));
  const zoomOut = () => setScale((s) => Math.max(s - 0.25, 0.75));
  const resetZoom = () => setScale(1);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative max-w-5xl w-full max-h-[92vh] bg-slate-900 border border-slate-700 rounded-2xl overflow-hidden shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-3 sm:p-4 bg-slate-950/80 border-b border-slate-800 flex items-center justify-between text-white">
          <div className="truncate pr-4">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#FF9500]">
              Visualização em Alta Resolução
            </span>
            <h3 className="text-sm sm:text-base font-bold text-white truncate">{title}</h3>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <button
              onClick={zoomOut}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200"
              title="Diminuir zoom"
            >
              <ZoomOut className="w-4 h-4" />
            </button>
            <button
              onClick={zoomIn}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200"
              title="Aumentar zoom"
            >
              <ZoomIn className="w-4 h-4" />
            </button>
            <button
              onClick={resetZoom}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs px-2"
              title="Ajustar"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-red-600 hover:bg-red-700 text-white ml-2"
              title="Fechar"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Image viewport */}
        <div className="flex-1 overflow-auto p-4 flex items-center justify-center bg-slate-950/60 min-h-[350px]">
          <img
            src={imageSrc}
            alt={title}
            style={{ transform: `scale(${scale})` }}
            className="max-w-full max-h-[75vh] object-contain rounded-lg transition-transform duration-200 cursor-grab active:cursor-grabbing shadow-lg"
          />
        </div>

        {/* Footer info */}
        <div className="py-2.5 px-4 bg-slate-950 text-xs text-slate-400 flex items-center justify-between border-t border-slate-800">
          <span>Dica: use os botões de zoom para ver detalhes das fórmulas</span>
          <span className="font-mono text-[11px] text-[#FF9500] font-semibold">{Math.round(scale * 100)}%</span>
        </div>
      </div>
    </div>
  );
}
