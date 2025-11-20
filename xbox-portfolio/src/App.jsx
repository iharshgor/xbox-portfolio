import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import UserSelect from './components/UserSelect';
import StartupAnimation from './components/StartupAnimation';
import GamesLibrary from './components/GamesLibrary';
import Achievements from './components/Achievements';
import AboutConsole from './components/AboutConsole';
import './styles/global.scss';

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [showStartup, setShowStartup] = useState(true);

  const handleLogin = (user) => {
    setCurrentUser(user);
    setIsLoggedIn(true);
  };

  // Simple router for now
  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <Dashboard />;
      case 'projects':
        return <GamesLibrary />;
      case 'skills':
        return <Achievements />;
      case 'about':
        return <AboutConsole />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="app-container">
      <AnimatePresence>
        {showStartup && (
          <StartupAnimation onComplete={() => setShowStartup(false)} />
        )}
      </AnimatePresence>

      {!showStartup && (
        <AnimatePresence>
          {!isLoggedIn && (
            <UserSelect onLogin={handleLogin} />
          )}
        </AnimatePresence>
      )}

      {isLoggedIn && (
        <>
          <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
          <main className="main-content scroll-container">
            <section id="home">
              <Dashboard />
            </section>
            <section id="projects">
              <GamesLibrary />
            </section>
            <section id="skills">
              <Achievements />
            </section>
            <section id="about">
              <AboutConsole />
            </section>
          </main>
        </>
      )}
    </div>
  );
}

export default App;
