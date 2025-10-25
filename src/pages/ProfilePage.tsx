import { Link } from 'react-router-dom';
import { QuickActionButton } from '../components/QuickActionButton';
import { Section } from '../components/Section';
import { XPProgress } from '../components/XPProgress';
import { clubs, profile } from '../data/sampleData';
import './ProfilePage.css';

const rankColors: Record<'Bronze' | 'Silver' | 'Gold' | 'Diamond', string> = {
  Bronze: '#9c7040',
  Silver: '#a9b7c6',
  Gold: '#f9d66b',
  Diamond: '#7cf5ff'
};

export default function ProfilePage() {
  const favoriteClubs = clubs.filter((club) => profile.favoriteClubIds.includes(club.id));

  return (
    <div className="profile">
      <section className="profile__header">
        <img src={profile.avatar} alt={profile.nickname} />
        <div>
          <h1>{profile.nickname}</h1>
          <span className="profile__rank" style={{ color: rankColors[profile.rank] }}>
            {profile.rank}
          </span>
          <div className="profile__stats">
            <span>Чекинов: {profile.totalCheckIns}</span>
            <span>Челленджей: {profile.completedChallenges}</span>
            <span>Streak: {profile.streakDays} дн.</span>
          </div>
        </div>
      </section>

      <XPProgress xp={profile.xp} level={profile.level} nextLevelXp={profile.nextLevelXp} />

      <Section title="Мои клубы" subtitle="Любимые места и бренды">
        <div className="profile__clubs">
          {favoriteClubs.map((club) => (
            <Link key={club.id} to={`/clubs/${club.id}`} className="profile__club">
              <img src={club.emblem} alt="" />
              <span>{club.name}</span>
            </Link>
          ))}
        </div>
      </Section>

      <Section title="Бейджи" subtitle="Коллекция достижений">
        <div className="profile__badges">
          {profile.badges.map((badge) => (
            <span key={badge} className="profile__badge">
              {badge}
            </span>
          ))}
        </div>
      </Section>

      <Section title="Подарки" subtitle="Следи за сроком действия">
        <div className="profile__gifts">
          {profile.gifts.map((gift) => (
            <article key={gift.id} className={`profile__gift profile__gift--${gift.status}`}>
              <header>
                <span>{gift.title}</span>
                <small>{gift.status === 'active' ? 'Активен' : gift.status === 'redeemed' ? 'Погашен' : 'Просрочен'}</small>
              </header>
              <p>{gift.description}</p>
              <footer>
                <span>QR: {gift.qrCode}</span>
                <span>Действует до {gift.expiresOn}</span>
              </footer>
            </article>
          ))}
        </div>
      </Section>

      <Section title="Ещё действия" subtitle="Поделись прогрессом">
        <div className="profile__actions">
          <QuickActionButton
            icon="🔗"
            label="Пригласить друга"
            description="Реферальная ссылка"
            href="https://t.me/share/url?url=https://t.me/lootarena"
          />
          <QuickActionButton
            icon="📤"
            label="Поделиться достижением"
            description="Отправить в чат"
            href="https://t.me/share/url?text=Я%20взял%20новый%20уровень%20в%20Loot%20Arena!"
          />
        </div>
      </Section>
    </div>
  );
}
