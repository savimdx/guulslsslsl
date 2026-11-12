/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Sliders } from 'lucide-react';
import { DEFAULT_CONFIG } from './data/content';
import { OfferConfig } from './types';

import { OfferBar } from './components/OfferBar';
import { HeroSection } from './components/HeroSection';
import { PracticeCarousel } from './components/PracticeCarousel';
import { WhatYouReceive } from './components/WhatYouReceive';
import { ProblemSolution } from './components/ProblemSolution';
import { TestimonialsSection } from './components/TestimonialsSection';
import { OfferCardSection } from './components/OfferCardSection';
import { GuaranteeSection } from './components/GuaranteeSection';
import { FaqSection } from './components/FaqSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { ConfigDrawer } from './components/ConfigDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { ImageModal } from './components/ImageModal';

const CONFIG_STORAGE_KEY = 'math_salespage_config_v1';

export default function App() {
  const [config, setConfig] = useState<OfferConfig>(() => {
    try {
      const saved = localStorage.getItem(CONFIG_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        // Ensure new subtitle is adopted if user had an older version stored
        if (
          !parsed.heroSubtitle ||
          parsed.heroSubtitle.includes('em um só lugar!') &&
          !parsed.heroSubtitle.includes('Concursos Públicos')
        ) {
          parsed.heroSubtitle = DEFAULT_CONFIG.heroSubtitle;
        }
        return { ...DEFAULT_CONFIG, ...parsed };
      }
    } catch {
      // fallback
    }
    return DEFAULT_CONFIG;
  });

  const [isConfigOpen, setIsConfigOpen] = useState(false);
  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);
  
  // Image lightbox state
  const [lightboxData, setLightboxData] = useState<{ isOpen: boolean; src: string; title: string }>({
    isOpen: false,
    src: '',
    title: '',
  });

  const handleSaveConfig = (newConfig: OfferConfig) => {
    setConfig(newConfig);
    try {
      localStorage.setItem(CONFIG_STORAGE_KEY, JSON.stringify(newConfig));
    } catch {
      // storage unavailable
    }
  };

  const handleUpdateCheckoutUrl = (url: string) => {
    const updated = { ...config, checkoutUrl: url };
    handleSaveConfig(updated);
  };

  // Universal CTA action: if custom checkout URL is set, redirect; else open preview checkout modal
  const handleUniversalCta = () => {
    if (config.checkoutUrl && config.checkoutUrl.trim().startsWith('http')) {
      window.open(config.checkoutUrl.trim(), '_blank');
    } else {
      setIsCheckoutModalOpen(true);
    }
  };

  const handleOpenImage = (src: string, title: string) => {
    setLightboxData({
      isOpen: true,
      src,
      title,
    });
  };

  const handleCloseImage = () => {
    setLightboxData((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <div className="min-h-screen bg-white text-[#07152B] selection:bg-[#FF9500] selection:text-white flex flex-col font-sans">
      {/* SEÇÃO 1 — BARRA DE OFERTA */}
      <OfferBar bannerText={config.topBannerText} />

      {/* Main Page Flow */}
      <main className="flex-1">
        {/* SEÇÃO 2 — HERO PRINCIPAL */}
        <HeroSection 
          onCtaClick={handleUniversalCta} 
          onOpenImage={handleOpenImage} 
          subtitle={config.heroSubtitle}
        />

        {/* SEÇÃO 3 — VEJA O MATERIAL NA PRÁTICA */}
        <PracticeCarousel onOpenImage={handleOpenImage} />

        {/* SEÇÃO 4 — O QUE VOCÊ RECEBE */}
        <WhatYouReceive />

        {/* SEÇÃO 5 — PROBLEMA E SOLUÇÃO */}
        <ProblemSolution />

        {/* SEÇÃO 6 — DEPOIMENTOS */}
        <TestimonialsSection onOpenCustomizer={() => setIsConfigOpen(true)} />

        {/* SEÇÃO 7 — OFERTA PRINCIPAL */}
        <OfferCardSection
          config={config}
          onCtaClick={handleUniversalCta}
          onOpenImage={handleOpenImage}
        />

        {/* SEÇÃO 8 — GARANTIA */}
        <GuaranteeSection days={config.guaranteeDays} />

        {/* SEÇÃO 9 — PERGUNTAS FREQUENTES */}
        <FaqSection />
      </main>

      {/* SEÇÃO 10 — CTA FINAL & RODAPÉ */}
      <FinalCtaSection 
        onCtaClick={handleUniversalCta} 
        promoPrice={config.promoPrice} 
      />

      {/* Floating Creator Config Trigger */}
      <div className="fixed bottom-4 right-4 z-40">
        <button
          onClick={() => setIsConfigOpen(true)}
          className="flex items-center gap-2 bg-[#07152B] hover:bg-[#1769D2] text-white text-xs font-bold px-3.5 py-2.5 rounded-full shadow-2xl border border-slate-700 hover:scale-105 transition-all duration-200 cursor-pointer group"
          title="Configurar preços, link de checkout e textos da oferta"
        >
          <Sliders className="w-3.5 h-3.5 text-[#FF9500] group-hover:rotate-45 transition-transform" />
          <span className="hidden sm:inline">Configurar Oferta & Checkout</span>
          <span className="sm:hidden">Configurar</span>
        </button>
      </div>

      {/* Modals & Drawers */}
      <ConfigDrawer
        isOpen={isConfigOpen}
        onClose={() => setIsConfigOpen(false)}
        config={config}
        onSave={handleSaveConfig}
      />

      <CheckoutModal
        isOpen={isCheckoutModalOpen}
        onClose={() => setIsCheckoutModalOpen(false)}
        config={config}
        onUpdateCheckoutUrl={handleUpdateCheckoutUrl}
        onOpenConfig={() => setIsConfigOpen(true)}
      />

      <ImageModal
        isOpen={lightboxData.isOpen}
        imageSrc={lightboxData.src}
        title={lightboxData.title}
        onClose={handleCloseImage}
      />
    </div>
  );
}
