import CaseForm from "./CaseForm";

const HeroSection = () => {
  return (
    <section id="hero" className="bg-gradient-to-br from-navy to-navy-light">
      <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row gap-10 items-start">
        {/* Left Column */}
        <div className="md:w-[60%] w-full">
          <p className="text-gold uppercase tracking-[0.2em] text-xs font-body font-semibold mb-4">
            San Fernando Valley Injury Law
          </p>
          <h1 className="font-display text-white text-[28px] md:text-[36px] leading-tight mb-4">
            You Were Hurt. You Deserve Help.
          </h1>
          <p className="text-slate-brand text-[15px] max-w-[420px] mb-8 leading-relaxed">
            If you or someone you love was injured in a car accident or lost a loved one, 
            we're here to listen — and fight for what you're owed. No fees unless you win.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-8">
            <a
              href="#contact-form"
              className="inline-flex items-center justify-center bg-gold hover:bg-gold-dark text-white font-body font-semibold text-sm px-6 py-3 rounded-lg transition-colors min-h-[44px]"
            >
              Get a Free Consultation
            </a>
            <a
              href="tel:8180000000"
              className="inline-flex items-center justify-center border border-white text-white font-body font-semibold text-sm px-6 py-3 rounded-lg hover:bg-white/10 transition-colors min-h-[44px]"
            >
              Call (818) 000-0000
            </a>
          </div>

          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {["No fee unless you win", "Free case review", "Available 24/7"].map((item) => (
              <span key={item} className="flex items-center gap-2 text-slate-brand text-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-gold inline-block" />
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Right Column — Desktop Form */}
        <div className="hidden md:block md:w-[40%] w-full" id="contact-form-desktop">
          <div id="contact-form">
            <CaseForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
