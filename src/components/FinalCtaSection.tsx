import { ArrowRight, Lock } from 'lucide-react';

interface FinalCtaSectionProps {
  onCtaClick: () => void;
  promoPrice: string;
}

export function FinalCtaSection({ onCtaClick, promoPrice }: FinalCtaSectionProps) {
  return (
    <footer className="bg-[#07152B] text-white pt-16 md:pt-20 pb-12 px-4 sm:px-6 lg:px-8 border-t border-slate-800">
      <div className="max-w-3xl mx-auto text-center">
        {/* Main Final CTA Callout */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight leading-snug mb-4">
          Comece a estudar <span className="text-[#FF9500]">Matemática</span> de um jeito mais organizado!
        </h2>

        <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto font-light mb-8">
          Tenha todas as fórmulas do Ensino Médio e Concursos Públicos sempre à mão. Estude com mais foco, rapidez e segurança para suas provas e vestibulares.
        </p>

        {/* CTA Button */}
        <div className="max-w-md mx-auto mb-12">
          <button
            onClick={onCtaClick}
            className="w-full py-4 px-8 bg-[#16A34A] hover:bg-[#15803D] active:scale-[0.99] text-white font-extrabold text-lg sm:text-xl rounded-xl shadow-xl hover:shadow-green-500/25 transition-all duration-200 uppercase tracking-wide cursor-pointer flex items-center justify-center gap-2"
          >
            <span>QUERO GARANTIR POR R${promoPrice}</span>
            <ArrowRight className="w-5 h-5" />
          </button>

          <p className="text-xs text-slate-400 mt-2.5 flex items-center justify-center gap-1.5">
            <Lock className="w-3.5 h-3.5 text-emerald-400" />
            <span>Acesso imediato e 7 dias de garantia incondicional</span>
          </p>
        </div>

        {/* Simple Footer Links & Legal */}
        <div className="border-t border-slate-800/80 pt-8 text-center text-xs text-slate-400">
          <p className="text-[11px] text-slate-400 leading-relaxed max-w-xl mx-auto">
            © {new Date().getFullYear()} Mapas Mentais de Fórmulas de Matemática. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
