"use-client"
import './globals.css'
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Provider } from 'react-redux';
import { store } from '@/redux/store';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { RootLayoutChildredInterface } from '@/types';



const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Harry Potter',
  description: 'Charcters from the Harry Potter Series',
}

export default function RootLayout({children}:RootLayoutChildredInterface) {

  return (
    <html lang="en">
      <body className={`${inter.className} `}>
        <Provider store={store}>
          <Navbar/>
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  )
}
