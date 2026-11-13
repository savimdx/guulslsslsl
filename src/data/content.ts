import { OfferConfig, MindMapSlide, TestimonialItem, FaqItem } from '../types';

export const DEFAULT_CONFIG: OfferConfig = {
  checkoutUrl: '', // Editable by user; defaults to modal preview
  originalPrice: 'R$ 97,00',
  promoPrice: '10,00',
  installments: 'ou 2x de R$ 5,20 no cartão',
  savingsText: 'Você economiza R$ 87,00 hoje',
  guaranteeDays: 7,
  productTitle: '+180 Mapas Mentais de Fórmulas de Matemática para Ensino Médio e Concursos Públicos',
  heroHeadlineHighlight: '+180 Mapas Mentais',
  heroHeadlineSuffix: 'de Fórmulas de Matemática para Ensino Médio e Concursos Públicos',
  heroSubtitle:
    'Aprenda, revise e memorize as principais fórmulas de Matemática de maneira visual, simples e organizada. Tenha tudo o que precisa para estudar em um só lugar, serve para o Ensino Médio e para Concursos Públicos!',
  topBannerText: 'OFERTA DISPONÍVEL POR TEMPO LIMITADO',
  bonuses: [
    {
      id: 'b1',
      title: 'Bônus #1 — Guia de Macetes do ENEM & Vestibulares',
      description: 'As 40 pegadinhas clássicas de matemática resolvidas em 1 página.',
      value: 'R$ 37,00',
    },
    {
      id: 'b2',
      title: 'Bônus #2 — Caderno de 100 Questões Resolvidas Passo a Passo',
      description: 'Exercícios práticos com aplicação direta das fórmulas de cada mapa.',
      value: 'R$ 47,00',
    },
    {
      id: 'b3',
      title: 'Bônus #3 — Cronograma Tático de Revisão (30 Dias)',
      description: 'Planejamento diário para cobrir todo o conteúdo sem sobrecarga.',
      value: 'R$ 29,00',
    },
    {
      id: 'b4',
      title: 'Bônus #4 — Tabela Resumo em Alta Resolução para Impressão',
      description: 'Folha A4 laminável para fixar na parede do seu quarto ou caderno.',
      value: 'R$ 19,00',
    },
  ],
};

export const PRODUCT_BUNDLE_IMAGE = 'https://i.ibb.co/h1ckyhLx/180-Mapas-Mentais-de-Matem-tica-1.png';

export const MATH_TOPICS_TAGS = [
  'Produtos notáveis',
  'Equações de 2º grau',
  'Teorema de Pitágoras',
  'Circunferência e círculo',
  'Seno, cosseno e tangente',
  'Relações trigonométricas',
  'Função afim',
  'Função exponencial',
  'Progressão aritmética (PA)',
  'Progressão geométrica (PG)',
  'Porcentagem',
  'Regra de três composta',
  'Determinantes',
  'Sistemas lineares',
  'E muito mais...',
];

