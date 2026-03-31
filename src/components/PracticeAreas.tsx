const CarIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1a2744" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 16H9m10 0h3v-3.15a1 1 0 0 0-.84-.99L16 11l-2.7-3.6a1 1 0 0 0-.8-.4H5.24a2 2 0 0 0-1.8 1.1l-.8 1.63A6 6 0 0 0 2 12.42V16h3" />
    <circle cx="6.5" cy="16.5" r="2.5" />
    <circle cx="16.5" cy="16.5" r="2.5" />
  </svg>
);

const HeartIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1a2744" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
  </svg>
);

const ShieldAlertIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1a2744" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
    <path d="M12 8v4" /><path d="M12 16h.01" />
  </svg>
);

const ShieldIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1a2744" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

const cards = [
  {
    icon: <CarIcon />,
    title: "Car Accidents",
    body: "Rear-ends, intersections, hit-and-run, uninsured drivers — we handle the insurance companies so you can focus on healing.",
  },
  {
    icon: <HeartIcon />,
    title: "Wrongful Death",
    body: "Losing a loved one to someone else's negligence is devastating. We pursue full justice for families — with compassion at every step.",
  },
  {
    icon: <ShieldAlertIcon />,
    title: "Insurance Disputes",
    body: "Low-ball offers, denied claims, bad faith tactics. We know the playbook — and we push back hard.",
  },
  {
    icon: <ShieldIcon />,
    title: "Maximum Compensation",
    body: "Medical bills, lost wages, pain and suffering, future costs. We fight for everything you're entitled to — not just a quick check.",
  },
];

const PracticeAreas = () => (
  <section id="practice-areas" className="bg-off-white py-16 md:py-20">
    <div className="max-w-6xl mx-auto px-4">
      <p className="text-gold uppercase tracking-[0.2em] text-[11px] font-body font-semibold mb-2">
        How We Help
      </p>
      <h2 className="font-display text-navy text-[28px] mb-10">
        Serious Cases. Real Results.
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {cards.map((c) => (
          <div
            key={c.title}
            className="bg-white border border-gray-100 rounded-xl p-6"
          >
            <div className="mb-3.5">{c.icon}</div>
            <h3 className="font-display text-[18px] text-navy mb-2">{c.title}</h3>
            <p className="text-muted-foreground text-[14px] leading-relaxed">{c.body}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PracticeAreas;
