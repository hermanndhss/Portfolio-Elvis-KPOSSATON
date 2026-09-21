import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { LuFacebook, LuInstagram, LuMail, LuChevronUp } from 'react-icons/lu';
import { FaTiktok, FaWhatsapp } from 'react-icons/fa6';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'Facebook', href: 'https://facebook.com/ton-profil', icon: LuFacebook },
    { name: 'Instagram', href: 'https://instagram.com/ton-profil', icon: LuInstagram },
    { name: 'TikTok', href: 'https://tiktok.com/@ton-profil', icon: FaTiktok },
    { name: 'WhatsApp', href: 'https://wa.me/33600000000', icon: FaWhatsapp },
    { name: 'Gmail', href: 'mailto:hermannlesage03@gmail.com', icon: LuMail },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-light-bg dark:bg-dark-bg border-t border-light-border/70 dark:border-dark-border/70 transition-colors duration-300">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 md:px-12 py-6 sm:py-8">
        
        <div className="flex flex-col sm:flex-row items-center justify-between gap-5">
          
          {/* Gauche : Copyright */}
          <p className="text-xs text-light-muted dark:text-dark-muted order-2 sm:order-1">
            © {currentYear}{' '}
            <span className="font-semibold text-accent">ELVIS KPOSSATON</span>
            {' '}— {t('footer.rights')}
          </p>

          {/* Centre : Liens */}
          <nav className="flex flex-wrap justify-center gap-5 sm:gap-6 text-xs text-light-muted dark:text-dark-muted order-1 sm:order-2">
            <Link to="/" className="hover:text-accent transition-colors duration-200">{t('nav.home')}</Link>
            <Link to="/portfolio" className="hover:text-accent transition-colors duration-200">{t('nav.portfolio')}</Link>
            <Link to="/services" className="hover:text-accent transition-colors duration-200">{t('nav.services')}</Link>
            <Link to="/about" className="hover:text-accent transition-colors duration-200">{t('nav.about')}</Link>
            <Link to="/contact" className="hover:text-accent transition-colors duration-200">{t('nav.contact')}</Link>
          </nav>

          {/* Droite : Réseaux + Bouton haut */}
          <div className="flex items-center gap-3 order-3">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target={social.name === 'Gmail' ? undefined : '_blank'}
                  rel={social.name === 'Gmail' ? undefined : 'noopener noreferrer'}
                  aria-label={social.name}
                  className="p-1.5 text-light-muted dark:text-dark-muted hover:text-accent transition-colors duration-300"
                >
                  <Icon className="w-3.5 h-3.5" />
                </a>
              );
            })}

            {/* Bouton remonter en haut */}
            <button
              onClick={scrollToTop}
              aria-label="Remonter en haut"
              className="ml-1 w-9 h-9 rounded-full bg-accent text-white flex items-center justify-center shadow-md hover:bg-accent-hover hover:scale-105 active:scale-95 transition-all duration-300"
            >
              <LuChevronUp className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;