import { Section } from './ui/Section';
import { NumberedBadge } from './ui/NumberedBadge';

export function HowItWorksSection() {
  const steps = [
    {
      number: 1,
      title: 'Book Your Free Trial',
      description: "We'll get in touch to match you with the right tutor.",
    },
    {
      number: 2,
      title: 'Meet Your Tutor in Person',
      description:
        'Attend a 1-on-1 session at our Truganina centre. No pressure.',
    },
    {
      number: 3,
      title: 'Start Your Learning Plan',
      description: "If it's a good fit, we build a schedule around your goals.",
    },
  ];

  return (
    <Section variant="medium-blue" className="bg-[#01588d] py-12">
      <div className="space-y-6">
        {/* Section Title */}
        <div className="flex flex-col items-center space-y-2">
          <h2 className="text-2xl font-extrabold text-white">
            Here's How It Works
          </h2>
          <div className="flex items-center space-x-1">
            <div className="h-[10px] w-[40px] rounded-full bg-aspire-orange" />
            <div className="h-[10px] w-[40px] rounded-full bg-white/30" />
            <div className="h-[10px] w-[40px] rounded-full bg-white/30" />
            <div className="h-[10px] w-[40px] rounded-full bg-white/30" />
            <div className="h-[10px] w-[40px] rounded-full bg-white/30" />
          </div>
        </div>

        {/* Steps */}
        <div className="space-y-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className="flex items-start gap-4 rounded-[10px] bg-white p-4"
            >
              <NumberedBadge number={step.number} className="mt-1 flex-shrink-0" />
              <div className="flex-1 space-y-2">
                <h3 className="text-center text-sm font-bold leading-tight text-aspire-blue">
                  {step.title}
                </h3>
                <p className="text-center text-sm leading-[12px] text-aspire-text-dark">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
