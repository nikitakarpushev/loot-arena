import { useMemo } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { ChallengeCard } from '../components/ChallengeCard';
import { QuickActionButton } from '../components/QuickActionButton';
import { Section } from '../components/Section';
import { clubs, challenges } from '../data/sampleData';
import './ClubDetailsPage.css';

export default function ClubDetailsPage() {
  const { clubId } = useParams();
  const navigate = useNavigate();
  const club = useMemo(() => clubs.find((item) => item.id === clubId), [clubId]);

  if (!club) {
    return (
      <div className="club-details__empty">
        <p>Клуб не найден.</p>
        <button type="button" onClick={() => navigate('/clubs')}>
          Назад к каталогу
        </button>
      </div>
    );
  }

  const activeChallenges = challenges.filter((challenge) => club.activeChallenges.includes(challenge.id));

  return (
    <div className="club-details">
      <section className="club-details__hero">
        <img src={club.emblem} alt="" />
        <div>
          <span className={`club-details__tag club-details__tag--${club.type}`}>
            {club.type === 'real' ? 'Реальный клуб' : 'Бренд' }
          </span>
          <h1>{club.name}</h1>
          <p>{club.description}</p>
          {club.location ? <span className="club-details__location">📍 {club.location}</span> : null}
          <div className="club-details__metrics">
            <span>★ {club.rating.toFixed(1)}</span>
            <span>{club.members.toLocaleString('ru-RU')} участников</span>
          </div>
        </div>
      </section>

      <div className="club-details__actions">
        {club.type === 'real' ? (
          <QuickActionButton icon="📍" label="Чек-ин" description="Сканируй QR" href="/#/check-in" />
        ) : (
          <QuickActionButton icon="🎯" label="Бренд-челленджи" description="Редкий лут" href="/#/challenges" />
        )}
        <QuickActionButton icon="🎁" label="Подарки" description="Активные награды" href="/#/profile" />
      </div>

      <Section title="Активные челленджи" subtitle="Выполняй и зарабатывай XP">
        <div className="club-details__challenges">
          {activeChallenges.map((challenge) => (
            <ChallengeCard key={challenge.id} challenge={challenge} showClub={false} />
          ))}
        </div>
      </Section>

      <Section title="Подарки" subtitle="Забирай лут за активность">
        <div className="club-details__rewards">
          {club.rewards.map((reward) => (
            <article key={reward.id} className={`club-details__reward club-details__reward--${reward.rarity}`}>
              <header>
                <span>{reward.title}</span>
                <small>{reward.type}</small>
              </header>
              <p>{reward.description}</p>
              <strong>{reward.requirement}</strong>
            </article>
          ))}
        </div>
      </Section>

      <Section title="Новости клуба" subtitle="Будь в курсе апдейтов">
        <div className="club-details__news">
          {club.news.map((item) => (
            <article key={item.id}>
              <span>{item.timestamp}</span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
        <Link className="club-details__back" to="/clubs">
          ← В каталог клубов
        </Link>
      </Section>
    </div>
  );
}
