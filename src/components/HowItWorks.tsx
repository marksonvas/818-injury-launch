const steps = [
  {
    num: 1,
    title: "Free case review — today",
    desc: "Call or submit the form. We review your situation at no cost, no obligation.",
  },
  {
    num: 2,
    title: "We build your case",
    desc: "We gather evidence, handle paperwork, and deal with insurance adjusters on your behalf.",
  },
  {
    num: 3,
    title: "We fight — or negotiate",
    desc: "Most cases settle. When they don't, we're fully prepared to take it to trial.",
  },
  {
    num: 4,
    title: "You get paid. We get paid after.",
    desc: "Zero upfront fees. Our fee comes from the settlement — only if you win.",
  },
];

const HowItWorks = () => (
  <section id="process" className="bg-white py-16 md:py-20">
    <div className="max-w-2xl mx-auto px-4">
      <p className="text-gold uppercase tracking-[0.2em] text-[11px] font-body font-semibold mb-2">
        Your Path Forward
      </p>
      <h2 className="font-display text-navy text-[28px] mb-10">
        Simple. Transparent. No Surprises.
      </h2>
      <div>
        {steps.map((s, i) => (
          <div
            key={s.num}
            className={`flex gap-4 py-5 ${i < steps.length - 1 ? "border-b border-gray-100" : ""}`}
          >
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-navy flex items-center justify-center text-white text-sm font-body font-semibold">
              {s.num}
            </div>
            <div>
              <p className="font-body font-semibold text-sm text-foreground">{s.title}</p>
              <p className="text-gray-500 text-xs mt-1 leading-relaxed">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