export const MINDMAP_SLIDES: MindMapSlide[] = [
  {
    id: 'areas-figuras-planas',
    title: 'Áreas das Figuras Planas',
    category: 'Geometria Plana',
    image: 'https://i.ibb.co/ynY58f5Q/reas-das-Figuras-Planas.png',
    description: 'Fórmulas visuais de áreas das figuras planas.',
    formulas: [],
    keyTopics: [],
  },
  {
    id: 'funcao-exponencial',
    title: 'Função Exponencial — Guia Visual Completo',
    category: 'Funções',
    image: 'https://i.ibb.co/vCSBp6DH/Fun-o-Exponencial-Guia-Visual-Completo.png',
    description: 'Guia visual completo de função exponencial.',
    formulas: [],
    keyTopics: [],
  },
  {
    id: 'semelhanca-triangulos',
    title: 'Guia Colorido da Semelhança de Triângulos',
    category: 'Geometria',
    image: 'https://i.ibb.co/mV1kvRdC/Guia-Colorido-da-Semelhan-a-de-Tri-ngulos.png',
    description: 'Semelhança de triângulos em formato visual.',
    formulas: [],
    keyTopics: [],
  },
  {
    id: 'combinatoria-matematica',
    title: 'Guia Visual de Combinatória Matemática',
    category: 'Combinatória',
    image: 'https://i.ibb.co/dH8jybv/Guia-Visual-de-Combinat-ria-Matem-tica.png',
    description: 'Guia visual de análise combinatória.',
    formulas: [],
    keyTopics: [],
  },
  {
    id: 'geometria-analitica',
    title: 'Guia Visual de Geometria Analítica',
    category: 'Geometria Analítica',
    image: 'https://i.ibb.co/Jw0LZCyd/Guia-Visual-de-Geometria-Anal-tica.png',
    description: 'Guia visual de geometria analítica.',
    formulas: [],
    keyTopics: [],
  },
  {
    id: 'relacoes-trigonometricas',
    title: 'Guia Visual de Relações Trigonométricas',
    category: 'Trigonometria',
    image: 'https://i.ibb.co/k2gwnSbh/Guia-Visual-de-Rela-es-Trigonom-tricas.png',
    description: 'Guia visual de relações trigonométricas.',
    formulas: [],
    keyTopics: [],
  },
  {
    id: 'lei-dos-cossenos',
    title: 'Infográfico Colorido da Lei dos Cossenos',
    category: 'Trigonometria',
    image: 'https://i.ibb.co/7xvrQ8Qq/Infogr-fico-Colorido-da-Lei-dos-Cossenos.png',
    description: 'Infográfico colorido da Lei dos Cossenos.',
    formulas: [],
    keyTopics: [],
  },
  {
    id: 'lei-dos-senos',
    title: 'Infográfico Colorido da Lei dos Senos',
    category: 'Trigonometria',
    image: 'https://i.ibb.co/4Rt17bHM/Infogr-fico-colorido-da-Lei-dos-Senos.png',
    description: 'Infográfico colorido da Lei dos Senos.',
    formulas: [],
    keyTopics: [],
  },
  {
    id: 'analise-combinatoria',
    title: 'Infográfico Colorido de Análise Combinatória',
    category: 'Combinatória',
    image: 'https://i.ibb.co/ccrsxMP5/Infogr-fico-Colorido-de-An-lise-Combinat-ria.png',
    description: 'Infográfico colorido de análise combinatória.',
    formulas: [],
    keyTopics: [],
  },
  {
    id: 'areas-e-volumes',
    title: 'Infográfico Colorido de Áreas e Volumes',
    category: 'Geometria Espacial',
    image: 'https://i.ibb.co/NdghK3d4/Infogr-fico-Colorido-de-reas-e-Volumes.png',
    description: 'Infográfico colorido de áreas e volumes.',
    formulas: [],
    keyTopics: [],
  },
];

export const WHAT_YOU_RECEIVE_ITEMS = [
  { text: 'Mais de 180 Mapas Mentais de Fórmulas de Matemática', detail: 'Cobre todo o conteúdo do Ensino Médio e Concursos Públicos' },
  { text: 'Fórmulas organizadas por assunto', detail: 'Fácil localização em segundos sem perder tempo' },
  { text: 'Conteúdo do Ensino Médio e Concursos Públicos', detail: 'Foco total em provas, vestibulares (ENEM) e concursos públicos' },
  { text: 'Material de fácil consulta', detail: 'Diagramação limpa em alta definição para celular e PC' },
  { text: 'Ideal para revisão e estudos', detail: 'Acelera a fixação antes de provas e simulados' },
];

export const TRUST_FEATURES = [
  {
    title: 'Acesso Digital',
    desc: 'Receba imediatamente no seu e-mail e estude no celular, tablet ou computador.',
    icon: 'Smartphone',
  },
  {
    title: 'Material Organizado',
    desc: 'Fórmulas categorizadas por temas para encontrar o que precisa em poucos cliques.',
    icon: 'FolderTree',
  },
  {
    title: 'Fácil Consulta',
    desc: 'Linguagem visual intuitiva que facilita a memorização das equações difíceis.',
    icon: 'Eye',
  },
  {
    title: 'Estude no seu Ritmo',
    desc: 'Sem prazos ou mensalidades: o material é seu para revisar quando quiser.',
    icon: 'Clock',
  },
];

