import { useMemo, useState } from 'react';
import { ChallengeCard } from '../components/ChallengeCard';
import { Section } from '../components/Section';
import { challenges, profile } from '../data/sampleData';
import type { Challenge } from '../data/types';
import './ChallengesPage.css';

type Category = 'my-clubs' | 'seasonal' | 'online' | 'phygital';

const categoryLabels: Record<Category, string> = {
  'my-clubs': 'Мои клубы',
  seasonal: 'Сезонные',
  online: 'Онлайн',
  phygital: 'Фиджитал'
};

export default function ChallengesPage() {
  const [category, setCategory] = useState<Category>('my-clubs');

  const items = useMemo(() => getChallenges(category), [category]);

  return (
    <div className="challenges">
      <div className="challenges__tabs">
        {(Object.keys(categoryLabels) as Category[]).map((key) => (
          <button
            key={key}
            type="button"
            className={key === category ? 'challenges__tab challenges__tab--active' : 'challenges__tab'}
            onClick={() => setCategory(key)}
          >
            {categoryLabels[key]}
          </button>
        ))}
      </div>

      <Section
        title={categoryLabels[category]}
        subtitle={getSubtitle(category)}
        action={category === 'phygital' ? <span>Георадиус ≤ 100 м</span> : undefined}
      >
        <div className="challenges__list">
          {items.map((challenge) => (
            <ChallengeCard key={challenge.id} challenge={challenge} />
          ))}
        </div>
      </Section>
    </div>
  );
}

function getChallenges(category: Category): Challenge[] {
  switch (category) {
    case 'my-clubs':
      return challenges.filter(
        (challenge) => challenge.clubId && profile.favoriteClubIds.includes(challenge.clubId)
      );
    case 'seasonal':
      return challenges.filter((challenge) => challenge.category === 'seasonal');
    case 'online':
      return challenges.filter((challenge) => challenge.category === 'online');
    case 'phygital':
      return challenges.filter((challenge) => challenge.category === 'phygital');
    default:
      return challenges;
  }
}

function getSubtitle(category: Category): string {
  switch (category) {
    case 'my-clubs':
      return 'Прогресс любимых клубов и быстрые бусты';
    case 'seasonal':
      return 'Задания текущего сезона и эксклюзивные награды';
    case 'online':
      return 'Онлайн-активности и брендовые миссии';
    case 'phygital':
      return 'Чекины, QR и геолокация — фиджитал-опыт';
    default:
      return '';
  }
}
