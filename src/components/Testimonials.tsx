const stats = [
  { value: "$4.2M+", label: "Recovered for clients" },
  { value: "98%", label: "Client satisfaction" },
  { value: "24/7", label: "Always available" },
];

const Testimonials = () => (
  <section id="testimonials" className="bg-navy py-16 md:py-20">
    <div className="max-w-3xl mx-auto px-4 text-center">
      <p className="text-gold uppercase tracking-[0.2em] text-[11px] font-body font-semibold mb-4">
        Client Stories
      </p>
      <div className="flex justify-center gap-1 mb-6 text-gold text-xl">
        {[...Array(5)].map((_, i) => (
          <span key={i}>★</span>
        ))}
      </div>
      <blockquote className="font-display italic text-white text-lg md:text-xl leading-relaxed mb-4">
        "After my accident on the 101, I didn't know where to turn. They guided me through
        everything. I never had to fight the insurance company alone — and my settlement was
        three times what they first offered."
      </blockquote>
      <p className="text-slate-brand text-[13px] mb-12">— Maria T., Northridge</p>

      <div className="grid grid-cols-3 gap-6">
        {stats.map((s) => (
          <div key={s.label}>
            <p className="font-display text-white text-2xl md:text-[30px]">{s.value}</p>
            <p className="text-slate-brand text-[11px] mt-1 uppercase tracking-wider">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
