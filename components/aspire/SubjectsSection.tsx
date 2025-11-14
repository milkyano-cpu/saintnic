import { Section } from './ui/Section';

export function SubjectsSection() {
  const subjects = [
    {
      title: 'English',
      subtitle: 'General, Language, Literature',
    },
    {
      title: 'Mathematics',
      subtitle: 'General, Methods, Specialist',
    },
    {
      title: 'Science',
      subtitle: 'Biology, Chemistry, Physics',
    },
    {
      title: 'Entry',
      subtitle: 'Preparation (SEAL, Scholarship Tests)',
    },
    {
      title: 'Year 7-10',
      subtitle: 'Academic Coaching',
    },
  ];

  return (
    <Section variant="gradient-blue" className="py-12">
      <div className="space-y-6">
        {/* Section Title */}
        <div className="flex flex-col items-center space-y-2">
          <h2 className="text-2xl font-extrabold text-white">
            Subjects We Support
          </h2>
          <div className="flex items-center space-x-1">
            <div className="h-[10px] w-[40px] rounded-full bg-aspire-orange" />
            <div className="h-[10px] w-[40px] rounded-full bg-aspire-orange" />
            <div className="h-[10px] w-[40px] rounded-full bg-white/30" />
            <div className="h-[10px] w-[40px] rounded-full bg-white/30" />
            <div className="h-[10px] w-[40px] rounded-full bg-white/30" />
          </div>
        </div>

        {/* Feature Box with Image */}
        <div className="overflow-hidden rounded-[5px] bg-aspire-orange">
          <div className="p-6 text-center">
            <h3 className="text-2xl font-extrabold leading-6 text-white">
              We tutor students in Years 7–12 across core VCE and academic subjects:
            </h3>
          </div>
          {/* Placeholder for subjects image */}
          <div className="h-[245.8125px] w-full bg-gray-700" />
        </div>

        {/* Subjects List */}
        <div className="space-y-4 pt-4">
          {subjects.map((subject, index) => (
            <div
              key={index}
              className="border border-white p-4 text-center"
            >
              <h4 className="text-2xl font-extrabold leading-6 text-white">
                {subject.title}
              </h4>
              <p className="text-sm leading-6 text-white">
                {subject.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
