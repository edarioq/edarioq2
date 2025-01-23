'use client';

import { useState } from 'react';

const text = ['I', 'am', 'a', 'Software', 'Developer'];

export default function Home() {
  const [clicked, setClicked] = useState(0);

  const handleClick = () => {
    setClicked((prev) => prev + 1);
  };

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-slate-800 text-white">
      <h1 className="mb-4 text-5xl font-bold leading-[1.4]">
        Hi, I'm{' '}
        <button className="underline" onClick={handleClick}>
          Edgar
        </button>
      </h1>
      <p className="text-4xl">{text[clicked]}</p>
    </div>
  );
}
