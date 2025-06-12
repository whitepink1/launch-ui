'use client'
import { usePathname, useRouter } from 'next/navigation'

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();

  const changeLanguage = (lang) => {
    const segments = pathname.split('/');
    segments[1] = lang;
    const newPath = segments.join('/');
    router.push(newPath);
  }

  return (
    <div className="flex gap-2">
      {pathname.split('/')[1] === 'en' ? 
        <button className="font-paragraph-sm dark:bg-white/15 bg-black/10 py-2.5 px-3 rounded-lg" onClick={() => changeLanguage('ua')}>UA</button>
      :
        <button className="font-paragraph-sm dark:bg-white/15 bg-black/10 py-2.5 px-3 rounded-lg" onClick={() => changeLanguage('en')}>EN</button>
      }
    </div>
  )
}