import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQ_DATA } from '../data/content';
import { FaqItem } from '../types';

interface FaqSectionProps {
  customFaq?: FaqItem[];
}

export function FaqSection({ customFaq }: FaqSectionProps) {
  const faqs = customFaq || FAQ_DATA;
  // Start all FAQ items collapsed on page load
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="bg-[#EAF3FF] py-16 md:py-24 px-4 sm:px-6 lg:px-8 border-b border-[#D6E6FA]">
      <div className="max-w-3xl mx-auto">
        {/* Title */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1769D2] uppercase tracking-wider mb-2">
            <HelpCircle className="w-4 h-4 text-[#FF9500]" />
            <span>Tire suas dúvidas</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#07152B] tracking-tight">
            Perguntas Frequentes
          </h2>
          <p className="mt-2 text-slate-600 text-sm sm:text-base">
            Tudo o que você precisa saber sobre os mapas mentais antes de começar.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl border border-[#BED7FA] overflow-hidden shadow-2xs transition-colors"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full py-4 px-5 sm:px-6 text-left flex items-center justify-between gap-4 font-bold text-[#07152B] text-sm sm:text-base cursor-pointer hover:text-[#1769D2] transition-colors"
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <div
                    className={`w-7 h-7 rounded-full bg-[#EAF3FF] text-[#1769D2] flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-[#1769D2] text-white' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-4 pt-1 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
