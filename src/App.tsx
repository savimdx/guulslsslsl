/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
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
        // Ensure new subtitle and title are adopted if user had an older version stored
        if (
          !parsed.heroSubtitle ||
          (parsed.heroSubtitle.includes('em um só lugar!') &&
            !parsed.heroSubtitle.includes('Concursos Públicos'))
        ) {
          parsed.heroSubtitle = DEFAULT_CONFIG.heroSubtitle;
        }
        if (
          !parsed.productTitle ||
          !parsed.productTitle.includes('para Ensino Médio e Concursos Públicos') ||
          !parsed.productTitle.includes('+700')
        ) {
          parsed.productTitle = DEFAULT_CONFIG.productTitle;
        }
        if (
          !parsed.topBannerText ||
          parsed.topBannerText.includes('⚡') ||
          parsed.topBannerText.includes('OFERTA ESPECIAL')
        ) {
          parsed.topBannerText = DEFAULT_CONFIG.topBannerText;
        }
        if (!parsed.promoPrice || parsed.promoPrice === '19,90') {
          parsed.promoPrice = DEFAULT_CONFIG.promoPrice;
          parsed.savingsText = DEFAULT_CONFIG.savingsText;
        }
        if (
          !Array.isArray(parsed.bonuses) ||
          parsed.bonuses.some((b: { title?: string }) =>
            b.title?.includes('Guia de Macetes do ENEM & Vestibulares')
          )
        ) {
          parsed.bonuses = DEFAULT_CONFIG.bonuses;
        }
        if (!parsed.checkoutUrl || !parsed.checkoutUrl.trim()) {
          parsed.checkoutUrl = DEFAULT_CONFIG.checkoutUrl;
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

  useEffect(() => {
    document.title = '+700 Mapas Mentais de Fórmulas de Matemática para Ensino Médio e Concursos Públicos';
  }, []);

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
      window.location.assign(config.checkoutUrl.trim());
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
        checkoutUrl={config.checkoutUrl}
      />

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
