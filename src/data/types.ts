export type ClubType = 'real' | 'brand';

export interface Challenge {
  id: string;
  title: string;
  description: string;
  category: 'my-clubs' | 'seasonal' | 'online' | 'phygital';
  xp: number;
  lootbox?: 'standard' | 'rare' | 'legendary';
  clubId?: string;
  type: 'solo' | 'squad';
  streakBonus?: number;
  progress?: {
    current: number;
    total: number;
  };
  expiresIn?: string;
  tags?: string[];
}

export interface ClubReward {
  id: string;
  title: string;
  type: 'lootbox' | 'coupon' | 'merch' | 'ticket';
  rarity: 'standard' | 'rare' | 'epic' | 'legendary';
  description: string;
  requirement: string;
}

export interface ClubNewsItem {
  id: string;
  title: string;
  body: string;
  timestamp: string;
}

export interface Club {
  id: string;
  name: string;
  type: ClubType;
  location?: string;
  tagline: string;
  rating: number;
  members: number;
  emblem: string;
  description: string;
  favorite?: boolean;
  rewards: ClubReward[];
  news: ClubNewsItem[];
  activeChallenges: string[];
}

export interface Gift {
  id: string;
  title: string;
  description: string;
  status: 'active' | 'redeemed' | 'expired';
  expiresOn: string;
  qrCode: string;
}

export interface LootboxDrop {
  id: string;
  name: string;
  rarity: 'standard' | 'rare' | 'legendary';
  unlockedOn: string;
  rewards: string[];
}

export interface PlayerProfile {
  nickname: string;
  avatar: string;
  xp: number;
  level: number;
  nextLevelXp: number;
  rank: 'Bronze' | 'Silver' | 'Gold' | 'Diamond';
  streakDays: number;
  completedChallenges: number;
  totalCheckIns: number;
  badges: string[];
  favoriteClubIds: string[];
  gifts: Gift[];
  lootboxHistory: LootboxDrop[];
}

export interface LeaderboardEntry {
  id: string;
  nickname: string;
  rank: number;
  xp: number;
  clubId?: string;
}

export interface SeasonMeta {
  id: string;
  name: string;
  theme: string;
  timeRemaining: string;
  description: string;
  featuredChallenges: string[];
}
