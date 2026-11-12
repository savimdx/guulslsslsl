import { CheckCircle2, ShieldCheck, Sparkles, BookOpen, Smartphone, FolderTree, Eye, Clock } from 'lucide-react';
import { PRODUCT_BUNDLE_IMAGE, MATH_TOPICS_TAGS } from '../data/content';

interface HeroSectionProps {
  onCtaClick: () => void;
  onOpenImage: (imageSrc: string, title: string) => void;
  subtitle?: string;
}

export function HeroSection({ onCtaClick, onOpenImage, subtitle }: HeroSectionProps) {
  const displaySubtitle =
    subtitle ||
    'Aprenda, revise e memorize as principais fórmulas de Matemática de maneira visual, simples e organizada. Tenha tudo o que precisa para estudar em um só lugar, serve para o Ensino Médio e para Concursos Públicos!';

  return (
    <section className="relative bg-[#EAF3FF] pt-8 md:pt-14 pb-16 px-4 sm:px-6 lg:px-8 border-b border-[#D6E6FA] overflow-hidden">
      {/* Decorative math background subtle grid */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#1769D2 1.5px, transparent 1.5px)`,
          backgroundSize: '24px 24px',
        }}
      />

      <div className="relative max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Top Trust & Quality Badge */}
        <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-xs px-4 py-1.5 rounded-full border border-[#BED7FA] text-[#1769D2] text-xs md:text-sm font-semibold shadow-xs mb-6">
          <BookOpen className="w-4 h-4 text-[#FF9500]" />
          <span>MATERIAL COMPLETO DE MATEMÁTICA</span>
          <span className="text-slate-300 font-normal">|</span>
          <span className="text-slate-600 font-medium flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            Compra 100% Segura
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-extrabold text-[#07152B] tracking-tight leading-[1.15] mb-5 max-w-4xl">
          <span className="text-[#FF9500] drop-shadow-xs">+180 Mapas Mentais</span>{' '}
          de Fórmulas de Matemática do Ensino Médio e Concursos Públicos
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-[#2C4160] max-w-3xl font-normal leading-relaxed mb-8">
          {displaySubtitle}
        </p>

        {/* Product Digital Mockup Showcase */}
        <div className="relative w-full max-w-3xl my-2 group">
          <div className="relative mx-auto rounded-2xl overflow-hidden shadow-2xl bg-white border border-[#D0E2FA] transition-transform duration-300 hover:scale-[1.01]">
            <img
              src={PRODUCT_BUNDLE_IMAGE}
              alt="Mockup do material de Mapas Mentais de Matemática do Ensino Médio"
              className="w-full h-auto object-cover cursor-pointer"
              onClick={() => onOpenImage(PRODUCT_BUNDLE_IMAGE, "Apostila Digital + Caderno de Mapas Mentais de Matemática")}
            />
          </div>
        </div>

        {/* CTA Button Block */}
        <div className="mt-8 flex flex-col items-center w-full max-w-md">
          <button
            onClick={onCtaClick}
            className="w-full py-4 px-8 bg-[#FF9500] hover:bg-[#E08500] active:scale-[0.99] text-white font-extrabold text-lg sm:text-xl rounded-xl shadow-lg hover:shadow-orange-500/25 transition-all duration-200 tracking-wide flex items-center justify-center gap-2 cursor-pointer uppercase"
          >
            <span>QUERO ACESSAR AGORA</span>
          </button>
          
          <div className="mt-3 flex items-center justify-center gap-1.5 text-xs sm:text-sm font-medium text-[#2C4160]">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Acesso imediato após a confirmação do pagamento.</span>
          </div>
        </div>

        {/* Social Proof Row: Avatars & Counter */}
        <div className="mt-7 flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm text-slate-700 bg-white/70 px-4 py-2 rounded-full border border-[#D5E5F9]">
          <div className="flex -space-x-2 overflow-hidden">
            <span className="inline-block h-7 w-7 rounded-full ring-2 ring-white bg-[#1769D2] text-white text-[11px] font-bold flex items-center justify-center">
              AO
            </span>
            <span className="inline-block h-7 w-7 rounded-full ring-2 ring-white bg-emerald-600 text-white text-[11px] font-bold flex items-center justify-center">
              LF
            </span>
            <span className="inline-block h-7 w-7 rounded-full ring-2 ring-white bg-[#FF9500] text-white text-[11px] font-bold flex items-center justify-center">
              BS
            </span>
            <span className="inline-block h-7 w-7 rounded-full ring-2 ring-white bg-purple-600 text-white text-[11px] font-bold flex items-center justify-center">
              MR
            </span>
            <span className="inline-block h-7 w-7 rounded-full ring-2 ring-white bg-slate-800 text-white text-[10px] font-bold flex items-center justify-center">
              +3k
            </span>
          </div>
          <span className="font-semibold text-[#07152B] flex items-center gap-1">
            ⭐ + de 3.400 alunos aprendendo
          </span>
        </div>

        {/* Subject pills - mirroring the reference country flags */}
        <div className="mt-6 flex flex-wrap justify-center gap-2 max-w-3xl">
          {MATH_TOPICS_TAGS.map((topic, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-semibold px-2.5 py-1 rounded-md bg-white border border-[#CFE1F7] text-[#1769D2] shadow-2xs"
            >
              <span className="text-[#FF9500] text-xs">📐</span>
              {topic}
            </span>
          ))}
        </div>

        {/* 4 Trust Highlights Grid */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 w-full max-w-4xl">
          <div className="bg-white/85 p-3.5 sm:p-4 rounded-xl border border-[#D4E4F7] text-left flex items-start gap-3 shadow-2xs">
            <div className="w-9 h-9 rounded-lg bg-[#EAF3FF] text-[#1769D2] flex items-center justify-center shrink-0">
              <Smartphone className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-[#07152B]">Acesso digital</h4>
              <p className="text-[11px] sm:text-xs text-slate-600 mt-0.5">Celular, tablet e computador</p>
            </div>
          </div>

          <div className="bg-white/85 p-3.5 sm:p-4 rounded-xl border border-[#D4E4F7] text-left flex items-start gap-3 shadow-2xs">
            <div className="w-9 h-9 rounded-lg bg-[#EAF3FF] text-[#1769D2] flex items-center justify-center shrink-0">
              <FolderTree className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-[#07152B]">Material organizado</h4>
              <p className="text-[11px] sm:text-xs text-slate-600 mt-0.5">Fórmulas por disciplina</p>
            </div>
          </div>

          <div className="bg-white/85 p-3.5 sm:p-4 rounded-xl border border-[#D4E4F7] text-left flex items-start gap-3 shadow-2xs">
            <div className="w-9 h-9 rounded-lg bg-[#EAF3FF] text-[#1769D2] flex items-center justify-center shrink-0">
              <Eye className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-[#07152B]">Fácil consulta</h4>
              <p className="text-[11px] sm:text-xs text-slate-600 mt-0.5">Esquemas visuais rápidos</p>
            </div>
          </div>

          <div className="bg-white/85 p-3.5 sm:p-4 rounded-xl border border-[#D4E4F7] text-left flex items-start gap-3 shadow-2xs">
            <div className="w-9 h-9 rounded-lg bg-[#EAF3FF] text-[#1769D2] flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-[#07152B]">Estude no seu ritmo</h4>
              <p className="text-[11px] sm:text-xs text-slate-600 mt-0.5">Acesso vitalício sem prazo</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
