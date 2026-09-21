import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { 
  LuX, 
  LuAperture, 
  LuSlidersHorizontal, 
  LuBookOpen, 
  LuSend, 
  LuFacebook,
  LuInstagram,
  LuMail
} from 'react-icons/lu';
import { FaTiktok, FaWhatsapp } from 'react-icons/fa6';
import Button from '../ui/Button';

const MobileMenu = ({ isOpen, onClose }) => {
  const { t } = useTranslation();

  const navLinks = [
    { to: '/portfolio', label: t('nav.portfolio'), icon: LuAperture },
    { to: '/services', label: t('nav.services'), icon: LuSlidersHorizontal },
    { to: '/about', label: t('nav.about'), icon: LuBookOpen },
    { to: '/contact', label: t('nav.contact'), icon: LuSend },
  ];

  // ⚠️ Remplace ces liens par tes vrais profils
  const socialLinks = [
    { 
      name: 'Facebook', 
      href: 'https://facebook.com/ton-profil', 
      icon: LuFacebook 
    },
    { 
      name: 'Instagram', 
      href: 'https://instagram.com/ton-profil', 
      icon: LuInstagram 
    },
    { 
      name: 'TikTok', 
      href: 'https://tiktok.com/@ton-profil', 
      icon: FaTiktok 
    },
    { 
      name: 'WhatsApp', 
      href: 'https://wa.me/33600000000', // format international sans + ni 0
      icon: FaWhatsapp 
    },
    { 
      name: 'Gmail', 
      href: 'mailto:hermannlesage03@gmail.com', 
      icon: LuMail 
    },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay sombre (1/4 visible de la page) — clic pour fermer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
          />

          {/* Panneau menu : 3/4 de largeur depuis la droite */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.35, ease: 'easeInOut' }}
            className="fixed top-0 right-0 z-50 h-full w-3/4 max-w-sm bg-light-bg dark:bg-dark-bg border-l border-light-border dark:border-dark-border shadow-2xl flex flex-col"
          >
            {/* Haut du menu */}
            <div className="flex justify-between items-center p-6 border-b border-light-border dark:border-dark-border">
              <span className="font-heading tracking-widest text-base font-bold text-accent">
                ELVIS
              </span>
              <button
                onClick={onClose}
                className="p-2.5 rounded-full border border-light-border dark:border-dark-border text-light-text dark:text-dark-text hover:border-accent transition-colors"
                aria-label="Fermer le menu"
              >
                <LuX className="w-5 h-5" />
              </button>
            </div>

            {/* Liens de navigation */}
            <nav className="flex flex-col gap-2 px-6 py-8 flex-1 overflow-y-auto">
              {navLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    onClick={onClose}
                    className={({ isActive }) =>
                      `flex items-center gap-4 px-4 py-3.5 rounded-xl text-lg font-heading tracking-wide transition-all duration-300 ${
                        isActive 
                          ? 'bg-accent/10 text-accent' 
                          : 'text-light-text dark:text-dark-text hover:bg-light-secondary dark:hover:bg-dark-secondary hover:text-accent'
                      }`
                    }
                  >
                    <Icon className="w-5 h-5 text-accent shrink-0" />
                    <span>{link.label}</span>
                  </NavLink>
                );
              })}
            </nav>

            {/* Bas du menu : CTA + Réseaux sociaux */}
            <div className="px-6 pb-8 pt-4 border-t border-light-border dark:border-dark-border space-y-6">
              
              {/* Bouton Réserver */}
              <Button 
                to="/contact" 
                onClick={onClose} 
                variant="primary" 
                hasArrow 
                className="w-full py-3.5 text-sm"
              >
                {t('nav.book')}
              </Button>
              
              {/* Réseaux sociaux */}
              <div className="flex flex-col items-center gap-3">
                <p className="text-[10px] uppercase tracking-super-wide text-light-muted dark:text-dark-muted">
                  Suivez-moi
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.name}
                        href={social.href}
                        target={social.name === 'Gmail' ? undefined : '_blank'}
                        rel={social.name === 'Gmail' ? undefined : 'noopener noreferrer'}
                        aria-label={social.name}
                        className="p-2.5 rounded-full border border-light-border dark:border-dark-border text-light-muted dark:text-dark-muted hover:text-accent hover:border-accent transition-colors duration-300"
                      >
                        <Icon className="w-4 h-4" />
                      </a>
                    );
                  })}
                </div>
              </div>

            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;