'use client';

import Link from 'next/link';
import { useLocalStorage } from 'usehooks-ts';
import { motion } from 'motion/react';
import { usePathname } from 'next/navigation';
import { cn } from '@/utils';

const nav = [
  {
    label: 'Home',
    link: '/',
  },
  {
    label: 'About',
    link: '/about',
  },
  {
    label: 'Projects',
    link: '/projects',
  },
];

export function Header() {
  const pathname = usePathname();
  const [value] = useLocalStorage('done', 0);

  return (
    <motion.nav
      className="absolute bottom-14 left-1/2 -translate-x-1/2"
      initial={{ opacity: 0 }}
      animate={{ opacity: value === 1 ? 1 : 0, transition: { duration: 1 } }}
    >
      <ul className="flex items-center justify-center gap-4">
        {nav.map((n) => (
          <motion.li
            className="p-2 rounded"
            key={n.link}
            whileTap={{
              scale: 1.1,
              transition: { duration: 0.3 },
            }}
          >
            <Link
              className={cn('text-sm font-semibold uppercase', {
                active: pathname === n.link,
              })}
              href={n.link}
            >
              {n.label}
            </Link>
          </motion.li>
        ))}
      </ul>
    </motion.nav>
  );
}

export default Header;
