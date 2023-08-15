"use client"
import { Providers } from '@/redux/provider';
import './globals.css'
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Provider } from 'react-redux';
import { store } from '@/redux/store';


const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Harry Potter',
  description: 'Charcters from the Harry Potter Series',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
      <Provider store={store}>{children}</Provider>
       </body>
    </html>
  )
}
