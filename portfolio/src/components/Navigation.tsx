import React from 'react';
import { motion } from 'framer-motion';
import { useRecoilState, useRecoilValue } from 'recoil';
import { activeTabState, themeState } from '../store/atoms';

const tabs = ['Projects', 'Experience', 'Tools'] as const;

const Navigation: React.FC = () => {
  const [activeTab, setActiveTab] = useRecoilState(activeTabState);
  const theme = useRecoilValue(themeState);

  return (
    <motion.nav 
      className="flex gap-8 mb-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 1.0 }}
    >
      {tabs.map((tab, index) => (
        <motion.button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`text-lg font-medium transition-colors duration-300 relative ${
            activeTab === tab 
              ? (theme === 'dark' ? 'text-white' : 'text-gray-900')
              : (theme === 'dark' ? 'text-gray-500 hover:text-gray-300' : 'text-gray-500 hover:text-gray-700')
          }`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.0 + index * 0.1 }}
        >
          {tab}
          {activeTab === tab && (
            <motion.div
              className={`absolute -bottom-1 left-0 right-0 h-0.5 rounded-full ${
                theme === 'dark' ? 'bg-white' : 'bg-gray-900'
              }`}
              layoutId="activeTab"
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
        </motion.button>
      ))}
    </motion.nav>
  );
};

export default Navigation;