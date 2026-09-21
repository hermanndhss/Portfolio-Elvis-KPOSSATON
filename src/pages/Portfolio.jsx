import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import {
  LuPlay,
  LuX,
  LuChevronLeft,
  LuChevronRight,
  LuCamera,
  LuImages,
} from 'react-icons/lu';
import portfolioData from '../data/portfolio';

const checkIsVideo = (item, mediaUrl) => {
  if (typeof mediaUrl === 'object' && mediaUrl?.type === 'video') return true;
  if (typeof mediaUrl === 'string' && (mediaUrl.endsWith('.mp4') || mediaUrl.includes('.mov') || mediaUrl.includes('video'))) {
    return true;
  }
  return item.type === 'video';
};

const Portfolio = () => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);

  const categories = ['all', ...Array.from(new Set(portfolioData.map((item) => item.category)))];

  const filteredData =
    activeCategory === 'all'
      ? portfolioData
      : portfolioData.filter((item) => item.category === activeCategory);

  const openAlbum = (project) => {
    setSelectedProject(project);
    setCurrentMediaIndex(0);
  };

  const closeLightbox = () => {
    setSelectedProject(null);
    setCurrentMediaIndex(0);
  };

  const prevPhoto = (e) => {
    e?.stopPropagation?.();
    if (!selectedProject) return;
    setCurrentMediaIndex((prev) =>
      prev === 0 ? selectedProject.media.length - 1 : prev - 1
    );
  };

  const nextPhoto = (e) => {
    e?.stopPropagation?.();
    if (!selectedProject) return;
    setCurrentMediaIndex((prev) =>
      prev === selectedProject.media.length - 1 ? 0 : prev + 1
    );
  };

  useEffect(() => {
    if (selectedProject) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selectedProject]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedProject) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') prevPhoto(e);
      if (e.key === 'ArrowRight') nextPhoto(e);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  });

  return (
    <div className="relative bg-light-bg dark:bg-dark-bg transition-colors min-h-screen overflow-x-hidden">
      
      {/* HEADER — même hauteur / rythme que Contact, Prestations, À propos */}
      <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12 pt-10 sm:pt-16 lg:pt-20 pb-6 sm:pb-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="text-[10px] sm:text-xs font-heading uppercase tracking-super-wide text-accent font-semibold block mb-2">
            {t('portfolio.title')}
          </span>
          <h1 className="font-heading text-[1.75rem] sm:text-4xl md:text-5xl lg:text-6xl font-bold text-light-text dark:text-dark-text leading-tight">
            {t('portfolio.subtitle')}
          </h1>
        </motion.div>

        {/*
          FILTRES
          Mobile : scroll horizontal fluide (plus de retour à la ligne moche)
          Desktop : centrés, wrap propre
        */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="mt-6 sm:mt-8"
        >
          {/* Mobile : piste scrollable */}
          <div className="sm:hidden -mx-4 px-4">
            <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none snap-x snap-mandatory">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`
                    snap-start shrink-0 px-4 py-2 rounded-full text-[11px] font-medium tracking-wide uppercase transition-all duration-300
                    ${
                      activeCategory === cat
                        ? 'bg-accent text-white shadow-md'
                        : 'bg-light-secondary dark:bg-dark-secondary text-light-muted dark:text-dark-muted border border-light-border dark:border-dark-border'
                    }
                  `}
                >
                  {cat === 'all' ? t('portfolio.all') : cat}
                </button>
              ))}
            </div>
          </div>

          {/* Tablet / Desktop : wrap centré */}
          <div className="hidden sm:flex flex-wrap justify-center gap-2 md:gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`
                  px-4 md:px-5 py-2 rounded-full text-xs md:text-sm font-medium tracking-wide uppercase transition-all duration-300
                  ${
                    activeCategory === cat
                      ? 'bg-accent text-white shadow-md'
                      : 'bg-light-secondary dark:bg-dark-secondary text-light-muted dark:text-dark-muted hover:text-accent border border-transparent hover:border-accent/30'
                  }
                `}
              >
                {cat === 'all' ? t('portfolio.all') : cat}
              </button>
            ))}
          </div>
        </motion.div>
      </div>

      {/* GRILLE — responsive solide */}
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12 pb-14 sm:pb-20">
        <motion.div
          layout
          className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5 md:gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredData.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35 }}
                key={project.id}
                onClick={() => openAlbum(project)}
                className="group relative cursor-pointer aspect-[4/5] overflow-hidden rounded-xl bg-light-secondary dark:bg-dark-secondary"
              >
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 sm:p-5 md:p-6 text-white">
                  <span className="text-[10px] sm:text-xs uppercase tracking-widest text-accent font-semibold mb-1">
                    {project.category}
                  </span>

                  {/* Titre : 2 lignes max, pas de coupe moche */}
                  <h3 className="font-heading font-bold text-base sm:text-lg md:text-xl leading-snug line-clamp-2">
                    {project.title}
                  </h3>

                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mt-2 text-[10px] sm:text-xs text-white/70">
                    <span className="inline-flex items-center gap-1">
                      <LuImages className="w-3.5 h-3.5 text-accent shrink-0" />
                      {project.media.length} média{project.media.length > 1 ? 's' : ''}
                    </span>
                    {project.location && (
                      <span className="truncate max-w-full">• {project.location}</span>
                    )}
                  </div>
                </div>

                {project.type === 'video' && (
                  <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-black/60 backdrop-blur-md px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full flex items-center gap-1.5 text-white">
                    <LuPlay className="w-3 h-3 fill-white" />
                    <span className="text-[9px] uppercase tracking-widest font-bold">
                      {t('portfolio.videoBadge')}
                    </span>
                  </div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredData.length === 0 && (
          <div className="text-center py-16 sm:py-20 text-light-muted dark:text-dark-muted flex flex-col items-center px-4">
            <LuCamera className="w-10 h-10 sm:w-12 sm:h-12 mb-4 opacity-20" />
            <p className="text-sm">Aucun projet dans cette catégorie pour le moment.</p>
          </div>
        )}
      </div>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {selectedProject &&
          (() => {
            const currentMedia = selectedProject.media[currentMediaIndex];
            const mediaUrl = typeof currentMedia === 'object' ? currentMedia.url : currentMedia;
            const isCurrentVideo = checkIsVideo(selectedProject, currentMedia);

            return (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col justify-between p-3 sm:p-6 md:p-8"
                onClick={closeLightbox}
              >
                <div className="flex justify-between items-start gap-3 text-white z-50">
                  <div className="min-w-0 flex-1">
                    <h3 className="font-heading font-bold text-base sm:text-lg md:text-xl truncate">
                      {selectedProject.title}
                    </h3>
                    <p className="text-[10px] sm:text-xs text-white/60 uppercase tracking-widest mt-0.5">
                      {currentMediaIndex + 1} / {selectedProject.media.length} — {selectedProject.category}
                    </p>
                  </div>

                  <button
                    onClick={closeLightbox}
                    className="p-2.5 sm:p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors shrink-0"
                    aria-label="Fermer"
                  >
                    <LuX className="w-5 h-5 sm:w-6 sm:h-6" />
                  </button>
                </div>

                {selectedProject.media.length > 1 && (
                  <>
                    <button
                      onClick={prevPhoto}
                      className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-50 p-2.5 sm:p-3 rounded-full bg-white/10 text-white hover:bg-accent transition-colors"
                    >
                      <LuChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                    </button>
                    <button
                      onClick={nextPhoto}
                      className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-50 p-2.5 sm:p-3 rounded-full bg-white/10 text-white hover:bg-accent transition-colors"
                    >
                      <LuChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                    </button>
                  </>
                )}

                <div
                  className="relative w-full flex-1 flex items-center justify-center my-3 sm:my-4 min-h-0"
                  onClick={(e) => e.stopPropagation()}
                >
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentMediaIndex}
                      initial={{ opacity: 0, scale: 0.97 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.97 }}
                      transition={{ duration: 0.25 }}
                      className="max-w-full max-h-full flex items-center justify-center"
                    >
                      {isCurrentVideo ? (
                        <video
                          src={mediaUrl}
                          controls
                          autoPlay
                          className="max-w-full max-h-[70vh] sm:max-h-[75vh] rounded-lg shadow-2xl"
                        />
                      ) : (
                        <img
                          src={mediaUrl}
                          alt={`${selectedProject.title} ${currentMediaIndex + 1}`}
                          className="max-w-full max-h-[70vh] sm:max-h-[75vh] object-contain rounded-lg shadow-2xl"
                        />
                      )}
                    </motion.div>
                  </AnimatePresence>
                </div>

                {selectedProject.media.length > 1 && (
                  <div
                    className="flex justify-center gap-2 z-50 overflow-x-auto py-2"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {selectedProject.media.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentMediaIndex(idx)}
                        className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-all shrink-0 ${
                          currentMediaIndex === idx
                            ? 'bg-accent scale-125'
                            : 'bg-white/30 hover:bg-white/60'
                        }`}
                      />
                    ))}
                  </div>
                )}
              </motion.div>
            );
          })()}
      </AnimatePresence>
    </div>
  );
};

export default Portfolio;