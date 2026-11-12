export interface OfferConfig {
  checkoutUrl: string;
  originalPrice: string;
  promoPrice: string;
  installments: string;
  savingsText: string;
  guaranteeDays: number;
  productTitle: string;
  heroHeadlineHighlight: string;
  heroHeadlineSuffix: string;
  heroSubtitle: string;
  topBannerText: string;
  bonuses: Array<{
    id: string;
    title: string;
    description: string;
    value: string;
  }>;
}

export interface MindMapSlide {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  formulas: string[];
  keyTopics: string[];
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  time: string;
  avatar: string;
  chatMessages: Array<{
    sender: 'student' | 'support';
    text: string;
    time: string;
  }>;
  audioNote?: {
    duration: string;
    time: string;
  };
}

export interface FaqItem {
  question: string;
  answer: string;
}
