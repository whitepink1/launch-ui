'use client';

import { useTheme } from 'next-themes';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="px-4 py-2.5 dark:bg-white/9 bg-black/9 rounded-xl"
    >
      {theme === 'dark' ? 
      <Image 
        src="/icons/sun.png"
        width={24}
        height={24}
        alt="Light theme toggler"/> 
      : 
      <Image 
        src="/icons/moon.png"
        width={24}
        height={24}
        alt="Light theme toggler"/>}
    </button>
  );
}