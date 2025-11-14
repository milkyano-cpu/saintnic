import { Section } from './ui/Section';

export function WhyAspireSection() {
  const benefits = [
    {
      title: 'In-Person Learning',
      description: 'Real classrooms = better focus, real mentorship.',
    },
    {
      title: 'Simple Pricing',
      description: 'One flat rate, no surprises.',
    },
    {
      title: 'Custom Learning Paths',
      description: 'Tailored plans that grow with the student.',
    },
  ];

  return (
    <Section variant="gradient-blue" className="py-12">
      <div className="space-y-6">
        {/* Section Title */}
        <div className="flex flex-col items-center space-y-2">
          <h2 className="text-2xl font-extrabold text-white">Why Aspire?</h2>
          <div className="flex items-center space-x-1">
            <div className="h-[10px] w-[40px] rounded-full bg-aspire-orange" />
            <div className="h-[10px] w-[40px] rounded-full bg-white/30" />
            <div className="h-[10px] w-[40px] rounded-full bg-white/30" />
            <div className="h-[10px] w-[40px] rounded-full bg-white/30" />
            <div className="h-[10px] w-[40px] rounded-full bg-white/30" />
          </div>
        </div>

        {/* Content Box */}
        <div className="overflow-hidden rounded-[5px]">
          {/* Header */}
          <div className="bg-aspire-blue p-6">
            <h3 className="text-center text-2xl font-extrabold leading-6 text-white">
              Why Parents and Students Choose Aspire
            </h3>
          </div>

          {/* Benefits List */}
          <div className="space-y-6 bg-white p-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <p className="text-sm font-extrabold leading-5 text-aspire-blue">
                  {benefit.title} {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
