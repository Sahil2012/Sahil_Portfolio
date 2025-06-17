import React from 'react';
import { motion } from 'framer-motion';
import { useRecoilValue } from 'recoil';
import { Calendar, Github, Twitter, Linkedin, Mail } from 'lucide-react';
import { personalInfo, socialLinks } from '../data/portfolio';
import { themeState } from '../store/atoms';

const iconMap = {
  calendar: Calendar,
  github: Github,
  twitter: Twitter,
  linkedin: Linkedin,
  mail: Mail,
};

const Hero: React.FC = () => {
  const theme = useRecoilValue(themeState);
  
  return (
    <motion.section 
      className="max-w-2xl mx-auto text-left"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <motion.h1 
        className={`text-3xl md:text-4xl font-medium mb-6 ${
          theme === 'dark' ? 'text-white' : 'text-gray-900'
        }`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        Hey, I'm {personalInfo.name}
      </motion.h1>
      
      <motion.p 
        className={`text-lg leading-relaxed mb-8 ${
          theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
        }`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        {personalInfo.title}. {personalInfo.description}{' '}
        <span className={`font-medium ${
          theme === 'dark' ? 'text-white' : 'text-gray-900'
        }`}>{personalInfo.projects[0]}</span>.
      </motion.p>

      <motion.div 
        className="flex items-center gap-4 mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        {socialLinks.map((link, index) => {
          const IconComponent = iconMap[link.icon as keyof typeof iconMap];
          return (
            <motion.a
              key={link.name}
              href={link.href}
              className={`p-2 transition-colors duration-300 ${
                theme === 'dark' 
                  ? 'text-gray-400 hover:text-white' 
                  : 'text-gray-500 hover:text-gray-900'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
            >
              {link.name === 'Cal' ? (
                <span className="text-sm font-medium">Cal</span>
              ) : (
                <IconComponent size={18} />
              )}
            </motion.a>
          );
        })}
      </motion.div>
    </motion.section>
  );
};

export default Hero;