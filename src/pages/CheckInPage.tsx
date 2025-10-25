import { useState } from 'react';
import { Section } from '../components/Section';
import { clubs } from '../data/sampleData';
import './CheckInPage.css';

const radiusOptions = [25, 50, 75, 100];

export default function CheckInPage() {
  const [step, setStep] = useState<'idle' | 'scanned' | 'verified' | 'complete'>('idle');
  const [radius, setRadius] = useState(50);

  const handleScan = () => {
    setStep('scanned');
    window.navigator.vibrate?.(100);
  };

  const handleVerify = () => {
    setStep('verified');
    window.navigator.vibrate?.([60, 40, 60]);
    setTimeout(() => setStep('complete'), 1200);
  };

  return (
    <div className="checkin">
      <Section title="Чек-ин в реальном клубе" subtitle="Отметься в ≤100 м от QR">
        <div className="checkin__card">
          <ol>
            <li>
              Нажми «Сканировать QR», наведи камеру на статический код клуба.
            </li>
            <li>Подтверди геолокацию Telegram. Радиус сверки: {radius} м.</li>
            <li>Получай XP, streak и отметку в профиле.</li>
          </ol>
          <div className="checkin__actions">
            <button type="button" onClick={handleScan} className="checkin__button">
              {step === 'idle' ? 'Сканировать QR' : 'QR считан ✅'}
            </button>
            <button
              type="button"
              onClick={handleVerify}
              className="checkin__button"
              disabled={step === 'idle'}
            >
              {step === 'verified' || step === 'complete' ? 'Геопроверка подтверждена' : 'Подтвердить геолокацию'}
            </button>
          </div>
          <div className={`checkin__status checkin__status--${step}`}>
            {step === 'idle' && 'Готов к чекину'}
            {step === 'scanned' && 'QR принят. Осталось подтвердить геолокацию.'}
            {step === 'verified' && 'Геолокация совпала! Начисляем XP...'}
            {step === 'complete' && 'Чек-ин засчитан! +50 XP'}
          </div>
          <div className="checkin__radius">
            Радиус проверки:
            <div className="checkin__radius-options">
              {radiusOptions.map((option) => (
                <button
                  key={option}
                  type="button"
                  className={radius === option ? 'radius radius--active' : 'radius'}
                  onClick={() => setRadius(option)}
                >
                  {option} м
                </button>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section title="Где чек-иниться" subtitle="Реальные клубы с активным QR">
        <div className="checkin__club-grid">
          {clubs
            .filter((club) => club.type === 'real')
            .map((club) => (
              <article key={club.id} className="checkin__club-card">
                <header>
                  <img src={club.emblem} alt="" />
                  <div>
                    <h3>{club.name}</h3>
                    <p>{club.location}</p>
                  </div>
                </header>
                <p>{club.news[0]?.title}</p>
                <span>+120 XP за чек-ин сегодня</span>
              </article>
            ))}
        </div>
      </Section>

      <Section title="Антифрод" subtitle="Защищаем XP и подарки">
        <ul className="checkin__fraud-list">
          <li>Максимум 3 чек-ина в одном клубе в сутки.</li>
          <li>QR-подарки имеют TTL и обнуляются после погашения.</li>
          <li>Если геолокация не совпала — повторить через 5 минут.</li>
        </ul>
      </Section>
    </div>
  );
}
