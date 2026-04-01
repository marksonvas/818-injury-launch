import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "How long do I have to file a personal injury claim in California?",
    a: "In California, you generally have 2 years from the date of your injury to file a personal injury lawsuit. This is called the statute of limitations. If you were injured by a government entity, the deadline is much shorter — just 6 months to file a government claim. Don't wait. Evidence disappears, witnesses forget details, and missing the deadline means losing your right to compensation entirely.",
  },
  {
    q: "How much does a personal injury attorney cost?",
    a: "Nothing upfront — and nothing at all unless you win. Personal injury attorneys in California work on a contingency fee basis, meaning our fee (typically 33% of the settlement) only comes out of your recovery. If we don't win, you don't pay. There is no financial risk to getting legal help.",
  },
  {
    q: "Should I accept the insurance company's first settlement offer?",
    a: "Almost never. Insurance companies are businesses — their goal is to pay you as little as possible, as fast as possible, before you understand the full value of your claim. First offers routinely undervalue medical costs, future treatment, lost wages, and pain and suffering. Before accepting anything, speak with an attorney. It costs you nothing and could mean the difference between thousands and hundreds of thousands of dollars.",
  },
  {
    q: "What should I do immediately after a car accident in California?",
    a: "Follow these steps: (1) Call 911 — get police and medical help on the scene. (2) Document everything — photos of vehicles, injuries, road conditions, and any witnesses. (3) Don't admit fault — even saying \"I'm sorry\" can be used against you. (4) Get medical attention immediately, even if you feel fine — some injuries appear days later. (5) Do not speak to the other driver's insurance company without an attorney. (6) Call us for a free case review before you sign anything.",
  },
  {
    q: "What if the other driver was uninsured or underinsured?",
    a: "This is more common than you'd think — California has one of the highest rates of uninsured drivers in the country. You may still have options through your own uninsured motorist (UM) coverage, or through other liable parties (employers, vehicle owners, government entities responsible for road conditions). Don't assume you have no case just because the other driver had no insurance.",
  },
  {
    q: "How long does a personal injury case take in California?",
    a: "Most personal injury cases in California settle within 6 to 18 months without going to trial. Cases that go to trial can take 2-3 years. The timeline depends on the severity of your injuries, how quickly you reach maximum medical improvement, and how cooperative the insurance company is. We move as fast as possible — but we never rush a settlement just to close a case quickly.",
  },
  {
    q: "Who can file a wrongful death claim in California?",
    a: "In California, the following people may file a wrongful death claim: surviving spouse or domestic partner, children of the deceased, and in some cases, parents or siblings if there are no surviving spouse or children. The claim must be filed within 2 years of the date of death. Wrongful death cases cover funeral expenses, lost financial support, and the loss of companionship and care. If you lost a loved one due to someone else's negligence, you deserve answers — and justice.",
  },
  {
    q: "What is my injury case worth?",
    a: "Every case is different, but compensation in a personal injury case typically covers: medical bills (past and future), lost wages and lost earning capacity, pain and suffering, emotional distress, and property damage. Serious injuries, permanent disability, and cases involving wrongful death typically result in significantly higher settlements. The only way to know what your case is truly worth is to have an attorney review the specific facts — which we do for free.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="faq" className="bg-white py-16 md:py-20">
      <div className="max-w-3xl mx-auto px-4">
        <p className="text-gold uppercase tracking-[0.15em] text-[11px] font-semibold mb-3">
          Common Questions
        </p>
        <h2 className="font-display text-navy text-[28px] mb-2">
          Get the Answers You Need.
        </h2>
        <p className="text-gray-500 text-[16px] mb-10">
          California law is on your side. Here's what you need to know.
        </p>

        <div>
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} className="border-b border-gray-100">
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between py-5 text-left"
                >
                  <span className="text-navy text-[16px] font-medium pr-4">
                    {faq.q}
                  </span>
                  {isOpen ? (
                    <Minus className="h-5 w-5 shrink-0 text-gold" />
                  ) : (
                    <Plus className="h-5 w-5 shrink-0 text-gold" />
                  )}
                </button>
                {isOpen && (
                  <div className="border-l-4 border-gold pl-4 pb-5">
                    <p className="text-gray-600 text-[15px] leading-[1.7]">
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
