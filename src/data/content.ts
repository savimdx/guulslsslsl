import { OfferConfig, MindMapSlide, TestimonialItem, FaqItem } from '../types';

export const DEFAULT_CONFIG: OfferConfig = {
  checkoutUrl: '', // Editable by user; defaults to modal preview
  originalPrice: 'R$ 97,00',
  promoPrice: '19,90',
  installments: 'ou 2x de R$ 10,40 no cartão',
  savingsText: 'Você economiza R$ 77,10 hoje',
  guaranteeDays: 7,
  productTitle: 'Mapas Mentais de Fórmulas de Matemática',
  heroHeadlineHighlight: '+180 Mapas Mentais',
  heroHeadlineSuffix: 'de Fórmulas de Matemática do Ensino Médio',
  heroSubtitle:
    'Aprenda, revise e memorize as principais fórmulas de Matemática de maneira visual, simples e organizada. Tenha tudo o que precisa para estudar em um só lugar!',
  topBannerText: '⚡ OFERTA ESPECIAL DISPONÍVEL POR TEMPO LIMITADO!',
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

export const PRODUCT_BUNDLE_IMAGE = '/src/assets/images/math_bundle_mockup_1794489447248.jpg';

export const MATH_TOPICS_TAGS = [
  'Álgebra',
  'Geometria Plana',
  'Geometria Espacial',
  'Trigonometria',
  'Ciclo Trigonométrico',
  'Funções do 1º e 2º Grau',
  'Função Exponencial & Logaritmos',
  'Progressão Aritmética (PA)',
  'Progressão Geométrica (PG)',
  'Estatística & Médias',
  'Probabilidade',
  'Porcentagem & Matemática Financeira',
  'Análise Combinatória',
  'Matrizes & Determinantes',
];

export const MINDMAP_SLIDES: MindMapSlide[] = [
  {
    id: 'geo',
    title: 'Geometria Plana e Espacial',
    category: 'Geometria',
    image: '/src/assets/images/mindmap_geometria_espacial_1794489446735.jpg',
    description:
      'Fórmulas essenciais de áreas (triângulos, círculos, trapézios) e volumes dos principais sólidos (prismas, cilindros, pirâmides, cones e esferas).',
    formulas: [
      'Teorema de Pitágoras: a² + b² = c²',
      'Área do Círculo: A = π · r²',
      'Volume do Cilindro: V = π · r² · h',
      'Volume da Esfera: V = 4/3 · π · r³',
    ],
    keyTopics: ['Triângulos', 'Quadriláteros', 'Círculos', 'Prismas', 'Cilindros', 'Cones', 'Esferas'],
  },
  {
    id: 'func',
    title: 'Funções do 1º e 2º Grau & Álgebra',
    category: 'Álgebra e Funções',
    image: '/src/assets/images/mindmap_funcoes_algebra_1794489448790.jpg',
    description:
      'Entenda visualmente gráficos de retas e parábolas, coeficientes angular e linear, raízes reais, fórmula de Bhaskara e coordenadas do vértice.',
    formulas: [
      'Função Afim: f(x) = ax + b',
      'Bhaskara: x = (-b ± √Δ) / 2a',
      'Discriminante: Δ = b² - 4ac',
      'Vértice: Xv = -b/2a  |  Yv = -Δ/4a',
    ],
    keyTopics: ['Coeficiente Angular', 'Interseção no eixo y', 'Concavidade', 'Ponto Máximo/Mínimo'],
  },
  {
    id: 'trig',
    title: 'Trigonometria e Ciclo Trigonométrico',
    category: 'Trigonometria',
    image: '/src/assets/images/mindmap_trigonometria_ciclo_1794489469307.jpg',
    description:
      'O ciclo trigonométrico completo com ângulos notáveis (30°, 45°, 60°), sinais nos quatro quadrantes, relação fundamental, lei dos senos e lei dos cossenos.',
    formulas: [
      'Relação Fundamental: sen²θ + cos²θ = 1',
      'Tangente: tg θ = sen θ / cos θ',
      'Lei dos Senos: a/sen(A) = b/sen(B) = 2R',
      'Lei dos Cossenos: a² = b² + c² - 2bc·cos(A)',
    ],
    keyTopics: ['Eixo Seno e Cosseno', 'Radianos e Graus', 'Ângulos Notáveis', 'Gráficos Senoide'],
  },
];

export const WHAT_YOU_RECEIVE_ITEMS = [
  { text: 'Mais de 180 mapas mentais de Matemática', detail: 'Cobre absolutamente todo o currículo do Ensino Médio' },
  { text: 'Fórmulas organizadas por assunto', detail: 'Fácil localização em segundos sem perder tempo' },
  { text: 'Conteúdo completo do Ensino Médio', detail: '1º, 2º e 3º ano com foco em ENEM e Vestibulares' },
  { text: 'Resumos visuais e objetivos', detail: 'Sem enrolação teórica: direto ao ponto e com esquemas' },
  { text: 'Material de fácil consulta', detail: 'Diagramação limpa em alta definição para celular e PC' },
  { text: 'Ideal para revisão e estudos', detail: 'Acelera a fixação antes de provas e simulados' },
  { text: 'Acesso digital imediato', detail: 'Receba seus links de download no mesmo minuto por e-mail' },
  { text: 'Consulte quando quiser', detail: 'Arquivo PDF perpétuo no seu dispositivo ou impresso' },
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
      { sender: 'student', text: 'Eu perdia um tempão procurando fórmula em caderno velho e apostila gigante. Com o PDF no tablet vou direto no ponto.', time: '18:41' },
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
      'O acesso será disponibilizado digitalmente após a confirmação do pagamento. Você receberá um e-mail com os links de acesso imediato para download dos arquivos em PDF de alta qualidade.',
  },
  {
    question: 'O material é digital?',
    answer:
      'Sim! Você terá acesso ao material completo em formato digital. Você pode visualizar diretamente no celular, tablet, computador ou, se preferir, imprimir em alta resolução para encadernar.',
  },
  {
    question: 'Para qual nível de ensino é indicado?',
    answer:
      'O conteúdo é direcionado aos estudantes do Ensino Médio (1º, 2º e 3º ano), vestibulandos (ENEM, Fuvest, Unicamp e vestibulares regionais) e qualquer pessoa que precise revisar as fórmulas fundamentais de matemática.',
  },
  {
    question: 'Posso acessar pelo celular?',
    answer:
      'Sim! O material está em formato PDF padrão universal, compatível com qualquer celular (Android ou iPhone), tablet, iPad, notebook ou computador de mesa.',
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
