import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Journey from './components/Journey';
import Expertise from './components/Expertise';
import Achievements from './components/Achievements';
import Connect from './components/Connect';

function App() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 overflow-hidden">
      {/* Starfield Background */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] bg-repeat opacity-40 pointer-events-none z-0" />
      <Navigation />
      <Hero />
      <Journey />
      <Expertise />
      <Achievements />
      <Connect />
    </div>
  );
}

export default App;