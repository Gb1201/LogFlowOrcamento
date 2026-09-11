// Dados centrais do site. Edite aqui para atualizar textos sem mexer nos componentes.

export const CONTACT = {
  whatsappDisplay: '(22) 99738-4221',
  whatsappNumber: '5522997384221', // formato internacional, sem símbolos, com DDI 55
  email: 'gabrielsscoelho2004@gmail.com',
}

export const SERVICES = [
  {
    id: 'institucional',
    title: 'Site institucional',
    audience: 'Para empresas e profissionais que precisam de uma presença oficial e profissional na internet.',
    goal: 'Apresentar sua empresa, serviços, diferenciais e formas de contato com uma estrutura clara, profissional e alinhada à identidade da marca.',
    includes: [
      'Páginas de apresentação, serviços e contato',
      'Estrutura pensada para SEO local',
      'Formulário ou canal direto de contato',
    ],
  },

  {
    id: 'landing-page',
    title: 'Landing page',
    audience: 'Para campanhas, lançamentos, divulgação de produtos, serviços ou captação de clientes.',
    goal: 'Criar uma página objetiva e estratégica, desenvolvida para apresentar uma oferta e conduzir o visitante a uma ação específica, como entrar em contato, solicitar um orçamento ou acessar um canal de atendimento.',
    includes: [
      'Página única com foco em uma oferta ou objetivo específico',
      'Copy e hierarquia visual orientadas à conversão',
      'Botões e chamadas para ação, como WhatsApp e formulário de contato',
      'Estrutura otimizada para campanhas, tráfego pago e redes sociais',
      'Desenvolvimento exclusivamente Front-end, sem sistema de negócio próprio, painel administrativo ou banco de dados',
    ],
  },

  {
    id: 'portfolio',
    title: 'Portfólio profissional',
    audience: 'Para criativos, freelancers e profissionais liberais que querem apresentar seus trabalhos de forma profissional.',
    goal: 'Mostrar trabalhos e projetos com contexto, organização e identidade visual — transformando seu portfólio em uma vitrine profissional para conquistar novas oportunidades.',
    includes: [
      'Organização por projeto ou categoria',
      'Espaço para processo, contexto e resultados',
      'Apresentação profissional dos trabalhos',
      'Chamada direta para contato com clientes em potencial',
    ],
  },
]


export const DIFFERENTIALS = [
  {
    title: 'Projeto sob medida',
    description: 'Cada site é desenhado do zero para o seu contexto — sem templates reaproveitados.',
  },
  {
    title: 'Design com identidade',
    description: 'Paleta, tipografia e composição pensadas para o seu público, não para preencher espaço.',
  },
  {
    title: 'Responsividade real',
    description: 'Desktop, tablet e celular são projetados como experiências próprias, não versões reduzidas.',
  },
  {
    title: 'Performance',
    description: 'Carregamento rápido e código enxuto, sem bibliotecas ou scripts desnecessários.',
  },
  {
    title: 'Estrutura profissional',
    description: 'Organização de código clara, fácil de manter e de evoluir com o tempo.',
  },
  {
    title: 'Atendimento direto',
    description: 'Conversa direta comigo do início ao fim, sem intermediários ou filas de suporte.',
  },
]

export const PROCESS_STEPS = [
  {
    title: 'Solicitação',
    description: 'Você envia o orçamento com os detalhes do seu projeto pelo formulário, WhatsApp ou e-mail.',
  },
  {
    title: 'Entendimento',
    description: 'Analiso o objetivo, o público e as referências para entender o que o projeto realmente precisa.',
  },
  {
    title: 'Escopo e proposta',
    description: 'Defino estrutura, prazo e investimento, e envio uma proposta clara para aprovação.',
  },
  {
    title: 'Desenvolvimento',
    description: 'Construo o site com atualizações periódicas, para você acompanhar cada etapa.',
  },
  {
    title: 'Entrega',
    description: 'Ajustes finais, testes em diferentes dispositivos e entrega do projeto no ar.',
  },
]

// Projetos conceituais — placeholders claramente identificados, sem clientes reais.
export const PORTFOLIO_PLACEHOLDERS = [
  {
    type: 'Site institucional',
    label: 'Estudo de caso conceitual',
    description: 'Exemplo de estrutura para um site institucional de serviços profissionais.',
  },
  {
    type: 'Landing page',
    label: 'Estudo de caso conceitual',
    description: 'Exemplo de landing page voltada para lançamento de produto único.',
  },
  {
    type: 'Portfólio',
    label: 'Estudo de caso conceitual',
    description: 'Exemplo de portfólio para um profissional criativo autônomo.',
  },
]

export const PROJECT_TYPES = ['Institucional', 'Landing page', 'Portfólio', 'Outro']

export const BUDGET_RANGES = [
  'Prefiro conversar sobre valores',
  'Até R$ 1.500',
  'R$ 1.500 – R$ 3.000',
  'R$ 3.000 – R$ 6.000',
  'Acima de R$ 6.000',
]

export const TIMELINE_OPTIONS = [
  'Sem urgência',
  'Até 2 semanas',
  '2 a 4 semanas',
  'Mais de 1 mês',
]