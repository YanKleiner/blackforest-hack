import Link from 'next/link';

import { AuroraText } from '@/components/magicui/aurora-text';
import { cn } from '@/lib/utils';

type LogoProps = {
  size?: 'sm' | 'md' | 'lg';
};

export default function Logo({ size = 'md' }: LogoProps) {
  const sizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-5xl',
  };

  return (
    <Link
      href='/'
      className={cn(
        'flex items-center self-center font-bold',
        sizeClasses[size]
      )}>
      <span className='text-primary'>Prizm</span>
      <AuroraText>AI</AuroraText>
    </Link>
  );
}
