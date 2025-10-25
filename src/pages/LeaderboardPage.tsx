import { useMemo, useState } from 'react';
import { Section } from '../components/Section';
import { leaderboardClubs, leaderboardPlayers, season } from '../data/sampleData';
import type { LeaderboardEntry } from '../data/types';
import './LeaderboardPage.css';

type View = 'players' | 'clubs';

type Timeframe = 'week' | 'season';

const timeframeLabels: Record<Timeframe, string> = {
  week: 'Неделя',
  season: 'Сезон'
};

export default function LeaderboardPage() {
  const [view, setView] = useState<View>('players');
  const [timeframe, setTimeframe] = useState<Timeframe>('season');

  const entries = useMemo<LeaderboardEntry[]>(() => {
    if (view === 'players') {
      return leaderboardPlayers;
    }
    return leaderboardClubs;
  }, [view]);

  return (
    <div className="leaderboard">
      <Section title="Рейтинг" subtitle={`Фильтры: ${timeframeLabels[timeframe]} · ${view === 'players' ? 'Игроки' : 'Клубы'}`}>
        <div className="leaderboard__controls">
          <div className="leaderboard__toggle">
            <button
              type="button"
              className={view === 'players' ? 'is-active' : ''}
              onClick={() => setView('players')}
            >
              Игроки
            </button>
            <button
              type="button"
              className={view === 'clubs' ? 'is-active' : ''}
              onClick={() => setView('clubs')}
            >
              Клубы
            </button>
          </div>
          <div className="leaderboard__toggle">
            {(Object.keys(timeframeLabels) as Timeframe[]).map((key) => (
              <button
                key={key}
                type="button"
                className={timeframe === key ? 'is-active' : ''}
                onClick={() => setTimeframe(key)}
              >
                {timeframeLabels[key]}
              </button>
            ))}
          </div>
        </div>

        <ol className="leaderboard__list">
          {entries.map((entry) => (
            <li key={entry.id} className={entry.rank <= 3 ? `top top-${entry.rank}` : undefined}>
              <span className="leaderboard__rank">#{entry.rank}</span>
              <span className="leaderboard__name">{entry.nickname}</span>
              <span className="leaderboard__xp">{entry.xp.toLocaleString('ru-RU')} XP</span>
            </li>
          ))}
        </ol>
      </Section>

      <Section title="Сезонные награды" subtitle={season.name}>
        <div className="leaderboard__season-card">
          <p>{season.description}</p>
          <ul>
            <li>🥇 Diamond: легендарный лутбокс + купон на реальный приз</li>
            <li>🥈 Gold: эпический лутбокс + 600 XP</li>
            <li>🥉 Silver: редкий лутбокс + 300 XP</li>
          </ul>
          <span>До конца сезона: {season.timeRemaining}</span>
        </div>
      </Section>
    </div>
  );
}
