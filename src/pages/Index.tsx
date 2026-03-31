import StickyNav from "@/components/StickyNav";
import HeroSection from "@/components/HeroSection";
import PracticeAreas from "@/components/PracticeAreas";
import HowItWorks from "@/components/HowItWorks";
import CaseForm from "@/components/CaseForm";
import Testimonials from "@/components/Testimonials";
import UrgencyCta from "@/components/UrgencyCta";
import Footer from "@/components/Footer";

const Index = () => (
  <>
    <StickyNav />
    <main>
      <HeroSection />
      <PracticeAreas />
      <HowItWorks />

      {/* Mobile-only contact form */}
      <div className="md:hidden px-4 py-12 bg-white" id="contact-form">
        <CaseForm
          title="Get Your Free Case Review"
          subtitle="Free, confidential — no obligation"
        />
      </div>

      <Testimonials />
      <UrgencyCta />
    </main>
    <Footer />
  </>
);

export default Index;
