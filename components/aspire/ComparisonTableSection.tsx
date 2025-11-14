import { Section } from './ui/Section';
import { Check, X } from 'lucide-react';

export function ComparisonTableSection() {
  const features = [
    { name: 'In-Person\nTruganina Lessons', aspire: true, others: false },
    { name: 'Flat Monthly Pricing', aspire: true, others: false },
    {
      name: 'Trial Class Before Committing',
      aspire: true,
      others: false,
    },
    {
      name: 'Progress Tracking & Feedback',
      aspire: true,
      others: false,
    },
    { name: 'In-Person\nTruganina Lessons', aspire: true, others: '???' },
    { name: 'In-Person\nTruganina Lessons', aspire: true, others: false },
  ];

  return (
    <Section variant="medium-blue" className="py-12">
      <div className="space-y-8">
        {/* Hero Image with Gradient */}
        <div className="relative h-[400px] w-full overflow-hidden rounded-[10px]">
          {/* Placeholder for image */}
          <div className="absolute inset-0 bg-gray-600" />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-aspire-medium-blue via-aspire-medium-blue/40 to-transparent" />
        </div>

        {/* Title & Table Container */}
        <div className="space-y-6">
          {/* Section Title */}
          <div className="flex flex-col items-center space-y-2">
            <h2 className="text-2xl font-extrabold text-white">
              The Aspire Difference
            </h2>
            <div className="flex items-center space-x-1">
              <div className="h-[10px] w-[40px] rounded-full bg-aspire-orange" />
              <div className="h-[10px] w-[40px] rounded-full bg-white/30" />
              <div className="h-[10px] w-[40px] rounded-full bg-white/30" />
              <div className="h-[10px] w-[40px] rounded-full bg-white/30" />
              <div className="h-[10px] w-[40px] rounded-full bg-white/30" />
            </div>
          </div>

          {/* Table Title */}
          <h3 className="text-center text-2xl font-extrabold text-white">
            What Makes Aspire Different
          </h3>

          {/* Comparison Table */}
          <div className="overflow-hidden">
            {/* Header Row */}
            <div className="grid grid-cols-[150px_109px_109px] border-b border-[#01588d]">
              <div className="border-r border-[#01588d] bg-white p-3">
                <p className="text-left text-sm font-extrabold text-aspire-text-dark">
                  Feature
                </p>
              </div>
              <div className="border-r border-[#01588d] bg-white p-3">
                <p className="text-center text-sm font-extrabold text-aspire-text-dark">
                  Aspire
                  <br />
                  Academics
                </p>
              </div>
              <div className="bg-white p-3">
                <p className="text-center text-sm font-extrabold text-aspire-text-dark">
                  Other Tutoring Options
                </p>
              </div>
            </div>

            {/* Feature Rows */}
            {features.map((feature, index) => (
              <div
                key={index}
                className="grid grid-cols-[150px_109px_109px] border-b border-[#01588d]"
              >
                <div className="border-r border-[#01588d] bg-white p-3">
                  <p className="text-left text-sm font-semibold text-aspire-text-dark">
                    {feature.name}
                  </p>
                </div>
                <div className="flex items-center justify-center border-r border-[#01588d] bg-white p-3">
                  <Check className="h-5 w-5 text-aspire-text-dark" />
                </div>
                <div className="flex items-center justify-center bg-white p-3">
                  {feature.others === false ? (
                    <X className="h-5 w-5 text-aspire-text-dark" />
                  ) : (
                    <span className="text-sm font-semibold text-aspire-text-dark">
                      ???
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
