import { ShieldCheck, Award } from 'lucide-react';

interface GuaranteeSectionProps {
  days?: number;
}

export function GuaranteeSection({ days = 7 }: GuaranteeSectionProps) {
  return (
    <section className="bg-[#EAF3FF] py-16 md:py-20 px-4 sm:px-6 lg:px-8 border-b border-[#D6E6FA]">
      <div className="max-w-2xl mx-auto text-center flex flex-col items-center">
        {/* Shield Icon / Seal */}
        <div className="w-16 h-16 rounded-full bg-white border-2 border-[#1769D2] text-[#1769D2] flex items-center justify-center shadow-md mb-4 relative">
          <ShieldCheck className="w-9 h-9 text-[#1769D2]" />
          <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-[#FF9500] text-white flex items-center justify-center font-bold text-[10px]">
            {days}d
          </div>
        </div>

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#07152B] tracking-tight mb-3">
          Garantia de {days} dias
        </h2>

        {/* Text */}
        <p className="text-sm sm:text-base text-slate-700 leading-relaxed max-w-lg mb-4">
          Você tem {days} dias para conhecer o material. Se não ficar satisfeito, poderá solicitar o reembolso dentro do prazo de garantia.
        </p>

        <p className="text-xs sm:text-sm text-slate-500 font-medium">
          Teste sem risco por {days} dias. Se não gostar, devolvemos 100% do seu dinheiro. Sem burocracia. Sem perguntas.
        </p>
      </div>
    </section>
  );
}
