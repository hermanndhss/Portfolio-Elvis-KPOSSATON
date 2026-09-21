import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import {
  LuEye,
  LuAward,
  LuEar,
  LuHandshake,
  LuCamera,
  LuAperture,
  LuFocus,
} from 'react-icons/lu';
import Button from '../components/ui/Button';
import elvisPortrait from '../assets/images/Elvis1.png';

const About = () => {
  const { t } = useTranslation();

  const values = [
    { key: 'vision', Icon: LuEye },
    { key: 'excellence', Icon: LuAward },
    { key: 'ecoute', Icon: LuEar },
    { key: 'engagement', Icon: LuHandshake },
  ];

  const stats = [
    { value: '8+', label: t('about.experience') },
    { value: '15+', label: t('about.awards') },
    { value: '250+', label: t('about.shoots') },
  ];

  return (
    <div className="relative bg-light-bg dark:bg-dark-bg transition-colors overflow-x-hidden">
      
      {/* Filigranes — cachés sur mobile pour éviter la surcharge */}
      <div className="pointer-events-none absolute inset-0 hidden md:block">
        <LuCamera className="absolute top-[10%] left-[3%] w-24 h-24 text-light-text/[0.04] dark:text-dark-text/[0.05]" />
        <LuAperture className="absolute top-[40%] right-[4%] w-32 h-32 text-light-text/[0.04] dark:text-dark-text/[0.05]" />
        <LuFocus className="absolute bottom-[15%] left-[6%] w-28 h-28 text-light-text/[0.04] dark:text-dark-text/[0.05]" />
      </div>

      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12 py-10 sm:py-16 lg:py-20">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <span className="text-[10px] sm:text-xs font-heading uppercase tracking-super-wide text-accent font-semibold block mb-2">
            {t('about.title')}
          </span>
          <h1 className="font-heading text-[1.75rem] sm:text-4xl md:text-5xl lg:text-6xl font-bold text-light-text dark:text-dark-text leading-tight">
            {t('about.subtitle')}
          </h1>
        </motion.div>

        {/* PORTRAIT + INTRO */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-center mb-12 sm:mb-16 lg:mb-24">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center order-1"
          >
            <div className="relative w-[65%] max-w-[280px] sm:w-full sm:max-w-sm aspect-[3/4]">
              <img
                src={elvisPortrait}
                alt="Elvis Kpossaton"
                className="w-full h-full object-contain object-bottom"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col order-2"
          >
            <p className="text-light-muted dark:text-dark-muted text-sm sm:text-base lg:text-lg leading-relaxed mb-5 sm:mb-6">
              {t('about.intro')}
            </p>

            <h2 className="font-heading text-lg sm:text-xl lg:text-2xl font-bold text-light-text dark:text-dark-text mb-2 sm:mb-3">
              {t('about.journey_title')}
            </h2>
            <p className="text-light-muted dark:text-dark-muted text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
              {t('about.journey_text')}
            </p>

            {/* Stats compactes */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="text-center p-2.5 sm:p-4 rounded-xl bg-light-secondary/60 dark:bg-dark-secondary/60 border border-light-border dark:border-dark-border"
                >
                  <div className="font-heading font-bold text-xl sm:text-2xl lg:text-3xl text-light-text dark:text-dark-text">
                    {s.value}
                  </div>
                  <div className="text-[8px] sm:text-[10px] uppercase tracking-widest text-light-muted dark:text-dark-muted mt-1 font-medium leading-tight">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* VALEURS */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-xl sm:text-2xl lg:text-3xl font-bold text-light-text dark:text-dark-text text-center mb-6 sm:mb-10"
          >
            {t('about.values_title')}
          </motion.h2>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
            {values.map((v, i) => {
              const { Icon } = v;
              return (
                <motion.div
                  key={v.key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="p-3 sm:p-5 lg:p-6 rounded-xl bg-light-secondary/50 dark:bg-dark-secondary/50 border border-light-border dark:border-dark-border hover:border-accent transition-colors"
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-accent/10 text-accent flex items-center justify-center mb-2 sm:mb-3">
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <h3 className="font-heading font-bold text-sm sm:text-base lg:text-lg text-light-text dark:text-dark-text mb-1">
                    {t(`about.values.${v.key}.title`)}
                  </h3>
                  <p className="text-[11px] sm:text-xs lg:text-sm text-light-muted dark:text-dark-muted leading-relaxed">
                    {t(`about.values.${v.key}.text`)}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center p-6 sm:p-10 lg:p-12 rounded-2xl bg-light-secondary/70 dark:bg-dark-secondary/70 border border-light-border dark:border-dark-border"
        >
          <h2 className="font-heading text-xl sm:text-2xl lg:text-3xl font-bold text-light-text dark:text-dark-text mb-2">
            {t('about.cta_title')}
          </h2>
          <p className="text-light-muted dark:text-dark-muted text-sm sm:text-base mb-5 sm:mb-6 max-w-md mx-auto">
            {t('about.cta_text')}
          </p>
          <Button to="/contact" variant="filled" hasArrow>
            {t('nav.contact')}
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default About;