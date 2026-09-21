import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { 
  LuAperture, 
  LuSlidersHorizontal, 
  LuBookOpen, 
  LuSend
} from 'react-icons/lu';
import ThemeToggle from '../ui/ThemeToggle';
import LanguageSwitcher from '../ui/LanguageSwitcher';
import Button from '../ui/Button';
import MobileMenu from './MobileMenu';

const Navbar = () => {
  const { t } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { to: '/portfolio', label: t('nav.portfolio'), icon: LuAperture },
    { to: '/services', label: t('nav.services'), icon: LuSlidersHorizontal },
    { to: '/about', label: t('nav.about'), icon: LuBookOpen },
    { to: '/contact', label: t('nav.contact'), icon: LuSend },
  ];

  return (
    <>
      {/* ================= HEADER DESKTOP ================= */}
      <header className="hidden lg:block sticky top-0 z-40 w-full bg-light-bg/85 dark:bg-dark-bg/85 backdrop-blur-md border-b border-light-border/60 dark:border-dark-border/60 transition-colors duration-300">
        <div className="max-w-[1400px] mx-auto px-8 md:px-12 h-20 flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="flex flex-col group">
            <span className="font-heading text-xl font-bold tracking-widest text-light-text dark:text-dark-text group-hover:text-accent transition-colors duration-300">
              ELVIS 
            </span>
            <span className="text-[9px] uppercase tracking-super-wide text-accent">
              Photography
            </span>
          </Link>

          {/* Menu Desktop */}
          <nav className="flex items-center gap-7">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    `flex items-center gap-2 text-sm tracking-wide font-medium transition-colors duration-300 ${
                      isActive
                        ? 'text-accent'
                        : 'text-light-text/80 dark:text-dark-text/80 hover:text-accent dark:hover:text-accent'
                    }`
                  }
                >
                  <Icon className="w-4 h-4 text-accent" />
                  <span>{link.label}</span>
                </NavLink>
              );
            })}
          </nav>

          {/* Outils droite Desktop */}
          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <ThemeToggle />
            <Button to="/contact" variant="primary" hasArrow>
              {t('nav.book')}
            </Button>
          </div>

        </div>
      </header>


      {/* ================= HEADER MOBILE (CAPSULE FLOTTANTE SUR MESURE) ================= */}
      <div className="lg:hidden fixed top-3 left-4 right-4 z-40">
        <div className="bg-light-bg/90 dark:bg-dark-secondary/90 backdrop-blur-xl border border-light-border dark:border-dark-border shadow-lg shadow-black/5 rounded-full px-5 py-2.5 flex items-center justify-between transition-colors duration-300">
          
          {/* Logo gauche */}
          <Link to="/" className="flex flex-col">
            <span className="font-heading text-sm font-bold tracking-widest text-light-text dark:text-dark-text">
              ELVIS 
            </span>
            <span className="text-[8px] uppercase tracking-super-wide text-accent">
              Photography
            </span>
          </Link>

          {/* Contrôles droite : Langue + Thème + Burger Rond Stylisé */}
          <div className="flex items-center gap-2.5">
            <LanguageSwitcher />
            <ThemeToggle />

            {/* Bouton Burger rond style CarlDev */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Ouvrir le menu"
              className="w-10 h-10 rounded-full bg-light-text dark:bg-dark-text text-light-bg dark:text-dark-bg flex flex-col items-center justify-center gap-1 shadow-md hover:scale-105 active:scale-95 transition-all duration-300 ml-1"
            >
              {/* 3 barres stylisées (longue, moyenne, courte) */}
              <span className="w-4 h-[2px] bg-current rounded-full"></span>
              <span className="w-3 h-[2px] bg-current rounded-full"></span>
              <span className="w-2 h-[2px] bg-current rounded-full"></span>
            </button>
          </div>

        </div>
      </div>

      {/* Spacer pour éviter que le contenu ne passe sous la capsule sur mobile */}
      <div className="lg:hidden h-[4.25rem]"></div>

      {/* Menu Mobile Tiroir (3/4 écran) */}
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  );
};

export default Navbar;