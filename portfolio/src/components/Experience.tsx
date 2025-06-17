import React from 'react';
import { motion } from 'framer-motion';
import { useRecoilValue } from 'recoil';
import { experiences } from '../data/portfolio';
import { themeState } from '../store/atoms';

const Experience: React.FC = () => {
  const theme = useRecoilValue(themeState);
  
  return (
    <motion.div 
      className="space-y-12 max-w-3xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      {experiences.map((exp, index) => (
        <motion.div
          key={index}
          className={`space-y-4 py-6 px-2 rounded-lg transition-all duration-300 hover:translate-x-5 cursor-pointer ${
            theme === 'dark' 
              ? 'hover:bg-gray-900/30 border border-transparent hover:border-gray-800/50' 
              : 'hover:bg-gray-50 border border-transparent hover:border-gray-200/50'
          }`}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          whileHover={{ x: 10 }}
        >
          <div className="flex items-start justify-between gap-4">
            <h3 className={`text-xl font-medium leading-tight flex-1 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              {exp.title}
            </h3>
            <span className={`text-sm whitespace-nowrap mt-1 ${
              theme === 'dark' ? 'text-gray-500' : 'text-gray-500'
            }`}>
              {exp.period}
            </span>
          </div>
          
          <p className={`leading-relaxed ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
          }`}>
            {exp.description}
          </p>
          
          <div className="flex flex-wrap gap-2">
            {exp.technologies.map((tech, techIndex) => (
              <span
                key={techIndex}
                className={`px-2 py-1 text-xs rounded border ${
                  theme === 'dark' 
                    ? 'text-gray-400 bg-gray-800/50 border-gray-700/50' 
                    : 'text-gray-600 bg-gray-100 border-gray-200'
                }`}
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Experience;