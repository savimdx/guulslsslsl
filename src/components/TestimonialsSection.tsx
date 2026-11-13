import { Star } from 'lucide-react';
import { TESTIMONIAL_IMAGES } from '../data/content';
import { TestimonialItem } from '../types';

interface TestimonialsSectionProps {
  customTestimonials?: TestimonialItem[];
  onOpenCustomizer?: () => void;
}

export function TestimonialsSection(_props: TestimonialsSectionProps) {
  const halfSet = [...TESTIMONIAL_IMAGES, ...TESTIMONIAL_IMAGES];
  const repeatedImages = [...halfSet, ...halfSet];

  return (
    <section className="bg-white py-16 md:py-24 border-b border-slate-100 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Title & Stars */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#07152B] tracking-tight mb-2">
          O que os alunos <span className="text-[#FF9500]">dizem</span>
        </h2>

        {/* 5 Stars */}
        <div className="flex items-center justify-center gap-1 text-amber-400 mb-3">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
          ))}
        </div>

        <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto mb-10">
          Veja como o material pode ajudar na organização dos estudos.
        </p>
      </div>

      {/* Continuous Infinite Non-Interactive Horizontal Marquee */}
      <div className="relative w-full overflow-hidden pointer-events-none select-none touch-none">
        {/* Subtle edge fade gradients */}
        <div className="absolute inset-y-0 left-0 w-10 sm:w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-10 sm:w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="animate-infinite-marquee-testimonials py-2 items-center">
          {repeatedImages.map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              className="shrink-0 mr-4 sm:mr-6 rounded-2xl overflow-hidden shadow-xl border border-slate-200"
            >
              <img
                src={item.image}
                alt={item.alt}
                referrerPolicy="no-referrer"
                draggable={false}
                className="h-[360px] sm:h-[420px] md:h-[460px] w-auto block"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
