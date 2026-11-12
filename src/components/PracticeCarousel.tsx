import { useState } from 'react';
import { ChevronLeft, ChevronRight, Maximize2, ZoomIn } from 'lucide-react';
import { MINDMAP_SLIDES } from '../data/content';

interface PracticeCarouselProps {
  onOpenImage: (imageSrc: string, title: string) => void;
}

export function PracticeCarousel({ onOpenImage }: PracticeCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? MINDMAP_SLIDES.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === MINDMAP_SLIDES.length - 1 ? 0 : prev + 1));
  };

  const currentSlide = MINDMAP_SLIDES[currentIndex];

  return (
    <section className="bg-[#07152B] py-16 md:py-24 px-4 sm:px-6 lg:px-8 text-white relative overflow-hidden">
      {/* Background glow and subtle geometry watermark */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-72 bg-[#1769D2]/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-3">
          Veja o material <span className="text-[#FF9500]">na prática</span>
        </h2>
        <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto font-light mb-8">
          Mapas mentais elaborados com rigor pedagógico, hierarquia visual impecável e fórmulas prontas para memorização.
        </p>

        {/* Carousel Showcase Container */}
        <div className="relative max-w-4xl mx-auto bg-slate-900/70 border border-slate-700/80 rounded-2xl p-3 sm:p-5 shadow-2xl backdrop-blur-md">
          {/* Main Slide Image */}
          <div className="relative rounded-xl overflow-hidden bg-white shadow-inner flex items-center justify-center group">
            <img
              src={currentSlide.image}
              alt={currentSlide.title}
              className="w-full h-auto max-h-[580px] object-contain transition-transform duration-300 group-hover:scale-[1.01] cursor-pointer"
              onClick={() => onOpenImage(currentSlide.image, currentSlide.title)}
            />

            {/* Hover overlay hint */}
            <div 
              onClick={() => onOpenImage(currentSlide.image, currentSlide.title)}
              className="absolute inset-0 bg-[#07152B]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer backdrop-blur-[2px]"
            >
              <span className="bg-[#FF9500] hover:bg-[#E08500] text-white text-sm font-bold px-4 py-2 rounded-xl flex items-center gap-2 shadow-xl transform translate-y-2 group-hover:translate-y-0 transition-all">
                <ZoomIn className="w-4 h-4" />
                Ampliar em Alta Resolução
              </span>
            </div>

            {/* Quick full screen button */}
            <button
              onClick={() => onOpenImage(currentSlide.image, currentSlide.title)}
              className="absolute top-3 right-3 p-2 bg-[#07152B]/80 hover:bg-[#07152B] text-white rounded-lg backdrop-blur-xs transition-colors"
              title="Expandir imagem"
              aria-label="Expandir imagem"
            >
              <Maximize2 className="w-4 h-4 text-[#FF9500]" />
            </button>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            aria-label="Mapa anterior"
            className="absolute left-2 sm:-left-5 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-[#FF9500] hover:bg-[#E08500] text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer z-20"
          >
            <ChevronLeft className="w-6 h-6 stroke-[3]" />
          </button>

          <button
            onClick={nextSlide}
            aria-label="Próximo mapa"
            className="absolute right-2 sm:-right-5 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-[#FF9500] hover:bg-[#E08500] text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer z-20"
          >
            <ChevronRight className="w-6 h-6 stroke-[3]" />
          </button>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center gap-2 mt-4">
            {MINDMAP_SLIDES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Ir para slide ${idx + 1}`}
                className={`transition-all duration-200 rounded-full cursor-pointer ${
                  idx === currentIndex
                    ? 'w-7 h-2.5 bg-[#FF9500]'
                    : 'w-2.5 h-2.5 bg-slate-600 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
