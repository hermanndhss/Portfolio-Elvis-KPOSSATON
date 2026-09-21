import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import {
  LuCheck,
  LuCamera,
  LuAperture,
  LuMessageSquare,
  LuPencilRuler,
  LuImage,
  LuPackage,
  LuClock,
  LuCompass,
} from 'react-icons/lu';
import Button from '../components/ui/Button';

const Services = () => {
  const { t } = useTranslation();

  const packageKeys = ['portrait', 'mariage', 'corporate'];

  const processSteps = [
    { key: 'step1', Icon: LuMessageSquare },
    { key: 'step2', Icon: LuPencilRuler },
    { key: 'step3', Icon: LuImage },
    { key: 'step4', Icon: LuPackage },
  ];

  return (
    <div className="relative bg-light-bg dark:bg-dark-bg transition-colors overflow-x-hidden">
      
      {/* Filigranes — desktop only */}
      <div className="pointer-events-none absolute inset-0 hidden md:block">
        <LuCamera className="absolute top-[8%] left-[3%] w-24 h-24 text-light-text/[0.04] dark:text-dark-text/[0.05]" />
        <LuAperture className="absolute top-[45%] right-[4%] w-32 h-32 text-light-text/[0.04] dark:text-dark-text/[0.05]" />
        <LuCompass className="absolute bottom-[15%] left-[5%] w-24 h-24 text-light-text/[0.04] dark:text-dark-text/[0.05]" />
      </div>

      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12 py-10 sm:py-16 lg:py-20">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-14 lg:mb-16 max-w-2xl mx-auto"
        >
          <span className="text-[10px] sm:text-xs font-heading uppercase tracking-super-wide text-accent font-semibold block mb-2">
            {t('services.title')}
          </span>
          <h1 className="font-heading text-[1.75rem] sm:text-4xl md:text-5xl lg:text-6xl font-bold text-light-text dark:text-dark-text leading-tight mb-3 sm:mb-4">
            {t('services.subtitle')}
          </h1>
          <p className="text-light-muted dark:text-dark-muted text-sm sm:text-base px-2">
            {t('services.intro')}
          </p>
        </motion.div>

        {/* PACKAGES — 100% uniformes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16 lg:mb-20">
          {packageKeys.map((key, i) => {
            const pkg = t(`services.packages.${key}`, { returnObjects: true });

            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative flex flex-col rounded-2xl p-5 sm:p-6 lg:p-8 bg-light-secondary/60 dark:bg-dark-secondary/60 border border-light-border dark:border-dark-border hover:border-accent transition-all duration-300"
              >
                {/* Nom du package */}
                <h3 className="font-heading font-bold text-xl sm:text-2xl mb-2 text-light-text dark:text-dark-text">
                  {pkg.name}
                </h3>

                {/* Durée */}
                <div className="flex items-center gap-1.5 text-xs mb-4 text-light-muted dark:text-dark-muted">
                  <LuClock className="w-3.5 h-3.5 text-accent" />
                  <span>{pkg.duration}</span>
                </div>

                {/* Prix */}
                <div className="font-heading font-bold text-lg sm:text-xl text-accent mb-5 sm:mb-6">
                  {pkg.price}
                </div>

                {/* Séparateur */}
                <div className="h-px w-full mb-5 bg-light-border dark:bg-dark-border" />

                {/* Inclus */}
                <div className="text-[10px] uppercase tracking-widest font-semibold mb-3 text-accent">
                  {t('services.includes')}
                </div>

                <ul className="space-y-2.5 mb-6 sm:mb-8 flex-1">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <LuCheck className="w-4 h-4 shrink-0 mt-0.5 text-accent" />
                      <span className="text-light-text dark:text-dark-text">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  to="/contact"
                  variant="secondary"
                  hasArrow
                  className="w-full justify-center"
                >
                  {t('services.book')}
                </Button>
              </motion.div>
            );
          })}
        </div>

        {/* PROCESS */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <span className="text-[10px] sm:text-xs font-heading uppercase tracking-super-wide text-accent font-semibold block mb-2">
              {t('services.process_title')}
            </span>
            <h2 className="font-heading text-xl sm:text-2xl lg:text-3xl font-bold text-light-text dark:text-dark-text">
              {t('services.process_subtitle')}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 relative">
            {processSteps.map((step, i) => {
              const { Icon, key } = step;
              return (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="relative p-4 sm:p-6 rounded-xl bg-light-secondary/50 dark:bg-dark-secondary/50 border border-light-border dark:border-dark-border hover:border-accent transition-colors"
                >
                  <span className="absolute -top-3 -right-2 sm:top-3 sm:right-3 sm:relative sm:-top-0 sm:-right-0 font-heading text-3xl sm:text-4xl font-bold text-accent/20 leading-none">
                    0{i + 1}
                  </span>

                  <div className="w-10 h-10 rounded-full bg-accent/10 text-accent flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="font-heading font-bold text-base sm:text-lg text-light-text dark:text-dark-text mb-1.5">
                    {t(`services.process.${key}.title`)}
                  </h3>
                  <p className="text-xs sm:text-sm text-light-muted dark:text-dark-muted leading-relaxed">
                    {t(`services.process.${key}.text`)}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA SUR-MESURE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center p-6 sm:p-10 lg:p-12 rounded-2xl bg-light-secondary/70 dark:bg-dark-secondary/70 border border-light-border dark:border-dark-border"
        >
          <div className="w-12 h-12 rounded-full bg-accent/10 text-accent flex items-center justify-center mx-auto mb-4">
            <LuCompass className="w-6 h-6" />
          </div>
          <h2 className="font-heading text-xl sm:text-2xl lg:text-3xl font-bold text-light-text dark:text-dark-text mb-2">
            {t('services.custom_title')}
          </h2>
          <p className="text-light-muted dark:text-dark-muted text-sm sm:text-base mb-5 sm:mb-6 max-w-md mx-auto">
            {t('services.custom_text')}
          </p>
          <Button to="/contact" variant="filled" hasArrow>
            {t('services.custom_btn')}
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;