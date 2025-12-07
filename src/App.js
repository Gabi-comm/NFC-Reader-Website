import React, { useEffect, useState } from 'react';
import logoVideo from './logo.mp4';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Auth from './Auth';
import Register from './Register';
import Officers from './Officers';
import Success from './Success';

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [splashFadeOut, setSplashFadeOut] = useState(false);

  useEffect(() => {

    const fadeOutTimer = setTimeout(() => setSplashFadeOut(true), 1800);
    const hideTimer = setTimeout(() => setShowSplash(false), 2400);
    return () => {
      clearTimeout(fadeOutTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <div className="App app-gradient">
      {showSplash ? (
        <div className={`splash ${splashFadeOut ? 'fade-out' : 'fade-in'}`}>
          <video
            className="App-logo"
            src={logoVideo}
            autoPlay
            muted
            loop
            playsInline
            aria-label="logo video"
          />
          <div className="splash-text">Welcome to M.O.A.B.</div>
        </div>
      ) : (
        <main className="app-main">
          <Routes>
            <Route path="/" element={<Auth />} />
            <Route path="/Success" element={<Success />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/Officer" element={<Officers />} />
          </Routes>
        </main>
      )}
    </div>
  );
}

export default App;
