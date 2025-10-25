import './XPProgress.css';

type Props = {
  xp: number;
  level: number;
  nextLevelXp: number;
};

export function XPProgress({ xp, level, nextLevelXp }: Props) {
  const progress = Math.min(100, Math.round((xp / nextLevelXp) * 100));
  return (
    <div className="xp-progress">
      <header>
        <span>Уровень {level}</span>
        <span>{xp} / {nextLevelXp} XP</span>
      </header>
      <div className="xp-progress__bar">
        <div className="xp-progress__fill" style={{ width: `${progress}%` }} />
      </div>
    </div>
  );
}
