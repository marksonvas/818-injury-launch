const StickyNav = () => {
  return (
    <header className="sticky top-0 z-50 bg-navy w-full">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <span className="font-display text-xl font-semibold text-white tracking-tight">
          818 Injury
        </span>
        <div className="flex items-center gap-4">
          <span className="hidden md:inline text-slate-brand text-sm">
            Serving the San Fernando Valley
          </span>
          <a
            href="tel:8186509985"
            className="inline-flex items-center bg-gold hover:bg-gold-dark text-white font-body font-semibold text-sm px-5 py-2.5 rounded-full transition-colors min-h-[44px]"
          >
            Call Now: (818) 650-9985
          </a>
        </div>
      </div>
    </header>
  );
};

export default StickyNav;
