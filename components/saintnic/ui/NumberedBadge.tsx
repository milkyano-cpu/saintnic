import { cn } from '@/lib/utils';

interface NumberedBadgeProps {
  number: number;
  className?: string;
}

export function NumberedBadge({ number, className }: NumberedBadgeProps) {
  return (
    <div
      className={cn(
        'flex h-[26px] w-[26px] items-center justify-center rounded-full bg-saintnic-orange text-white',
        className
      )}
    >
      <span className="text-sm font-bold leading-none">{number}</span>
    </div>
  );
}
