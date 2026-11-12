interface OfferBarProps {
  bannerText: string;
}

export function OfferBar({ bannerText }: OfferBarProps) {
  const cleanText = bannerText.replace(/⚡/g, '').trim();

  return (
    <aside
      aria-label="Barra de oferta"
      className="sticky top-0 z-40 w-full bg-[#E53935] text-white py-2 px-4 text-center text-xs md:text-sm font-semibold tracking-wide shadow-sm flex items-center justify-center"
    >
      <span>{cleanText}</span>
    </aside>
  );
}
