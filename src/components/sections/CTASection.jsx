import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Button from '../ui/Button';

const CTASection = () => {
  const { t } = useTranslation();

  return (
    <section className="relative bg-light-bg dark:bg-dark-bg transition-colors duration-300">
      <div className="relative z-10 max-w-[900px] mx-auto px-4 sm:px-8 pt-20 sm:pt-28 pb-20 sm:pb-28 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[10px] sm:text-xs font-heading uppercase tracking-super-wide text-accent font-semibold block mb-4">
            Contact
          </span>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-light-text dark:text-dark-text tracking-tight mb-5 sm:mb-6 leading-[1.15]">
            {t('cta.title')}
          </h2>

          <p className="text-light-muted dark:text-dark-muted text-sm sm:text-base md:text-lg max-w-xl mx-auto mb-8 sm:mb-10 leading-relaxed">
            {t('cta.subtitle')}
          </p>

          <Button to="/contact" variant="filled" hasArrow className="text-sm sm:text-base px-8 py-3.5 shadow-lg shadow-accent/20">
            {t('cta.button')}
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;