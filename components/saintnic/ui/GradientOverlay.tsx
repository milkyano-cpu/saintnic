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
      'bg-gradient-to-b from-saintnic-medium-blue/80 via-saintnic-medium-blue/40 to-transparent',
    center: 'bg-gradient-to-b from-saintnic-medium-blue to-saintnic-dark-blue',
  };

  return (
    <div className={cn('absolute inset-0', gradientClasses[gradient], className)}>
      {children}
    </div>
  );
}
