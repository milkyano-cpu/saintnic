import { Button } from '@/components/ui/button';
import { Section } from './ui/Section';
import { GradientOverlay } from './ui/GradientOverlay';
import Image from 'next/image';

export function HeroSection() {
  return (
    <Section variant="dark-blue" className="relative py-12">
      {/* Background gradient decoration */}
      <div className="absolute left-1/2 top-1/2 h-[532px] w-[532px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-b from-white/10 to-transparent opacity-50" />

      <div className="relative z-10 space-y-6">
        {/* Content Frame */}
        <div className="flex flex-col items-center space-y-8 text-center">
          {/* Headline */}
          <div className="space-y-4 animate-fade-in">
            <h1 className="text-center font-extrabold leading-[40px] text-aspire-orange" style={{ fontSize: '48px' }}>
              Tutoring That Gets Real Results Not Just Homework Help
            </h1>

            {/* Arrow decoration */}
            <div className="mx-auto flex h-[51px] w-[81px] items-center justify-center">
              <svg width="81" height="51" viewBox="0 0 81 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M40.5 51L0 0H81L40.5 51Z" fill="white"/>
              </svg>
            </div>
          </div>

          {/* Subheading */}
          <p className="max-w-[367px] text-center text-2xl font-extrabold leading-[29.4px] text-white animate-slide-up" style={{ fontSize: '24.5px' }}>
            Helping students across all core VCE and high school subjects, right here in Truganina. Book your free trial and meet your future tutor.
          </p>
        </div>

        {/* CTA and Location Info */}
        <div className="flex flex-col items-center space-y-4 pt-8 animate-slide-up">
          <Button
            size="lg"
            className="h-[58px] w-[224px] rounded-md bg-aspire-orange text-lg font-bold text-white hover:bg-aspire-orange/90"
          >
            Book a Free Class
          </Button>

          <p className="max-w-[367px] text-center text-sm text-white">
            Located at 150 Palmers Rd, Truganina. In-person lessons.
            <br />
            No lock-ins.
          </p>
        </div>

        {/* Hero Image */}
        <div className="relative mt-8 h-[280px] w-full overflow-hidden rounded-[5px]">
          <div className="absolute inset-0 bg-gradient-to-t from-aspire-dark-blue via-transparent to-transparent" />
          {/* Placeholder for hero image - will be replaced with actual image */}
          <div className="h-full w-full bg-gray-700" />
        </div>
      </div>
    </Section>
  );
}
