import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import {
  LuChevronDown,
  LuCamera,
  LuAperture,
  LuFocus,
  LuImage,
  LuVideo,
} from 'react-icons/lu';

import elvisPortrait from '../../assets/images/Elvis1.png';

const floatingObjects = [
  { Icon: LuCamera, size: 56, className: 'top-[8%] left-[3%]', duration: 18, delay: 0 },
  { Icon: LuAperture, size: 72, className: 'top-[12%] right-[2%]', duration: 22, delay: 1.5 },
  { Icon: LuFocus, size: 48, className: 'bottom-[18%] left-[4%]', duration: 20, delay: 3 },
  { Icon: LuImage, size: 40, className: 'top-[42%] left-[1%]', duration: 16, delay: 2 },
  { Icon: LuVideo, size: 52, className: 'bottom-[14%] right-[3%]', duration: 24, delay: 1 },
  { Icon: LuAperture, size: 40, className: 'bottom-[36%] right-[8%]', duration: 19, delay: 2.5 },
];

const HeroSection = () => {
  const { t } = useTranslation();

  const scrollToNext = () => {
    const el = document.getElementById('univers');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      className="
        relative flex flex-col items-center
        min-h-[calc(100dvh-4.25rem)]
        h-[calc(100dvh-4.25rem)]
        max-h-[calc(100dvh-4.25rem)]
        lg:min-h-[calc(100dvh-5rem)]
        lg:h-[calc(100dvh-5rem)]
        lg:max-h-[calc(100dvh-5rem)]
        px-3
        bg-light-bg dark:bg-dark-bg
        transition-colors duration-300
        overflow-hidden
      "
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {floatingObjects.map((obj, i) => {
          const { Icon, size, className, duration, delay } = obj;
          return (
            <motion.div
              key={i}
              className={`absolute text-light-text/[0.05] dark:text-dark-text/[0.07] ${className}`}
              animate={{
                y: [0, -14, 6, 0],
                x: [0, 8, -5, 0],
                rotate: [0, 10, -6, 0],
              }}
              transition={{ duration, delay, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Icon style={{ width: size, height: size }} strokeWidth={1.2} />
            </motion.div>
          );
        })}
      </div>

      <div className="relative z-10 flex flex-col items-center w-full h-full min-h-0">

        {/* HAUT */}
        <div className="shrink-0 flex flex-col items-center pt-10 sm:pt-8 md:pt-5 lg:pt-4">
          <p className="font-heading text-[10px] tracking-[0.3em] uppercase text-light-muted dark:text-dark-muted mb-2">
            {t('hero.greeting')}
          </p>
          <h1 className="font-heading font-bold tracking-tight text-center text-light-text dark:text-dark-text px-2 leading-[1.1]">
            <span className="block text-[2.35rem] sm:text-4xl md:text-5xl lg:text-6xl">
              ELVIS
            </span>
            <span className="block text-[2.35rem] sm:text-4xl md:text-5xl lg:text-6xl mt-1">
              KPOSSATON
            </span>
          </h1>
        </div>

        {/*
          PHOTO + RÔLE collés sur mobile (plus de flex-1 qui creusait le trou)
          Sur sm+ : photo reprend flex-1 / centrage desktop
        */}
        <div className="w-full flex flex-col items-center mt-2 sm:flex-1 sm:min-h-0 sm:justify-center sm:mt-0 lg:py-4">
          <div
            className="
              relative shrink-0
              w-[82vw] max-w-[320px]
              h-[50dvh] max-h-[56dvh]
              sm:w-52 sm:h-64 sm:max-h-none
              md:w-60 md:h-80
              lg:w-64 lg:h-[20rem] lg:max-h-[20rem]
            "
          >
            <img
              src={elvisPortrait}
              alt="Elvis Kpossaton"
              className="w-full h-full object-contain object-top select-none pointer-events-none"
              draggable={false}
            />
          </div>

          {/* Rôle juste sous la photo sur mobile (trait bleu) */}
          <div className="flex flex-col items-center gap-2 mt-16 sm:mt-5 lg:mt-6 w-full shrink-0">
            <p className="font-heading text-[10px] lg:text-xs tracking-super-wide uppercase text-center text-light-text dark:text-dark-text font-medium w-full">
              {t('hero.role')}
            </p>
            <button
              onClick={scrollToNext}
              className="text-accent mx-auto"
              aria-label={t('hero.scroll')}
            >
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <LuChevronDown className="w-5 h-5" />
              </motion.div>
            </button>
          </div>
        </div>

        {/* Espace restant en bas sur mobile uniquement (sous le rôle) */}
        <div className="flex-1 sm:hidden min-h-0" aria-hidden="true" />

      </div>
    </section>
  );
};

export default HeroSection;