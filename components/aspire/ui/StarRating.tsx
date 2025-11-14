import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StarRatingProps {
  rating: number;
  maxRating?: number;
  size?: number;
  className?: string;
}

export function StarRating({
  rating,
  maxRating = 5,
  size = 24,
  className,
}: StarRatingProps) {
  return (
    <div className={cn('flex items-center gap-1', className)}>
      {Array.from({ length: maxRating }).map((_, index) => {
        const isFilled = index < rating;
        return (
          <Star
            key={index}
            size={size}
            className={cn(
              isFilled
                ? 'fill-aspire-orange stroke-aspire-orange'
                : 'fill-gray-300 stroke-gray-300'
            )}
          />
        );
      })}
    </div>
  );
}
