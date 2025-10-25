import type {
  Challenge,
  Club,
  LeaderboardEntry,
  PlayerProfile,
  SeasonMeta
} from './types';

export const clubs: Club[] = [
  {
    id: 'arena-x',
    name: 'Arena X',
    type: 'real',
    location: 'Москва · МФК «Арена Парк»',
    tagline: 'Киберспорт и VR-сражения 24/7',
    rating: 4.9,
    members: 1840,
    emblem:
      'https://images.unsplash.com/photo-1525182008055-f88b95ff7980?auto=format&fit=crop&w=120&q=80',
    description:
      'Флагманская фиджитал-арена с лазертагом, VR и еженедельными турнирами. Чекинись у неоновой стойки и лови буст XP.',
    favorite: true,
    rewards: [
      {
        id: 'arena-pass',
        title: 'Arena Pass',
        type: 'ticket',
        rarity: 'epic',
        description: 'Проход на ночной кибербатл + напиток.',
        requirement: 'Сделай 5 чек-инов за месяц.'
      },
      {
        id: 'vr-drop',
        title: 'VR Drop',
        type: 'lootbox',
        rarity: 'rare',
        description: 'Лутбокс с эксклюзивной эмблемой и скидкой 30% на VR.',
        requirement: 'Закрой 3 челленджа клуба.'
      }
    ],
    news: [
      {
        id: 'n1',
        title: 'Субботний турнир по Valorant',
        body: 'Регистрация открыта, победители заберут редкий лутбокс «Cyber Pulse».',
        timestamp: '2 часа назад'
      },
      {
        id: 'n2',
        title: 'Новая зона для стримов',
        body: 'Открой новый медиахаб и получи +150 XP за первый чек-ин.',
        timestamp: 'Вчера'
      }
    ],
    activeChallenges: ['ch-arena-1', 'ch-arena-2', 'ch-invite']
  },
  {
    id: 'cyberbrew',
    name: 'Cyber Brew Lab',
    type: 'real',
    location: 'Санкт-Петербург · Невский 56',
    tagline: 'Фиджитал-бар с арт-ивентами и консолями.',
    rating: 4.7,
    members: 960,
    emblem:
      'https://images.unsplash.com/photo-1553615738-d8b9e0f9f3bb?auto=format&fit=crop&w=120&q=80',
    description:
      'Закажи неоновый коктейль, сразись в ретро-игре и получи шанс на мерч «Glow Edition».',
    rewards: [
      {
        id: 'brew-merch',
        title: 'Футболка Glow Edition',
        type: 'merch',
        rarity: 'rare',
        description: 'Лимитированный дроп с неоновым градиентом.',
        requirement: 'Набери 800 XP активности в клубе.'
      }
    ],
    news: [
      {
        id: 'n3',
        title: 'DJ-сет от N4XUS',
        body: 'Чек-ин 22 сентября — мгновенный лутбокс «Bass».',
        timestamp: '4 часа назад'
      }
    ],
    activeChallenges: ['ch-brew-1', 'ch-brew-2']
  },
  {
    id: 'phantom-brand',
    name: 'Phantom Gear',
    type: 'brand',
    tagline: 'Хайтек-экипировка для будущих чемпионов.',
    rating: 4.8,
    members: 12500,
    emblem:
      'https://images.unsplash.com/photo-1549921296-3c5aa1e1cc5b?auto=format&fit=crop&w=120&q=80',
    description:
      'Участвуй в цифровых миссиях и раскрывай секретные скины Phantom.',
    rewards: [
      {
        id: 'phantom-skin',
        title: 'Скин «Ghost Runner»',
        type: 'lootbox',
        rarity: 'legendary',
        description: 'Легендарный вид для профиля и клубного рейтинга.',
        requirement: 'Заверши сезонные челленджи Phantom Gear.'
      }
    ],
    news: [
      {
        id: 'n4',
        title: 'Новая коллаборация',
        body: 'Совместный дроп с Arena X — успей забрать редкий купон.',
        timestamp: 'Сегодня'
      }
    ],
    activeChallenges: ['ch-brand-1', 'ch-brand-2', 'ch-invite']
  }
];

