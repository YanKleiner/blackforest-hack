import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from 'next-themes';

type LogoProps = {
  size?: 'sm' | 'md' | 'lg';
};

export default function Logo({ size = 'md' }: LogoProps) {
  const { theme } = useTheme();

  const sizeClasses = {
    sm: { width: 100, height: 25 },
    md: { width: 150, height: 38 },
    lg: { width: 500, height: 75 },
  };

  return (
    <Link href='/' className='flex items-center self-center'>
      <Image
        src={theme === 'dark' ? '/PrizmAi_w.png' : '/PrizmAi_b.png'}
        alt='PrizmAi Logo'
        width={sizeClasses[size].width}
        height={sizeClasses[size].height}
      />
    </Link>
  );
}
