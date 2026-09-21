import React from 'react';
import { motion } from 'framer-motion';
import { LuSun, LuMoon } from 'react-icons/lu';
import { useTheme } from '../../context/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label="Changer de thème"
      className="p-2.5 rounded-full border border-light-border dark:border-dark-border hover:border-accent dark:hover:border-accent text-light-text dark:text-dark-text transition-colors duration-300"
    >
      <motion.div
        key={theme}
        initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
        animate={{ rotate: 0, opacity: 1, scale: 1 }}
        exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
        transition={{ duration: 0.25 }}
      >
        {theme === 'dark' ? (
          <LuSun className="w-4 h-4 text-accent" />
        ) : (
          <LuMoon className="w-4 h-4 text-light-text" />
        )}
      </motion.div>
    </button>
  );
};

export default ThemeToggle;