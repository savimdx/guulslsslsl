import { CheckCircle2, Layers } from 'lucide-react';
import { WHAT_YOU_RECEIVE_ITEMS } from '../data/content';

export function WhatYouReceive() {
  return (
    <section className="bg-white py-16 md:py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-100">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1769D2] uppercase tracking-wider mb-2">
            <Layers className="w-4 h-4 text-[#FF9500]" />
            <span>Conteúdo Completo & Estruturado</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#07152B] tracking-tight">
            O que você recebe
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base max-w-xl mx-auto">
            Um acervo completo projetado para transformar o seu rendimento em Matemática, do básico às questões mais complexas.
          </p>
        </div>

        {/* Two Columns Benefit Grid with Checks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 bg-[#F5F7FA] p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-xs">
          {WHAT_YOU_RECEIVE_ITEMS.map((item, idx) => (
            <div
              key={idx}
              className="flex items-start gap-3.5 p-3 rounded-xl bg-white border border-slate-200/60 shadow-2xs hover:border-[#1769D2]/40 transition-colors"
            >
              <div className="w-7 h-7 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-bold text-[#07152B] leading-snug">
                  {item.text}
                </h3>
                <p className="text-xs text-slate-500 mt-0.5 leading-normal">
                  {item.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
