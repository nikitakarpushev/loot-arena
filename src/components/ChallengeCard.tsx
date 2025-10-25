import { Link } from 'react-router-dom';
import type { Challenge } from '../data/types';
import { clubs } from '../data/sampleData';
import './ChallengeCard.css';

type Props = {
  challenge: Challenge;
  showClub?: boolean;
  compact?: boolean;
};

export function ChallengeCard({ challenge, showClub = true, compact = false }: Props) {
  const club = challenge.clubId ? clubs.find((c) => c.id === challenge.clubId) : undefined;
  return (
    <article className={compact ? 'challenge-card challenge-card--compact' : 'challenge-card'}>
      <header className="challenge-card__header">
        <div>
          <h3>{challenge.title}</h3>
          <p>{challenge.description}</p>
        </div>
        {challenge.lootbox && <span className={`challenge-card__rarity rarity-${challenge.lootbox}`}>🎁</span>}
      </header>
      <footer className="challenge-card__footer">
        <div className="challenge-card__meta">
          <span className="chip">+{challenge.xp} XP</span>
          {challenge.streakBonus ? <span className="chip chip--ghost">Streak +{challenge.streakBonus}</span> : null}
          {challenge.expiresIn ? <span className="chip chip--ghost">До {challenge.expiresIn}</span> : null}
          {challenge.progress ? (
            <span className="chip chip--progress">
              {challenge.progress.current}/{challenge.progress.total}
            </span>
          ) : null}
        </div>
        {showClub && club ? (
          <Link className="challenge-card__club" to={`/clubs/${club.id}`}>
            <img src={club.emblem} alt="" />
            <span>{club.name}</span>
          </Link>
        ) : null}
      </footer>
      {challenge.tags && challenge.tags.length > 0 ? (
        <div className="challenge-card__tags">
          {challenge.tags.map((tag) => (
            <span key={tag} className="chip chip--tag">
              {tag}
            </span>
          ))}
        </div>
      ) : null}
    </article>
  );
}
