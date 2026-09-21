import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Button from '../ui/Button';

const PhilosophySection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 sm:py-28 px-4 sm:px-8 md:px-12 max-w-[1400px] mx-auto overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        
        {/* Photo Gauche */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 relative"
        >
          <div className="aspect-[4/5] w-full overflow-hidden rounded-2xl">
            <img 
              src="https://images.unsplash.com/photo-1554046920-90dc5823c656?w=800&q=80" 
              alt="ELVIS KPOSSATON en action" 
              className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
          {/* Carré déco derrière l'image */}
          <div className="absolute -bottom-6 -right-6 w-2/3 h-2/3 border-2 border-accent rounded-2xl -z-10 hidden sm:block"></div>
        </motion.div>

        {/* Texte Droite */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 flex flex-col items-start"
        >
          <span className="text-xs font-heading uppercase tracking-super-wide text-accent font-semibold mb-4">
            {t('philosophy.title')}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-light-text dark:text-dark-text mb-8 leading-tight">
            Capturer l'invisible,<br /> sublimer l'instant.
          </h2>
          <p className="text-light-muted dark:text-dark-muted text-base md:text-lg leading-relaxed mb-10 text-justify">
            {t('philosophy.text')}
          </p>
          <Button to="/about" variant="secondary" hasArrow>
            {t('philosophy.btn')}
          </Button>
        </motion.div>

      </div>
    </section>
  );
};

export default PhilosophySection;