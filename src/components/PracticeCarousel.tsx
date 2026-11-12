import { MINDMAP_SLIDES } from '../data/content';

interface PracticeCarouselProps {
  onOpenImage?: (imageSrc: string, title: string) => void;
}

export function PracticeCarousel(_props: PracticeCarouselProps) {
  const repeatedSlides = [...MINDMAP_SLIDES, ...MINDMAP_SLIDES];

  return (
    <section className="bg-[#07152B] py-16 md:py-24 text-white relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-72 bg-[#1769D2]/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-3">
          Veja o material <span className="text-[#FF9500]">na prática</span>
        </h2>
        <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto font-light mb-10">
          Mapas mentais elaborados com rigor pedagógico, hierarquia visual impecável e fórmulas prontas para memorização.
        </p>
      </div>

      {/* Continuous Infinite Non-Interactive Horizontal Marquee */}
      <div className="relative w-full overflow-hidden pointer-events-none select-none touch-none">
        {/* Subtle edge fade gradients */}
        <div className="absolute inset-y-0 left-0 w-10 sm:w-20 bg-gradient-to-r from-[#07152B] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-10 sm:w-20 bg-gradient-to-l from-[#07152B] to-transparent z-10 pointer-events-none" />

        <div className="animate-infinite-marquee py-2 items-center">
          {repeatedSlides.map((slide, idx) => (
            <div
              key={`${slide.id}-${idx}`}
              className="shrink-0 mr-4 sm:mr-6 rounded-2xl overflow-hidden shadow-2xl border border-slate-700/60"
            >
              <img
                src={slide.image}
                alt={slide.title}
                referrerPolicy="no-referrer"
                draggable={false}
                className="h-[240px] sm:h-[360px] md:h-[440px] w-auto block"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
