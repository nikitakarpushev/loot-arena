import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ClubCard } from '../components/ClubCard';
import { Section } from '../components/Section';
import { clubs, profile } from '../data/sampleData';
import type { ClubType } from '../data/types';
import './ClubsPage.css';

const filters: ClubType[] = ['real', 'brand'];

export default function ClubsPage() {
  const [filter, setFilter] = useState<ClubType>('real');
  const [query, setQuery] = useState('');

  const filteredClubs = useMemo(() => {
    return clubs.filter((club) => {
      const matchesType = club.type === filter;
      const matchesQuery = club.name.toLowerCase().includes(query.toLowerCase());
      return matchesType && matchesQuery;
    });
  }, [filter, query]);

  const favorites = useMemo(
    () => clubs.filter((club) => profile.favoriteClubIds.includes(club.id)),
    []
  );

  return (
    <div className="clubs">
      <Section title="Мои клубы" subtitle="Любимые и последние чекины">
        <div className="clubs__favorites">
          {favorites.map((club) => (
            <Link key={club.id} to={`/clubs/${club.id}`} className="clubs__favorite-pill">
              <img src={club.emblem} alt="" />
              <span>{club.name}</span>
            </Link>
          ))}
        </div>
      </Section>

      <Section title="Каталог клубов" subtitle="Выбери место силы или бренд">
        <div className="clubs__filters">
          {filters.map((type) => (
            <button
              key={type}
              type="button"
              className={filter === type ? 'clubs__filter clubs__filter--active' : 'clubs__filter'}
              onClick={() => setFilter(type)}
            >
              {type === 'real' ? 'Реальные' : 'Брендовые'}
            </button>
          ))}
          <input
            className="clubs__search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Поиск клуба"
          />
        </div>
        <div className="clubs__grid">
          {filteredClubs.map((club) => (
            <ClubCard key={club.id} club={club} />
          ))}
        </div>
      </Section>
    </div>
  );
}
