import { Section } from './ui/Section';
import { FileText, Tag } from 'lucide-react';

export function AboutSection() {
  return (
    <Section variant="dark-blue" className="py-12">
      <div className="space-y-6">
        {/* Section Title */}
        <div className="flex flex-col items-center space-y-2">
          <h2 className="text-2xl font-extrabold text-white">At Aspire</h2>
          <div className="flex items-center space-x-1">
            <div className="h-[10px] w-[40px] rounded-full bg-aspire-orange" />
            <div className="h-[10px] w-[40px] rounded-full bg-aspire-orange" />
            <div className="h-[10px] w-[40px] rounded-full bg-aspire-orange" />
            <div className="h-[10px] w-[40px] rounded-full bg-white/30" />
            <div className="h-[10px] w-[40px] rounded-full bg-white/30" />
          </div>
        </div>

        {/* Image with gradient overlay */}
        <div className="relative h-[355px] w-full overflow-hidden rounded-[10px]">
          {/* Placeholder for image */}
          <div className="absolute inset-0 bg-gray-600" />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent" />
        </div>

        {/* Content */}
        <div className="space-y-8 pt-4">
          {/* Philosophy Text */}
          <p className="text-center text-sm leading-tight text-aspire-text-dark">
            We believe tutoring should go beyond worksheets. That's why we offer a structured, in-person learning experience tailored to each student. Whether it's English, Maths, Science, or general academic support, we match students with tutors who understand their pace, learning style, and goals.
          </p>

          {/* Feature Badges */}
          <div className="space-y-6">
            {/* No Hidden Fees */}
            <div className="flex flex-col items-center space-y-2">
              <FileText className="h-[45px] w-[45px] text-aspire-blue" />
              <h3 className="text-2xl font-extrabold text-aspire-blue">
                No Hidden Fees
              </h3>
            </div>

            {/* No Confusing Pricing */}
            <div className="flex flex-col items-center space-y-2">
              <Tag className="h-[45px] w-[45px] text-aspire-blue" />
              <h3 className="text-2xl font-extrabold text-aspire-blue">
                No Confusing Pricing
              </h3>
            </div>

            {/* Separator */}
            <div className="mx-auto h-[1px] w-[324px] bg-aspire-blue" />

            {/* Bottom Text */}
            <p className="text-center text-sm text-aspire-text-dark">
              A physical location in Truganina. Aspire is the smarter way to get tutoring that works.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
