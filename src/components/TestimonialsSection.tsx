import { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Phone, Video, CheckCheck, Play, Mic, MessageSquare } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/content';
import { TestimonialItem } from '../types';

interface TestimonialsSectionProps {
  customTestimonials?: TestimonialItem[];
  onOpenCustomizer?: () => void;
}

export function TestimonialsSection({ customTestimonials, onOpenCustomizer }: TestimonialsSectionProps) {
  const testimonials = customTestimonials && customTestimonials.length > 0 ? customTestimonials : TESTIMONIALS_DATA;
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const current = testimonials[currentIndex];

  return (
    <section className="bg-white py-16 md:py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-100">
      <div className="max-w-4xl mx-auto text-center">
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

        {/* Mobile Phone Mockup Carousel Container */}
        <div className="relative max-w-xs sm:max-w-sm mx-auto">
          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            aria-label="Depoimento anterior"
            className="absolute -left-4 sm:-left-12 top-1/2 -translate-y-1/2 w-10 h-10 bg-[#FF9500] hover:bg-[#E08500] text-white rounded-full flex items-center justify-center shadow-md transition-all hover:scale-105 active:scale-95 cursor-pointer z-30"
          >
            <ChevronLeft className="w-6 h-6 stroke-[3]" />
          </button>

          <button
            onClick={nextTestimonial}
            aria-label="Próximo depoimento"
            className="absolute -right-4 sm:-right-12 top-1/2 -translate-y-1/2 w-10 h-10 bg-[#FF9500] hover:bg-[#E08500] text-white rounded-full flex items-center justify-center shadow-md transition-all hover:scale-105 active:scale-95 cursor-pointer z-30"
          >
            <ChevronRight className="w-6 h-6 stroke-[3]" />
          </button>

          {/* Smartphone Frame */}
          <div className="relative border-4 border-[#07152B] rounded-[36px] p-2 bg-[#07152B] shadow-2xl overflow-hidden">
            {/* Notch */}
            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-4 bg-[#07152B] rounded-full z-20" />

            {/* Phone Screen Area */}
            <div className="bg-[#0b141a] rounded-[28px] overflow-hidden flex flex-col h-[520px] text-left relative">
              {/* WhatsApp Top Bar */}
              <div className="bg-[#1f2c34] text-white px-3 pt-6 pb-2.5 flex items-center justify-between border-b border-slate-700/60 z-10">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#1769D2] text-white flex items-center justify-center font-bold text-xs shrink-0 ring-1 ring-white/20 overflow-hidden">
                    {current.name.charAt(0)}
                  </div>
                  <div className="leading-tight">
                    <p className="font-semibold text-xs text-white truncate max-w-[130px]">
                      {current.name}
                    </p>
                    <p className="text-[10px] text-emerald-400">online</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-slate-300">
                  <Video className="w-4 h-4 opacity-75" />
                  <Phone className="w-3.5 h-3.5 opacity-75" />
                </div>
              </div>

              {/* Chat Message Scrollable Feed */}
              <div 
                className="flex-1 p-3 overflow-y-auto space-y-2.5 text-xs text-slate-100"
                style={{
                  backgroundImage: `radial-gradient(#1f2c34 1px, transparent 1px)`,
                  backgroundSize: '16px 16px',
                }}
              >
                {/* Date stamp */}
                <div className="text-center my-1">
                  <span className="bg-[#182229] text-[10px] text-slate-400 px-2.5 py-0.5 rounded-md shadow-xs">
                    Hoje
                  </span>
                </div>

                {current.chatMessages.map((msg, mIdx) => (
                  <div
                    key={mIdx}
                    className={`flex flex-col ${
                      msg.sender === 'student' ? 'items-end' : 'items-start'
                    }`}
                  >
                    <div
                      className={`max-w-[85%] rounded-lg p-2.5 shadow-sm relative ${
                        msg.sender === 'student'
                          ? 'bg-[#005c4b] text-white rounded-tr-none'
                          : 'bg-[#202c33] text-slate-200 rounded-tl-none'
                      }`}
                    >
                      <p className="text-[12px] leading-snug">{msg.text}</p>
                      <div className="flex items-center justify-end gap-1 mt-1 text-[9px] text-slate-300/80">
                        <span>{msg.time}</span>
                        {msg.sender === 'student' && (
                          <CheckCheck className="w-3 h-3 text-cyan-400" />
                        )}
                      </div>
                    </div>
                  </div>
                ))}

                {/* Simulated Audio Note if exists */}
                {current.audioNote && (
                  <div className="flex flex-col items-end">
                    <div className="max-w-[85%] bg-[#005c4b] text-white rounded-lg rounded-tr-none p-2.5 shadow-sm">
                      <div className="flex items-center gap-2">
                        <button className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                          <Play className="w-3.5 h-3.5 fill-white text-white ml-0.5" />
                        </button>
                        <div className="flex-1">
                          <div className="h-1 bg-white/40 rounded-full w-28 overflow-hidden">
                            <div className="h-full bg-cyan-300 w-1/3" />
                          </div>
                          <div className="flex justify-between items-center text-[9px] text-slate-300 mt-1">
                            <span>{current.audioNote.duration}</span>
                            <span>{current.audioNote.time}</span>
                          </div>
                        </div>
                        <Mic className="w-3.5 h-3.5 text-cyan-300 shrink-0" />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Chat Input Bar */}
              <div className="bg-[#1f2c34] p-2 flex items-center gap-2 border-t border-slate-700/60">
                <div className="flex-1 bg-[#2a3942] rounded-full px-3 py-1.5 text-[11px] text-slate-400">
                  Mensagem
                </div>
                <div className="w-7 h-7 rounded-full bg-[#00a884] text-white flex items-center justify-center shrink-0">
                  <Mic className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center gap-2 mt-5">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Ver depoimento ${idx + 1}`}
                className={`transition-all rounded-full cursor-pointer ${
                  idx === currentIndex
                    ? 'w-6 h-2 bg-[#FF9500]'
                    : 'w-2 h-2 bg-slate-300 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Space reservation note & config button */}
        <div className="mt-8 inline-flex items-center gap-2 text-xs text-slate-500 bg-slate-50 px-4 py-2 rounded-lg border border-slate-200">
          <MessageSquare className="w-3.5 h-3.5 text-[#1769D2]" />
          <span>Espaço reservado para depoimentos reais dos seus estudantes.</span>
          {onOpenCustomizer && (
            <button
              onClick={onOpenCustomizer}
              className="text-[#1769D2] hover:underline font-semibold ml-1 cursor-pointer"
            >
              Configurar depoimentos
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