export const TESTIMONIAL_IMAGES = [
  {
    id: 'dep-1',
    alt: 'Conversa de WhatsApp com Juliana Martins',
    image: 'https://i.ibb.co/Q3Mt59p6/Conversa-de-Whats-App-com-Juliana-Martins.png',
  },
  {
    id: 'dep-2',
    alt: 'Conversa no WhatsApp com Juliana',
    image: 'https://i.ibb.co/XfN2p8Zd/Conversa-no-Whats-App-com-Juliana.png',
  },
  {
    id: 'dep-3',
    alt: 'Depoimento no WhatsApp em português',
    image: 'https://i.ibb.co/3y5g5cNZ/Depoimento-no-Whats-App-em-portugu-s.png',
  },
  {
    id: 'dep-4',
    alt: 'Depoimento positivo no WhatsApp',
    image: 'https://i.ibb.co/ymGsqd39/Depoimento-positivo-no-Whats-App.png',
  },
  {
    id: 'dep-5',
    alt: 'Depoimento sobre mapas mentais no WhatsApp',
    image: 'https://i.ibb.co/B5FRYq0Y/Depoimento-sobre-mapas-mentais-no-Whats-App.png',
  },
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 't1',
    name: 'Amanda Oliveira',
    role: 'Aluna do 3º Ano · Foco no ENEM',
    time: '14:25',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    chatMessages: [
      { sender: 'support', text: 'Oi Amanda! Como está sendo usar os mapas mentais de matemática?', time: '14:21' },
      { sender: 'student', text: 'Oii! Nossa, usei hoje para revisar funções e trigonometria, já gostei muito!', time: '14:23' },
      { sender: 'student', text: 'Imprimi e ficou muito nítido. Eu travava muito na hora de lembrar as fórmulas de geometria espacial, agora bato o olho e já sei qual usar!', time: '14:24' },
      { sender: 'student', text: 'Ajuda muito porque já vem tudo organizado e esquematizado. Salvou minha revisão pro simulado! 🙏❤️', time: '14:25' },
    ],
    audioNote: {
      duration: '0:18',
      time: '14:26',
    },
  },
  {
    id: 't2',
    name: 'Lucas Ferreira',
    role: 'Vestibulando de Engenharia',
    time: '18:42',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&auto=format&fit=crop&q=80',
    chatMessages: [
      { sender: 'support', text: 'Fala Lucas! O material atendeu o que você precisava para as exatas?', time: '18:38' },
      { sender: 'student', text: 'Cara, muito acima do que eu esperava. A parte de PA, PG e análise combinatória é surreal de clara.', time: '18:40' },
      { sender: 'student', text: 'Eu perdia um tempão procurando fórmula em caderno velho e apostila gigante. Com o material no tablet vou direto no ponto.', time: '18:41' },
      { sender: 'student', text: 'Valeu cada centavo, super recomendo pra quem tá focado em passar!', time: '18:42' },
    ],
  },
  {
    id: 't3',
    name: 'Beatriz Santos',
    role: 'Estudante do 2º Ano do E.M.',
    time: '10:15',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80',
    chatMessages: [
      { sender: 'support', text: 'Olá Beatriz! Conseguiu baixar o material certinho?', time: '10:11' },
      { sender: 'student', text: 'Chegou no mesmo segundo no meu e-mail! Já coloquei no Google Drive e no meu celular.', time: '10:13' },
      { sender: 'student', text: 'As cores e os desenhos facilitam demais pra quem tem memória visual como eu. Tirou todo o medo que eu tinha de matemática!', time: '10:15' },
    ],
  },
];

export const FAQ_DATA: FaqItem[] = [
  {
    question: 'Como vou receber o material?',
    answer:
      'O acesso será disponibilizado digitalmente após a confirmação do pagamento. Você receberá um e-mail com os links de acesso imediato ao material digital de alta qualidade.',
  },
  {
    question: 'O material é digital?',
    answer:
      'Sim! Você terá acesso ao material completo em formato digital. Você pode visualizar diretamente no celular, tablet, computador ou, se preferir, imprimir em alta resolução para encadernar.',
  },
  {
    question: 'Para qual nível de ensino é indicado?',
    answer:
      'O conteúdo é direcionado aos estudantes do Ensino Médio (1º, 2º e 3º ano), vestibulandos (ENEM, Fuvest, Unicamp e vestibulares regionais), concurseiros e qualquer pessoa que precise revisar as fórmulas fundamentais de matemática.',
  },
  {
    question: 'Posso acessar pelo celular?',
    answer:
      'Sim! O material está em formato digital padrão universal, compatível com qualquer celular (Android ou iPhone), tablet, iPad, notebook ou computador de mesa.',
  },
  {
    question: 'Tem garantia?',
    answer:
      'Sim! Você conta com 7 dias de garantia incondicional. Se por qualquer motivo achar que o material não é para você, basta solicitar o reembolso que devolveremos 100% do seu dinheiro.',
  },
  {
    question: 'O acesso é vitalício?',
    answer:
      'Sim! O acesso e o download do material são vitalícios. Uma vez baixado para o seu dispositivo, os mapas mentais são seus para sempre, sem cobranças adicionais nem mensalidades.',
  },
];
