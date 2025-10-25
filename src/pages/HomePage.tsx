import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ChallengeCard } from '../components/ChallengeCard';
import { QuickActionButton } from '../components/QuickActionButton';
import { Section } from '../components/Section';
import { clubs, challenges, profile, season } from '../data/sampleData';
import './HomePage.css';

export default function HomePage() {
  const favoriteChallenges = useMemo(
    () =>
      challenges.filter(
        (challenge) =>
          challenge.clubId && profile.favoriteClubIds.includes(challenge.clubId) &&
          ['my-clubs', 'phygital'].includes(challenge.category)
      ),
    []
  );

  const seasonal = useMemo(
    () => challenges.filter((challenge) => season.featuredChallenges.includes(challenge.id)),
    []
  );

  const recommended = useMemo(
    () =>
      challenges.filter(
        (challenge) =>
          !favoriteChallenges.includes(challenge) && !seasonal.includes(challenge) &&
          ['online', 'seasonal'].includes(challenge.category)
      ),
    [favoriteChallenges, seasonal]
  );

  return (
    <div className="home">
      <Section title="Быстрые действия" subtitle="Играй фиджитал и лови бусты">
        <div className="home__quick-grid">
          <QuickActionButton icon="📍" label="Чек-ин" description="Отсканируй QR в клубе" href="/#/check-in" />
          <QuickActionButton icon="✨" label="Открыть лутбокс" description="1 новый" href="/#/lootboxes" />
          <QuickActionButton
            icon="🤝"
            label="Пригласить друга"
            description="Бонусный лутбокс"
            href="https://t.me/share/url?url=https://t.me/lootarena"
          />
        </div>
      </Section>

      <Section
        title="Любимые клубы"
        subtitle="Челленджи, которые ждут именно тебя"
        action={<Link to="/challenges">Все челленджи</Link>}
      >
        <div className="home__challenge-column">
          {favoriteChallenges.map((challenge) => (
            <ChallengeCard key={challenge.id} challenge={challenge} />
          ))}
        </div>
      </Section>

      <Section
        title={season.name}
        subtitle={`${season.theme} · Осталось ${season.timeRemaining}`}
        action={<Link to="/leaderboard">Сезонный рейтинг</Link>}
      >
        <div className="season-card">
          <p>{season.description}</p>
          <div className="season-card__chips">
            {season.featuredChallenges.map((challengeId) => {
              const challenge = challenges.find((item) => item.id === challengeId);
              if (!challenge) return null;
              return (
                <span key={challenge.id} className="chip">
                  {challenge.title}
                </span>
              );
            })}
          </div>
          <Link className="season-card__cta" to="/challenges">
            К сезонным заданиям →
          </Link>
        </div>
      </Section>

      <Section title="Рекомендации" subtitle="Онлайн и бренд-челленджи">
        <div className="home__challenge-column">
          {recommended.map((challenge) => (
            <ChallengeCard key={challenge.id} challenge={challenge} />
          ))}
        </div>
      </Section>

      <Section title="Новости клубов" subtitle="Не пропусти новые призы">
        <div className="home__news-grid">
          {clubs.map((club) => (
            <article key={club.id} className="home__news-card">
              <header>
                <img src={club.emblem} alt="" />
                <div>
                  <h3>{club.name}</h3>
                  <p>{club.news[0]?.timestamp ?? ''}</p>
                </div>
              </header>
              <strong>{club.news[0]?.title}</strong>
              <p>{club.news[0]?.body}</p>
              <Link to={`/clubs/${club.id}`}>В клуб →</Link>
            </article>
          ))}
        </div>
      </Section>
    </div>
  );
}
