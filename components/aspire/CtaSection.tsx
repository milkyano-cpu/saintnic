import { Button } from '@/components/ui/button';
import { Section } from './ui/Section';

interface CtaSectionProps {
  title: string;
  description?: string;
  buttonText?: string;
}

export function CtaSection({
  title,
  description,
  buttonText = 'Book a Free Class',
}: CtaSectionProps) {
  return (
    <Section variant="dark-blue" className="py-12">
      <div className="flex flex-col items-center space-y-6 text-center">
        <h2 className="text-2xl font-bold leading-tight text-white">
          {title}
        </h2>

        {description && (
          <p className="max-w-[278px] text-center text-sm leading-[12px] text-white">
            {description}
          </p>
        )}

        <Button
          size="lg"
          className="h-[58px] w-[224px] rounded-md bg-aspire-orange text-lg font-bold text-white hover:bg-aspire-orange/90"
        >
          {buttonText}
        </Button>
      </div>
    </Section>
  );
}
