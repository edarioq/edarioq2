'use client';

import { cn } from '@/utils';
import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { useLocalStorage } from 'usehooks-ts';

const textArr = ['A', 'Software', 'Developer'];

export default function Home() {
  const [clicked, setClicked] = useState(0);
  const [shownText, setShownText] = useState<string[]>([]);
  const [value, setValue] = useLocalStorage('done', 0);

  const handleClick = () => {
    setClicked((prev) => prev + 1);

    if (shownText.length < textArr.length) {
      shownText.push(textArr[clicked]);
    }

    if (clicked === textArr.length) {
      setValue(1);
    }
  };

  useEffect(() => {
    if (value === 1) {
      setClicked(textArr.length + 1);
      setShownText(textArr);
    }
    return () => {};
  }, [value]);

  return (
    <motion.div
      layout
      className="flex h-screen flex-col items-center justify-center"
    >
      <motion.h1
        className="mb-4 text-center text-5xl font-bold leading-[1.4]"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { duration: clicked <= textArr.length ? 0.1 : 1 },
        }}
      >
        Hi, I'm{' '}
        <motion.button
          className={cn('inline-flex underline-offset-8', {
            underline: clicked <= textArr.length,
            'pointer-events-none': clicked > textArr.length,
          })}
          onClick={handleClick}
          whileHover={{
            scale: clicked <= textArr.length ? 1.1 : 1,
            transition: { duration: 0.3 },
          }}
        >
          Edgar
        </motion.button>
      </motion.h1>
      <p className="flex min-h-10 flex-wrap justify-center px-10 text-4xl leading-[1.4]">
        {shownText.map((text, i) => (
          <motion.span
            className="mr-4"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { duration: clicked <= textArr.length ? 0.1 : 1 },
            }}
            key={i}
          >
            {text}
          </motion.span>
        ))}
      </p>
    </motion.div>
  );
}
