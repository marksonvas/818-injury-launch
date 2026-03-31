const UrgencyCta = () => (
  <section id="cta" className="bg-gold py-16 md:py-20">
    <div className="max-w-3xl mx-auto px-4 text-center">
      <h2 className="font-display text-white text-xl md:text-2xl mb-3">
        Don't wait. Evidence disappears. Deadlines are real.
      </h2>
      <p className="text-white/85 text-[16px] mb-6">
        California's statute of limitations gives you limited time to file. Get your free case review now.
      </p>
      <a
        href="tel:8186509985"
        className="block font-display font-semibold text-white text-[44px] mb-6 hover:underline"
      >
        (818) 650-9985
      </a>
      <a
        href="#contact-form"
        className="inline-flex items-center justify-center bg-navy text-white font-body font-semibold text-sm px-8 py-3 rounded-lg hover:bg-navy-light transition-colors min-h-[44px]"
      >
        Start My Free Case Review
      </a>
    </div>
  </section>
);

export default UrgencyCta;
