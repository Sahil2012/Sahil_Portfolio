import React from 'react';
import { motion } from 'framer-motion';
import { useRecoilValue } from 'recoil';
import { ExternalLink, Github } from 'lucide-react';
import { projects } from '../data/portfolio';
import { themeState } from '../store/atoms';

const Projects: React.FC = () => {
  const theme = useRecoilValue(themeState);
  
  return (
    <motion.div 
      className="space-y-12 max-w-3xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      {projects.map((project, index) => (
        <motion.div
          key={index}
          className={`space-block-4 py-6 px-2 rounded-lg transition-all duration-300 ease-out cursor-pointer group ${
            theme === 'dark' 
              ? 'hover:bg-gray-900/30 border border-transparent hover:border-gray-800/50' 
              : 'hover:bg-gray-50 border border-transparent hover:border-gray-200/50'
          }`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          whileHover={{ x: 10 }}
        >
          <div className="flex items-start justify-between gap-4">
            <h3 className={`text-xl font-medium leading-tight flex-1 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              {project.title}
            </h3>
            <div className="flex items-center gap-2">
              {project.links.map((link, linkIndex) => (
                <motion.a
                  key={linkIndex}
                  href={link.href}
                  className={`flex items-center gap-1 text-sm transition-colors duration-300 ${
                    theme === 'dark' 
                      ? 'text-gray-400 hover:text-white' 
                      : 'text-gray-500 hover:text-gray-900'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.label}
                  {link.label === 'GitHub' ? (
                    <Github size={14} />
                  ) : (
                    <ExternalLink size={14} />
                  )}
                </motion.a>
              ))}
            </div>
          </div>
          
          <p className={`leading-relaxed my-2 ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
          }`}>
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, techIndex) => (
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

export default Projects;