import { useEffect, useMemo } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { BottomNav } from './components/BottomNav';
import HomePage from './pages/HomePage';
import ChallengesPage from './pages/ChallengesPage';
import CheckInPage from './pages/CheckInPage';
import ClubsPage from './pages/ClubsPage';
import ClubDetailsPage from './pages/ClubDetailsPage';
import LootboxesPage from './pages/LootboxesPage';
import LeaderboardPage from './pages/LeaderboardPage';
import ProfilePage from './pages/ProfilePage';
import './styles/app-shell.css';
import WebApp from '@twa-dev/sdk';

const TITLES: Record<string, string> = {
  '/': 'Главная',
  '/challenges': 'Челленджи',
  '/check-in': 'Чек-ин',
  '/clubs': 'Клубы',
  '/lootboxes': 'Лутбоксы',
  '/leaderboard': 'Рейтинг',
  '/profile': 'Профиль'
};

export default function App() {
  const location = useLocation();

  useEffect(() => {
    WebApp.ready();
    WebApp.setHeaderColor('#05020b');
    WebApp.setBackgroundColor('#05020b');
  }, []);

  const title = useMemo(() => {
    if (location.pathname.startsWith('/clubs/')) {
      return 'Клуб';
    }
    return TITLES[location.pathname] ?? 'Loot Arena';
  }, [location.pathname]);

  return (
    <div className="app-shell">
      <header className="app-shell__header">
        <div className="app-shell__brand">
          <img src="/logo.svg" alt="Loot Arena" />
          <div>
            <span className="app-shell__title">{title}</span>
            <span className="app-shell__subtitle">Loot Arena</span>
          </div>
        </div>
        <a
          className="app-shell__invite"
          href="https://t.me/share/url?url=https://t.me/lootarena&text=Залетай%20в%20Loot%20Arena!"
          target="_blank"
          rel="noreferrer"
        >
          + пригласить
        </a>
      </header>
      <main className="app-shell__main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/challenges" element={<ChallengesPage />} />
          <Route path="/check-in" element={<CheckInPage />} />
          <Route path="/clubs" element={<ClubsPage />} />
          <Route path="/clubs/:clubId" element={<ClubDetailsPage />} />
          <Route path="/lootboxes" element={<LootboxesPage />} />
          <Route path="/leaderboard" element={<LeaderboardPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </main>
      <BottomNav />
    </div>
  );
}
