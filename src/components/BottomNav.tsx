import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import './BottomNav.css';

const navItems = [
  { id: 'home', label: 'Главная', to: '/', icon: '🏠' },
  { id: 'challenges', label: 'Челленджи', to: '/challenges', icon: '🎯' },
  { id: 'check-in', label: 'Чек-ин', to: '/check-in', icon: '📍' },
  { id: 'clubs', label: 'Клубы', to: '/clubs', icon: '🏟️' },
  { id: 'lootboxes', label: 'Лутбоксы', to: '/lootboxes', icon: '🎁' },
  { id: 'leaderboard', label: 'Рейтинг', to: '/leaderboard', icon: '🏆' },
  { id: 'profile', label: 'Профиль', to: '/profile', icon: '🧑‍🚀' }
];

export function BottomNav() {
  return (
    <nav className="bottom-nav">
      {navItems.map((item) => (
        <NavLink
          key={item.id}
          to={item.to}
          end={item.to === '/'}
          className={({ isActive }) =>
            classNames('bottom-nav__item', { 'bottom-nav__item--active': isActive })
          }
        >
          <span aria-hidden>{item.icon}</span>
          <small>{item.label}</small>
        </NavLink>
      ))}
    </nav>
  );
}
