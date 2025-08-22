import React, { useState } from 'react';
import { Header } from './components/Header';
import { LaunchSection } from './components/LaunchSection';
import { Footer } from './components/Footer';
export function App() {
  const [isLaunching, setIsLaunching] = useState(false);
  const handleLaunch = () => {
    setIsLaunching(true);
    // Redirect after animation (2 seconds)
    setTimeout(() => {
      // Replace this URL with the actual official website URL
      window.location.href = 'https://eric-web-gamma.vercel.app/#';
    }, 2000);
  };
  return <div className="flex flex-col min-h-screen w-full bg-gray-900 text-white">
      <Header />
      <main className="flex-grow flex items-center justify-center">
        <LaunchSection onLaunch={handleLaunch} isLaunching={isLaunching} />
      </main>
      <Footer />
    </div>;
}