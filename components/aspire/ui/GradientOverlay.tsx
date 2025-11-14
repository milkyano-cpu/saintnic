import { cn } from '@/lib/utils';

interface GradientOverlayProps {
  children?: React.ReactNode;
  className?: string;
  gradient?: 'bottom-to-top' | 'top-to-bottom' | 'center';
}

export function GradientOverlay({
  children,
  className,
  gradient = 'bottom-to-top',
}: GradientOverlayProps) {
  const gradientClasses = {
    'bottom-to-top':
      'bg-gradient-to-t from-white via-white/60 to-transparent',
    'top-to-bottom':
      'bg-gradient-to-b from-aspire-medium-blue/80 via-aspire-medium-blue/40 to-transparent',
    center: 'bg-gradient-to-b from-aspire-medium-blue to-aspire-dark-blue',
  };

  return (
    <div className={cn('absolute inset-0', gradientClasses[gradient], className)}>
      {children}
    </div>
  );
}
