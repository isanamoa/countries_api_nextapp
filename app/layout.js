'use client';
import '@/styles/globals.css';
import Head from './head';
import Header from './header/page';
import React, { useState } from 'react';

export let darkModeContext = React.createContext();

export default function RootLayout({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const mode =()=> {
    setDarkMode(prev => !prev);
  }
  
  return (
    <html lang="en">
      <Head title='Countries API App' icons='./favicon.ico'/>
      <body>
        <darkModeContext.Provider value={{darkMode, mode}}>
          <div className={`relative  min-h-screen font-nunitoSan pt-10 ${darkMode ? 'bg-[#202C36]' : 'bg-gray-100'}`}>
            <Header />
            <main className="static mt-24 w-full px-5 md:px-20">
              {children}
            </main>
          </div>
        </darkModeContext.Provider>
      </body>
    </html>
  )
}
