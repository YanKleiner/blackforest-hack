import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from 'next-themes';

type LogoProps = {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'header' | 'body'; // Add a variant prop
};

export default function Logo({ size = 'md', variant = 'body' }: LogoProps) {
  const { theme } = useTheme();

  const sizeClasses = {
    sm: { width: 100, height: 25 },
    md: { width: 150, height: 38 },
    lg: { width: 500, height: 75 },
  };

  const logoSrc =
    variant === 'header'
      ? '/logo.png' // Use "logo.png" for the header
      : theme === 'dark'
      ? '/PrizmAi_w.png'
      : '/PrizmAi_b.png'; // Use the full logo for the body

  return (
    <Link href='/' className='flex items-center self-center'>
      <Image
        src={logoSrc}
        alt='Logo'
        width={sizeClasses[size].width}
        height={sizeClasses[size].height}
      />
    </Link>
  );
}