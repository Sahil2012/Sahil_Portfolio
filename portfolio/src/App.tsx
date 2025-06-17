import React from 'react';
import { RecoilRoot, useRecoilValue } from 'recoil';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import Navigation from './components/Navigation';
import SkillsGrid from './components/SkillsGrid';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Footer from './components/Footer';
import { activeTabState, themeState } from './store/atoms';

const ContentRenderer: React.FC = () => {
  const activeTab = useRecoilValue(activeTabState);
  
  const renderContent = () => {
    switch (activeTab) {
      case 'Experience':
        return <Experience />;
      case 'Tools':
        return <SkillsGrid />;
      case 'Projects':
      default:
        return <Projects />;
    }
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4 }}
      >
        {renderContent()}
      </motion.div>
    </AnimatePresence>
  );
};

const AppContent: React.FC = () => {
  const theme = useRecoilValue(themeState);
  
  return (
    <div className={`min-h-screen transition-colors duration-500 ${
      theme === 'dark' 
        ? 'bg-[#0a0a0a] text-white' 
        : 'bg-white text-gray-900'
    }`}>
      <Header />
      
      <main className="container mx-auto px-6 py-16 max-w-2xl">
        <Hero />
        <Navigation />
        <ContentRenderer />
        <Footer />
      </main>
    </div>
  );
};

function App() {
  return (
    <RecoilRoot>
      <AppContent />
    </RecoilRoot>
  );
}

export default App;