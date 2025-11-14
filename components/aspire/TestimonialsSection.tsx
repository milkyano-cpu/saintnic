import { Section } from './ui/Section';
import { StarRating } from './ui/StarRating';

export function TestimonialsSection() {
  return (
    <Section variant="white" className="py-12">
      <div className="space-y-6">
        {/* Section Title */}
        <div className="flex flex-col items-center space-y-2">
          <h2 className="text-2xl font-extrabold text-aspire-blue">
            Testimonials
          </h2>
          <div className="flex items-center space-x-1">
            <div className="h-[10px] w-[40px] rounded-full bg-aspire-orange" />
            <div className="h-[10px] w-[40px] rounded-full bg-white/30" />
            <div className="h-[10px] w-[40px] rounded-full bg-white/30" />
            <div className="h-[10px] w-[40px] rounded-full bg-white/30" />
            <div className="h-[10px] w-[40px] rounded-full bg-white/30" />
          </div>
        </div>

        {/* Testimonial Card */}
        <div className="relative">
          {/* Left decoration circle */}
          <div className="absolute left-0 top-1/2 h-[27px] w-[27px] -translate-y-1/2 rounded-full border border-gray-300" />

          {/* Main card */}
          <div className="mx-10 rounded-[20px] border border-gray-300 bg-white p-6">
            <div className="space-y-4">
              {/* Name */}
              <p className="text-center text-sm font-extrabold text-black">
                Parent of Year 10 student
              </p>

              {/* Star Rating */}
              <StarRating rating={4} className="justify-center" />

              {/* Quote */}
              <p className="text-center text-sm leading-[14px] text-black">
                My son started actually enjoying his Maths sessions. Big shift
                from last year's struggles
              </p>
            </div>
          </div>

          {/* Right decoration circle */}
          <div className="absolute right-0 top-1/2 h-[27px] w-[27px] -translate-y-1/2 rounded-full border border-aspire-blue" />
        </div>

        {/* Rating footer */}
        <p className="text-center text-sm text-gray-400">
          Rated 4.9/5 by local parents
        </p>
      </div>
    </Section>
  );
}
