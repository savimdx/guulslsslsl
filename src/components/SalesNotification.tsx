import { useEffect, useState } from 'react';
import { Check } from 'lucide-react';

interface SaleAlert {
  name: string;
  city: string;
  timeAgo: string;
}

const RECENT_SALES: SaleAlert[] = [
  { name: 'Mariana S.', city: 'SP', timeAgo: 'há 2 min' },
  { name: 'Gabriel O.', city: 'MG', timeAgo: 'agora mesmo' },
  { name: 'Camila R.', city: 'RJ', timeAgo: 'há 4 min' },
  { name: 'Pedro H.', city: 'PR', timeAgo: 'há 1 min' },
  { name: 'Larissa F.', city: 'BA', timeAgo: 'há 5 min' },
  { name: 'Rafael C.', city: 'RS', timeAgo: 'há 3 min' },
  { name: 'Juliana M.', city: 'SC', timeAgo: 'agora mesmo' },
  { name: 'Thiago A.', city: 'DF', timeAgo: 'há 6 min' },
];

export function SalesNotification() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let showTimer: ReturnType<typeof setTimeout>;
    let hideTimer: ReturnType<typeof setTimeout>;
    let nextTimer: ReturnType<typeof setTimeout>;

    const scheduleCycle = (delayMs: number) => {
      showTimer = setTimeout(() => {
        setIsVisible(true);
        hideTimer = setTimeout(() => {
          setIsVisible(false);
          nextTimer = setTimeout(() => {
            setCurrentIndex((prev) => (prev + 1) % RECENT_SALES.length);
          }, 400);
          scheduleCycle(6500);
        }, 4200);
      }, delayMs);
    };

    scheduleCycle(2500);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
      clearTimeout(nextTimer);
    };
  }, []);

  const current = RECENT_SALES[currentIndex];

  return (
    <div
      aria-live="polite"
      className={`fixed top-10 sm:top-11 left-2.5 sm:left-4 z-30 pointer-events-none select-none transition-all duration-400 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
      }`}
    >
      <div className="flex items-center gap-2 px-2.5 py-1.5 rounded-xl bg-white/60 backdrop-blur-md border border-slate-200/60 shadow-sm max-w-[215px]">
        <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-700 flex items-center justify-center shrink-0">
          <Check className="w-3 h-3 stroke-[3]" />
        </div>
        <div className="leading-tight min-w-0">
          <p className="text-[11px] font-bold text-[#07152B] truncate">
            {current.name} ({current.city})
          </p>
          <p className="text-[10px] text-slate-700/90 truncate">
            Comprou agora · {current.timeAgo}
          </p>
        </div>
      </div>
    </div>
  );
}
