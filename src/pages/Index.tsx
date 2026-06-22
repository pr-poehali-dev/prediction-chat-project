import { useState, useRef, useEffect } from 'react';
import Icon from '@/components/ui/icon';

const CAT_IMG = 'https://cdn.poehali.dev/projects/adb9f9d4-4701-4080-9543-ef77f7818edc/files/15e05fc2-6075-46d5-a388-34b2d26635c0.jpg';

const PREDICTIONS = [
  'Звёзды шепчут: скоро удача постучится в твою дверь трижды.',
  'Я вижу в хрустальном шаре дорогу — она приведёт тебя к мечте.',
  'Мяу… Луна благосклонна. Загаданное сбудется до новолуния.',
  'Древние руны сложились в твою пользу. Доверься сердцу.',
  'Туман рассеивается — впереди встреча, что изменит всё.',
  'Магия чувствует твою силу. Действуй смело, и судьба ответит.',
  'Хвост мой подсказывает: ответ, что ты ищешь, уже внутри тебя.',
  'Созвездие Кота сияет ярко — это знак больших перемен.',
];

interface Msg { from: 'cat' | 'user'; text: string; }

const GALLERY = [
  { icon: 'Sparkles', title: 'Удача', text: 'Скоро удача постучится в твою дверь трижды.' },
  { icon: 'Moon', title: 'Любовь', text: 'Впереди встреча, что согреет твоё сердце.' },
  { icon: 'Star', title: 'Перемены', text: 'Созвездие Кота сулит большие перемены.' },
  { icon: 'Gem', title: 'Богатство', text: 'Хрустальный шар отражает золотое будущее.' },
  { icon: 'Compass', title: 'Путь', text: 'Дорога приведёт тебя прямо к мечте.' },
  { icon: 'Flame', title: 'Сила', text: 'Магия чувствует твою внутреннюю силу.' },
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
  const [messages, setMessages] = useState<Msg[]>([
    { from: 'cat', text: 'Приветствую, странник. Я Мурлин — кот-предсказатель. Задай свой вопрос, и звёзды откроют тебе судьбу… 🔮' },
  ]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, typing]);

  const send = () => {
    if (!input.trim()) return;
    const userText = input.trim();
    setMessages((m) => [...m, { from: 'user', text: userText }]);
    setInput('');
    setTyping(true);
    setTimeout(() => {
      const pred = PREDICTIONS[Math.floor(Math.random() * PREDICTIONS.length)];
      setMessages((m) => [...m, { from: 'cat', text: pred }]);
      setTyping(false);
    }, 1400);
  };

  return (
    <div className="cosmic-bg min-h-screen text-foreground relative overflow-hidden">
      <Stars />

      {/* HERO */}
      <header className="relative z-10 px-6 pt-16 pb-10 text-center max-w-5xl mx-auto">
        <div className="relative inline-block animate-float-slow">
          <div className="absolute inset-0 rounded-full bg-accent/30 blur-3xl scale-90" />
          <img
            src={CAT_IMG}
            alt="Кот-предсказатель Мурлин"
            className="relative w-44 h-44 md:w-56 md:h-56 rounded-full object-cover border-2 border-primary/40 animate-glow-pulse"
          />
        </div>
        <p className="font-hand text-2xl text-accent mt-6 text-glow-violet">магический оракул</p>
        <h1 className="font-display text-6xl md:text-8xl font-bold mt-1 text-primary text-glow leading-none">
          Кот&nbsp;Мурлин
        </h1>
        <p className="font-display italic text-xl md:text-2xl text-muted-foreground mt-4 max-w-xl mx-auto">
          Загляни в хрустальный шар судьбы — задай вопрос рыжему магу в синей мантии и узнай своё предсказание.
        </p>
        <a
          href="#chat"
          className="inline-flex items-center gap-2 mt-8 px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold hover:scale-105 transition-transform shadow-lg shadow-primary/30"
        >
          <Icon name="Sparkles" size={20} />
          Узнать судьбу
        </a>
      </header>

      {/* CHAT */}
      <section id="chat" className="relative z-10 px-4 max-w-2xl mx-auto pb-20">
        <div className="magic-card rounded-3xl p-4 md:p-6">
          <div className="flex items-center gap-3 pb-4 border-b border-border/60">
            <img src={CAT_IMG} alt="" className="w-11 h-11 rounded-full object-cover border border-primary/40" />
            <div>
              <p className="font-semibold text-foreground">Мурлин</p>
              <p className="text-xs text-accent flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" /> гадает онлайн
              </p>
            </div>
          </div>

          <div className="py-5 space-y-4 max-h-[420px] overflow-y-auto pr-1">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.from === 'user' ? 'justify-end' : 'justify-start'} animate-rise`}>
                <div
                  className={`max-w-[80%] px-4 py-3 rounded-2xl text-[15px] leading-relaxed ${
                    m.from === 'user'
                      ? 'bg-primary text-primary-foreground rounded-br-sm'
                      : 'bg-secondary text-secondary-foreground rounded-bl-sm font-display text-lg'
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
            {typing && (
              <div className="flex justify-start animate-rise">
                <div className="bg-secondary px-4 py-3 rounded-2xl rounded-bl-sm flex gap-1.5">
                  {[0, 1, 2].map((d) => (
                    <span
                      key={d}
                      className="w-2 h-2 rounded-full bg-accent animate-twinkle"
                      style={{ animationDelay: `${d * 0.2}s` }}
                    />
                  ))}
                </div>
              </div>
            )}
            <div ref={endRef} />
          </div>

          <div className="flex gap-2 pt-3 border-t border-border/60">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && send()}
              placeholder="Спроси о любви, удаче, будущем…"
              className="flex-1 bg-background/60 border border-border rounded-full px-5 py-3 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
            <button
              onClick={send}
              className="w-12 h-12 shrink-0 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:scale-105 transition-transform"
            >
              <Icon name="Send" size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="relative z-10 px-6 max-w-5xl mx-auto pb-24">
        <div className="text-center mb-10">
          <p className="font-hand text-2xl text-accent text-glow-violet">архив судеб</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary">Галерея предсказаний</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {GALLERY.map((g, i) => (
            <div
              key={i}
              className="magic-card rounded-2xl p-6 hover:scale-[1.03] transition-transform animate-rise"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className="w-12 h-12 rounded-full bg-primary/15 flex items-center justify-center mb-4 text-primary">
                <Icon name={g.icon} size={24} />
              </div>
              <h3 className="font-display text-2xl font-semibold text-foreground mb-1">{g.title}</h3>
              <p className="text-muted-foreground text-[15px] leading-relaxed">{g.text}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="relative z-10 text-center pb-10 text-muted-foreground/60 text-sm font-display italic">
        ✦ Кот Мурлин видит то, что скрыто от других ✦
      </footer>
    </div>
  );
};

export default Index;
