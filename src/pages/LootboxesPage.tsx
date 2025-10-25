import { useMemo, useState } from 'react';
import { Section } from '../components/Section';
import { profile } from '../data/sampleData';
import './LootboxesPage.css';

type AvailableBox = {
  id: string;
  name: string;
  rarity: 'standard' | 'rare' | 'legendary';
  source: string;
};

const initialBoxes: AvailableBox[] = [
  { id: 'av-1', name: 'Neon Spark', rarity: 'standard', source: 'Ежедневный вход' },
  { id: 'av-2', name: 'Cyber Pulse', rarity: 'rare', source: 'Челлендж «Cyber Rush»' }
];

export default function LootboxesPage() {
  const [available, setAvailable] = useState(initialBoxes);
  const [openingBox, setOpeningBox] = useState<AvailableBox | null>(null);
  const [openedBox, setOpenedBox] = useState<AvailableBox | null>(null);

  const history = useMemo(() => profile.lootboxHistory, []);

  const handleOpen = (box: AvailableBox) => {
    setOpeningBox(box);
    setOpenedBox(null);
    window.navigator.vibrate?.([80, 40, 120]);
    setTimeout(() => {
      setAvailable((prev) => prev.filter((item) => item.id !== box.id));
      setOpeningBox(null);
      setOpenedBox(box);
    }, 1400);
  };

  return (
    <div className="lootboxes">
      <Section title="Лутбоксы" subtitle="Открой и узнай награду">
        <div className="lootboxes__grid">
          {available.map((box) => (
            <article key={box.id} className={`lootboxes__box lootboxes__box--${box.rarity}`}>
              <header>
                <span>{box.name}</span>
                <small>{box.source}</small>
              </header>
              <button type="button" onClick={() => handleOpen(box)} disabled={!!openingBox}>
                {openingBox?.id === box.id ? 'Распаковка…' : 'Открыть'}
              </button>
            </article>
          ))}
          {available.length === 0 && <p className="lootboxes__empty">Нет непросмотренных лутбоксов</p>}
        </div>
        {openedBox ? (
          <div className={`lootboxes__result lootboxes__result--${openedBox.rarity}`}>
            <span>🎉</span>
            <div>
              <strong>Редкий лут!</strong>
              <p>
                {openedBox.name} — смотри награды в разделе «Профиль → История лута».
              </p>
            </div>
          </div>
        ) : null}
      </Section>

      <Section title="История распаковок" subtitle="Все призы за последние недели">
        <div className="lootboxes__history">
          {history.map((drop) => (
            <article key={drop.id} className={`lootboxes__history-item lootboxes__history-item--${drop.rarity}`}>
              <header>
                <span>{drop.name}</span>
                <small>{drop.unlockedOn}</small>
              </header>
              <ul>
                {drop.rewards.map((reward) => (
                  <li key={reward}>{reward}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>
    </div>
  );
}
