import React from 'react';
import { motion } from 'framer-motion';
import { useRecoilValue } from 'recoil';
import { personalInfo } from '../data/portfolio';
import { themeState } from '../store/atoms';

const Footer: React.FC = () => {
  const theme = useRecoilValue(themeState);
  
  return (
    <motion.footer 
      className="text-center pt-16 pb-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 1.2 }}
    >
      <div className={`flex items-center justify-between text-sm max-w-3xl mx-auto ${
        theme === 'dark' ? 'text-gray-500' : 'text-gray-500'
      }`}>
        <span>{personalInfo.website}</span>
        <span>Built with React</span>
      </div>
    </motion.footer>
  );
};

export default Footer;