interface OfferBarProps {
  bannerText: string;
}

export function OfferBar({ bannerText }: OfferBarProps) {
  // Today's formatted date in Brazilian Portuguese
  const today = new Date().toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });

  return (
    <aside
      aria-label="Barra de oferta especial"
      className="w-full bg-[#E53935] text-white py-2 px-4 text-center text-xs md:text-sm font-semibold tracking-wide shadow-sm flex items-center justify-center gap-2"
    >
      <span className="inline-block animate-pulse">⚡</span>
      <span>
        {bannerText} <span className="opacity-90 font-medium">APENAS HOJE {today}</span>
      </span>
    </aside>
  );
}
