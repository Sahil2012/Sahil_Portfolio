import React from 'react';
import { motion } from 'framer-motion';
import { useRecoilState, useRecoilValue } from 'recoil';
import { Sun, Moon } from 'lucide-react';
import { themeState } from '../store/atoms';

const Header: React.FC = () => {
  const [theme, setTheme] = useRecoilState(themeState);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <motion.header 
      className="fixed top-0 right-0 z-50 p-8"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.button
        onClick={toggleTheme}
        className={`p-2 rounded-full backdrop-blur-sm border transition-all duration-300 ${
          theme === 'dark'
            ? 'bg-gray-800/50 border-gray-700/50 text-gray-300 hover:text-white hover:bg-gray-700/50'
            : 'bg-gray-100/80 border-gray-200/50 text-gray-600 hover:text-gray-900 hover:bg-gray-200/80'
        }`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
      </motion.button>
    </motion.header>
  );
};

export default Header;