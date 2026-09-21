import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { LuGlobe } from 'react-icons/lu';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  // Fermer au clic extérieur
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 p-2 rounded-full border border-light-border dark:border-dark-border hover:border-accent dark:hover:border-accent text-light-text dark:text-dark-text text-xs uppercase font-medium tracking-wider transition-colors duration-300"
        aria-label="Changer de langue"
      >
        <LuGlobe className="w-4 h-4 text-accent" />
        <span className="pr-1">{i18n.language.slice(0, 2)}</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 mt-2 py-1 w-20 bg-light-bg dark:bg-dark-secondary border border-light-border dark:border-dark-border rounded-lg shadow-xl z-50 overflow-hidden"
          >
            <button
              onClick={() => changeLanguage('fr')}
              className={`w-full text-center px-3 py-1.5 text-xs tracking-wider transition-colors duration-200 ${
                i18n.language === 'fr' 
                  ? 'bg-accent/15 text-accent font-bold' 
                  : 'text-light-muted dark:text-dark-muted hover:text-accent'
              }`}
            >
              FR
            </button>
            <button
              onClick={() => changeLanguage('en')}
              className={`w-full text-center px-3 py-1.5 text-xs tracking-wider transition-colors duration-200 ${
                i18n.language === 'en' 
                  ? 'bg-accent/15 text-accent font-bold' 
                  : 'text-light-muted dark:text-dark-muted hover:text-accent'
              }`}
            >
              EN
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageSwitcher;