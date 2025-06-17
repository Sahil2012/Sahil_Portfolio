import React from 'react';
import { motion } from 'framer-motion';
import { useRecoilValue } from 'recoil';
import { skills } from '../data/portfolio';
import { themeState } from '../store/atoms';

const SkillsGrid: React.FC = () => {
  const theme = useRecoilValue(themeState);
  
  return (
    <motion.div 
      className="grid grid-cols-5 gap-8 max-w-2xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      {skills.map((skill, index) => (
        <motion.div
          key={skill.name}
          className="flex flex-col items-center gap-3 group cursor-pointer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.05 }}
          
        >
           <motion.div className={`w-12 h-12 flex items-center justify-center transition-all duration-300 ease-out`} whileHover={{scale:1.5}}>
            <img 
              src={skill.icon} 
              alt={skill.name}
              className="w-6 h-6 object-contain"
            />
          </motion.div>
          <span className={`text-sm font-medium transition-colors duration-300 ${
            theme === 'dark' 
              ? 'text-gray-400 group-hover:text-gray-300' 
              : 'text-gray-600 group-hover:text-gray-900'
          }`}>
            {skill.name}
          </span>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default SkillsGrid;