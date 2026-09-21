import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { LuArrowUpRight } from 'react-icons/lu';
import portfolioData from '../../data/portfolio';

const PortfolioPreview = () => {
  const { t } = useTranslation();

  // Extraction dynamique des catégories uniques
  const categories = Array.from(
    new Set(portfolioData.map((item) => item.category))
  ).map((catName) => {
    const project = portfolioData.find((item) => item.category === catName);
    return {
      name: catName,
      thumbnail: project ? project.thumbnail : '',
      title: project ? project.title : catName,
    };
  });

  return (
    <section className="py-12 sm:py-20 px-4 sm:px-8 md:px-12 max-w-[1400px] mx-auto">
      
      {/* En-tête de section */}
      <div className="flex flex-row items-end justify-between mb-8 sm:mb-12 gap-4">
        <div>
          <span className="text-[10px] sm:text-xs font-heading uppercase tracking-super-wide text-accent font-semibold">
            {t('universe.title')}
          </span>
          <h2 className="text-xl sm:text-3xl md:text-4xl font-bold font-heading text-light-text dark:text-dark-text mt-1">
            {t('universe.subtitle')}
          </h2>
        </div>
        <Link
          to="/portfolio"
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-accent hover:underline group shrink-0 mb-1"
        >
          <span>{t('portfolio.title')}</span>
          <LuArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>

      {/* Grille : 2 colonnes sur mobile, 4 sur desktop */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 md:gap-8">
        {categories.map((cat, index) => (
          <motion.div
            key={cat.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Link
              to={`/portfolio?category=${cat.name}`}
              className="group relative block aspect-[3/4] overflow-hidden rounded-xl sm:rounded-2xl bg-light-secondary dark:bg-dark-secondary"
            >
              {/* Photo de couverture avec zoom au survol */}
              <img
                src={cat.thumbnail}
                alt={cat.name}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />

              {/* Overlay sombre dégradé */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />

              {/* Contenu du bloc compacté pour le 2 colonnes mobile */}
              <div className="absolute inset-0 p-3 sm:p-6 flex flex-col justify-end text-white">
                <span className="text-[9px] sm:text-xs uppercase tracking-widest text-accent font-semibold mb-0.5 sm:mb-1">
                  {cat.name}
                </span>
                <h3 className="text-sm sm:text-xl font-bold font-heading tracking-wide capitalize group-hover:text-accent transition-colors duration-300">
                  {cat.name}
                </h3>

                {/* Bouton Découvrir */}
                <div className="flex items-center gap-1 sm:gap-2 mt-1 sm:mt-3 text-[10px] sm:text-xs tracking-wider text-white/80 group-hover:text-white transition-colors duration-300">
                  <span>{t('universe.discover')}</span>
                  <LuArrowUpRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 text-accent" />
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

    </section>
  );
};

export default PortfolioPreview;