import { Check, ShieldCheck, Gift, Zap, Lock } from 'lucide-react';
import { OfferConfig } from '../types';
import { PRODUCT_BUNDLE_IMAGE } from '../data/content';

interface OfferCardSectionProps {
  config: OfferConfig;
  onCtaClick: () => void;
  onOpenImage: (imageSrc: string, title: string) => void;
}

export function OfferCardSection({ config, onCtaClick, onOpenImage }: OfferCardSectionProps) {
  return (
    <section id="oferta" className="bg-[#F5F7FA] py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        {/* Highlighted Vertical Offer Card */}
        <div className="bg-white rounded-3xl border-2 border-[#FF9500] shadow-xl overflow-hidden transition-all duration-300 relative">
          
          {/* Top Urgency Header Badge */}
          <div className="bg-[#E53935] text-white py-2.5 px-4 text-center text-xs sm:text-sm font-extrabold tracking-wider flex items-center justify-center gap-1.5 uppercase">
            <Zap className="w-4 h-4 fill-white" />
            <span>🔥 OFERTA ESPECIAL — APROVEITE HOJE</span>
          </div>

          <div className="p-6 sm:p-10 text-center">
            {/* Card Title */}
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#07152B] tracking-tight mb-6">
              {config.productTitle}
            </h3>

            {/* Product Mockup Image */}
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-md mb-8 group cursor-pointer">
              <img
                src={PRODUCT_BUNDLE_IMAGE}
                alt={config.productTitle}
                className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-300"
                onClick={() => onOpenImage(PRODUCT_BUNDLE_IMAGE, config.productTitle)}
              />
            </div>

            {/* Included Core Benefits */}
            <div className="text-left space-y-2.5 mb-6 text-sm text-[#07152B]">
              <div className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span className="font-semibold">+180 mapas mentais de Matemática</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span>Fórmulas organizadas por assunto</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span>Conteúdo do Ensino Médio e Concursos Públicos</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span>Material visual e de fácil consulta</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span>Acesso Vitalício</span>
              </div>
            </div>

            {/* Bonus Items Area */}
            {config.bonuses && config.bonuses.length > 0 && (
              <div className="space-y-2 mb-8 text-left">
                {config.bonuses.map((bonus) => (
                  <div
                    key={bonus.id}
                    className="bg-[#FFF8E7] border border-[#FFE082] rounded-xl p-3 flex items-start gap-2.5 text-xs text-[#5D4037]"
                  >
                    <Gift className="w-4 h-4 text-[#FF9500] shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-[#BF360C]">{bonus.title}</span>
                        <span className="text-[10px] bg-[#FFE082] text-[#E65100] px-1.5 py-0.2 rounded font-bold">
                          GRÁTIS
                        </span>
                      </div>
                      <p className="text-[11px] text-[#795548] mt-0.5">{bonus.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Price Box */}
            <div className="py-6 border-t border-b border-slate-100 mb-6">
              {config.originalPrice && (
                <div className="text-sm text-slate-400 line-through font-medium">
                  de {config.originalPrice}
                </div>
              )}

              <div className="flex items-baseline justify-center gap-1.5 mt-1 text-[#07152B]">
                <span className="text-2xl font-bold text-[#FF9500]">R$</span>
                <span className="text-5xl sm:text-6xl font-black tracking-tight text-[#FF9500]">
                  {config.promoPrice}
                </span>
              </div>

              {config.installments && (
                <div className="text-xs sm:text-sm font-semibold text-slate-600 mt-1">
                  {config.installments}
                </div>
              )}

              {config.savingsText && (
                <div className="inline-block mt-2 bg-emerald-50 text-emerald-700 font-bold text-xs px-3 py-1 rounded-full border border-emerald-200">
                  {config.savingsText}
                </div>
              )}
            </div>

            {/* Primary Purchase Button */}
            <button
              onClick={onCtaClick}
              className="w-full py-4 px-6 bg-[#FF9500] hover:bg-[#E08500] active:scale-[0.99] text-white font-black text-lg sm:text-xl rounded-xl shadow-lg hover:shadow-orange-500/30 transition-all duration-200 uppercase tracking-wide cursor-pointer flex items-center justify-center gap-2"
            >
              <span>QUERO COMPRAR AGORA</span>
            </button>

            {/* Trust and Payment Security Badges */}
            <div className="mt-5">
              <div className="flex items-center justify-center gap-2 text-xs font-semibold text-slate-500">
                <Lock className="w-3.5 h-3.5 text-emerald-600" />
                <span>Compra segura | Acesso digital imediato</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
