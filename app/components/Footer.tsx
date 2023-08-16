import { selectTheme } from '@/redux/slice/themeSlice';
import React from 'react';

import { useSelector } from 'react-redux';

export const Footer = () => {
  const theme = useSelector(selectTheme);
  return (
    <footer className={`${theme}-footer flex flex-col items-center justify-center mt-5 py-3 bg-gray-800 text-white`}>
      <p>
        jokesapp&copy;{new Date().getFullYear()} || developed by{' '}
        <a
          href="https://github.com/kiptanuiBoaz"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          @kiptanuiBooaz
        </a>
      </p>
    </footer>
  );
};
