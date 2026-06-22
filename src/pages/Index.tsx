import { useState } from 'react';
import Icon from '@/components/ui/icon';

const CAT_IMG = 'https://cdn.poehali.dev/projects/adb9f9d4-4701-4080-9543-ef77f7818edc/files/15e05fc2-6075-46d5-a388-34b2d26635c0.jpg';

const PREDICTIONS = [
  'Сегодня тебе повезёт на контрольной — удача на твоей стороне!',
  'Твой лучший друг сегодня скажет тебе что-то приятное.',
  'На перемене тебя ждёт что-то вкусненькое 🍕',
  'Скоро получишь пятёрку там, где не ждал!',
  'Сегодня ты будешь самым весёлым в классе.',
  'Кто-то тайно считает тебя крутым — и правильно делает!',
  'Твоя любимая команда скоро победит.',
  'Сегодня отличный день, чтобы помириться с тем, с кем поссорился.',
  'Мяу! Будущее светлое — просто не забудь сделать домашку 😄',
  'Скоро придёт сообщение, которое тебя обрадует.',
  'Ты справишься с любой задачей — даже с математикой!',
  'Сегодня тебе улыбнётся даже самый строгий учитель.',
];

const Stars = () => {
  const stars = Array.from({ length: 60 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    size: Math.random() * 2 + 1,
    delay: Math.random() * 3,
  }));
  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      {stars.map((s) => (
        <span
          key={s.id}
          className="absolute rounded-full bg-amber-100 animate-twinkle"
          style={{
            left: `${s.left}%`,
            top: `${s.top}%`,
            width: s.size,
            height: s.size,
            animationDelay: `${s.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

const Index = () => {
  const [prediction, setPrediction] = useState<string | null>(null);
  const [key, setKey] = useState(0);

  const reveal = () => {
    const pred = PREDICTIONS[Math.floor(Math.random() * PREDICTIONS.length)];
    setPrediction(pred);
    setKey((k) => k + 1);
  };

  return (
    <div className="cosmic-bg min-h-screen text-foreground relative overflow-hidden flex flex-col items-center justify-center px-6 py-16">
      <Stars />

      <div className="relative z-10 text-center max-w-xl w-full">
        <div className="relative inline-block animate-float-slow">
          <div className="absolute inset-0 rounded-full bg-accent/30 blur-3xl scale-90" />
          <img
            src={CAT_IMG}
            alt="Кот-предсказатель Мурлин"
            className="relative w-48 h-48 md:w-60 md:h-60 rounded-full object-cover border-2 border-primary/40 animate-glow-pulse"
          />
        </div>

        <p className="font-hand text-2xl text-accent mt-6 text-glow-violet">магический оракул</p>
        <h1 className="font-display text-6xl md:text-8xl font-bold mt-1 text-primary text-glow leading-none">
          Кот&nbsp;Мурлин
        </h1>

        <div className="min-h-[120px] mt-8 flex items-center justify-center">
          {prediction ? (
            <p key={key} className="font-display italic text-2xl md:text-3xl text-foreground leading-relaxed animate-rise">
              «{prediction}»
            </p>
          ) : (
            <p className="font-display italic text-xl md:text-2xl text-muted-foreground">
              Нажми кнопку — и звёзды откроют твою судьбу…
            </p>
          )}
        </div>

        <button
          onClick={reveal}
          className="inline-flex items-center gap-2 mt-6 px-10 py-4 rounded-full bg-primary text-primary-foreground text-lg font-semibold hover:scale-105 transition-transform shadow-lg shadow-primary/30"
        >
          <Icon name="Sparkles" size={22} />
          Предсказание
        </button>
      </div>
    </div>
  );
};

export default Index;