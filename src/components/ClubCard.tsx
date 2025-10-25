import { Link } from 'react-router-dom';
import type { Club } from '../data/types';
import './ClubCard.css';

type Props = {
  club: Club;
};

export function ClubCard({ club }: Props) {
  return (
    <Link to={`/clubs/${club.id}`} className="club-card">
      <div className="club-card__media">
        <img src={club.emblem} alt="" loading="lazy" />
        <span className={`club-card__badge club-card__badge--${club.type}`}>
          {club.type === 'real' ? 'Реальный клуб' : 'Бренд'}
        </span>
      </div>
      <div className="club-card__body">
        <header>
          <h3>{club.name}</h3>
          <p>{club.tagline}</p>
        </header>
        <footer>
          <span>★ {club.rating.toFixed(1)}</span>
          <span>{club.members.toLocaleString('ru-RU')} участников</span>
        </footer>
      </div>
    </Link>
  );
}
