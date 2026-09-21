import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { LuCamera, LuAward, LuUsers, LuClock } from 'react-icons/lu';

// Composant de compteur animé à CHAQUE passage
const AnimatedCounter = ({ value, duration = 2 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  
  // once: false = re-déclenche l'animation à chaque fois que la section entre dans l'écran
  const isInView = useInView(ref, { once: false, amount: 0.4 });

  const numericValue = parseInt(value.replace(/[^0-9]/g, ''), 10) || 0;
  const suffix = value.replace(/[0-9]/g, '');

  useEffect(() => {
    let animationFrameId;

    if (isInView) {
      let startTimestamp = null;
      
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
        
        // Easing out fluide
        const easeOutProgress = 1 - Math.pow(1 - progress, 3);
        setCount(Math.floor(easeOutProgress * numericValue));

        if (progress < 1) {
          animationFrameId = window.requestAnimationFrame(step);
        } else {
          setCount(numericValue);
        }
      };

      animationFrameId = window.requestAnimationFrame(step);
    } else {
      // Remet le compteur à 0 dès qu'on s'éloigne de la section
      setCount(0);
    }

    return () => {
      if (animationFrameId) window.cancelAnimationFrame(animationFrameId);
    };
  }, [isInView, numericValue, duration]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
};

const StatsSection = () => {
  const { t } = useTranslation();

  const stats = [
    { id: 1, value: '8+', label: t('stats.years'), icon: LuClock },
    { id: 2, value: '250+', label: t('stats.projects'), icon: LuCamera },
    { id: 3, value: '15+', label: t('stats.awards'), icon: LuAward },
    { id: 4, value: '100%', label: t('stats.satisfaction'), icon: LuUsers },
  ];

  return (
    <section className="py-14 sm:py-20 px-4 sm:px-8 md:px-12 max-w-[1400px] mx-auto border-t border-b border-light-border/60 dark:border-dark-border/60 transition-colors duration-300">
      
      {/* En-tête */}
      <div className="text-center mb-12 sm:mb-16">
        <span className="text-[11px] font-heading uppercase tracking-super-wide text-accent font-semibold block mb-3">
          {t('stats.title')}
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-light-text dark:text-dark-text tracking-tight">
          {t('stats.subtitle')}
        </h2>
      </div>

      {/* Grille des chiffres */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 sm:p-8 rounded-2xl bg-light-secondary/50 dark:bg-dark-secondary/50 border border-light-border dark:border-dark-border flex flex-col items-center text-center group hover:border-accent dark:hover:border-accent transition-colors duration-300"
            >
              <div className="p-3 rounded-full bg-accent/10 text-accent mb-4 group-hover:scale-110 transition-transform duration-300">
                <Icon className="w-5 h-5" />
              </div>
              
              <span className="font-heading text-4xl sm:text-5xl font-bold text-light-text dark:text-dark-text mb-2 tracking-tight">
                <AnimatedCounter value={stat.value} duration={2} />
              </span>
              
              <span className="text-[11px] text-light-muted dark:text-dark-muted uppercase tracking-widest font-semibold">
                {stat.label}
              </span>
            </motion.div>
          );
        })}
      </div>

    </section>
  );
};

export default StatsSection;