export const challenges: Challenge[] = [
  {
    id: 'ch-arena-1',
    title: 'Cyber Rush: сыграй 3 матча',
    description: 'Сыграй 3 быстрых матча в зоне шутеров на арене.',
    category: 'my-clubs',
    xp: 180,
    lootbox: 'standard',
    clubId: 'arena-x',
    type: 'solo',
    progress: { current: 1, total: 3 },
    tags: ['Шутеры', 'XP x2 сегодня']
  },
  {
    id: 'ch-arena-2',
    title: 'Чек-ин у голографической стойки',
    description: 'Найди неоновый QR у главного входа и отметься в пределах 100 м.',
    category: 'phygital',
    xp: 120,
    clubId: 'arena-x',
    type: 'solo',
    expiresIn: '6 ч',
    tags: ['Чек-ин']
  },
  {
    id: 'ch-brew-1',
    title: 'Комбо «Ночной режим»',
    description: 'Собери команду из 3 друзей и выиграйте ретро-турнир.',
    category: 'my-clubs',
    xp: 260,
    lootbox: 'rare',
    clubId: 'cyberbrew',
    type: 'squad',
    tags: ['Командный']
  },
  {
    id: 'ch-brew-2',
    title: 'Чек-ин и фото в AR-фильтре',
    description: 'Отметься в баре и поделись AR-снимком в чате клуба.',
    category: 'phygital',
    xp: 140,
    clubId: 'cyberbrew',
    type: 'solo',
    streakBonus: 20,
    tags: ['AR', 'Social']
  },
  {
    id: 'ch-brand-1',
    title: 'Сканируй капсулу Phantom',
    description: 'Отсканируй QR с мерча Phantom Gear и получи XP + шанс на лутбокс.',
    category: 'online',
    xp: 90,
    lootbox: 'standard',
    clubId: 'phantom-brand',
    type: 'solo',
    tags: ['Бренд-челлендж']
  },
  {
    id: 'ch-brand-2',
    title: 'Сборка идеального сетапа',
    description: 'Собери сетап мечты в конфигураторе Phantom и поделись в соцсетях.',
    category: 'seasonal',
    xp: 220,
    lootbox: 'legendary',
    clubId: 'phantom-brand',
    type: 'solo',
    expiresIn: '3 д'
  },
  {
    id: 'ch-invite',
    title: 'Пригласи друга',
    description: 'Отправь реферальную ссылку и получи редкий лутбокс при первой активности друга.',
    category: 'online',
    xp: 150,
    lootbox: 'rare',
    type: 'solo',
    tags: ['Social']
  }
];

export const season: SeasonMeta = {
  id: 'cyber-season',
  name: 'Cyber Season',
  theme: 'Неоновый рейв и цифровые двойники',
  timeRemaining: '23 дня',
  description: 'Зарабатывай XP в любимых клубах, копи фиолетовую энергию и поднимайся в сезонном рейтинге.',
  featuredChallenges: ['ch-brand-2', 'ch-brew-2']
};

export const leaderboardPlayers: LeaderboardEntry[] = [
  { id: 'p1', nickname: 'NeonFox', rank: 1, xp: 8420 },
  { id: 'p2', nickname: 'GlitchWave', rank: 2, xp: 7990 },
  { id: 'p3', nickname: 'AstraNova', rank: 3, xp: 7640 },
  { id: 'p4', nickname: 'Lumenix', rank: 4, xp: 7280 },
  { id: 'p5', nickname: 'EchoPulse', rank: 5, xp: 7010 }
];

export const leaderboardClubs: LeaderboardEntry[] = [
  { id: 'arena-x', nickname: 'Arena X', rank: 1, xp: 22840 },
  { id: 'phantom-brand', nickname: 'Phantom Gear', rank: 2, xp: 21460 },
  { id: 'cyberbrew', nickname: 'Cyber Brew Lab', rank: 3, xp: 17620 }
];

export const profile: PlayerProfile = {
  nickname: 'VortexNova',
  avatar: 'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?auto=format&fit=crop&w=120&q=80',
  xp: 4860,
  level: 12,
  nextLevelXp: 5200,
  rank: 'Gold',
  streakDays: 9,
  completedChallenges: 74,
  totalCheckIns: 58,
  badges: ['Фиолетовый след', 'Сезон Cyber', 'Phantom Insider'],
  favoriteClubIds: ['arena-x', 'phantom-brand'],
  gifts: [
    {
      id: 'gift-1',
      title: 'Phantom Gear — купон -40%',
      description: 'Скидка на линейку Ghost Runner. Покажи QR на кассе до 30 сентября.',
      status: 'active',
      expiresOn: '30.09',
      qrCode: 'QR-40-9931'
    },
    {
      id: 'gift-2',
      title: 'Arena X — ночной пропуск',
      description: 'Открыт после челленджа «Cyber Rush».',
      status: 'redeemed',
      expiresOn: '15.08',
      qrCode: 'QR-ARX-5521'
    },
    {
      id: 'gift-3',
      title: 'Cyber Brew — коктейль Glow',
      description: 'Приз за streak 7 дней.',
      status: 'expired',
      expiresOn: '01.08',
      qrCode: 'QR-CB-2108'
    }
  ],
  lootboxHistory: [
    {
      id: 'lb-1',
      name: 'Cyber Pulse',
      rarity: 'legendary',
      unlockedOn: '12.08',
      rewards: ['Скин «Pulse Rider»', '+400 XP']
    },
    {
      id: 'lb-2',
      name: 'Glow Pack',
      rarity: 'rare',
      unlockedOn: '09.08',
      rewards: ['Бейдж «Glow»', '+120 XP']
    }
  ]
};
