import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import {
  LuMapPin,
  LuMail,
  LuPhone,
  LuClock,
  LuSend,
  LuFacebook,
  LuInstagram,
  LuCamera,
  LuAperture,
} from 'react-icons/lu';
import { FaTiktok, FaWhatsapp } from 'react-icons/fa6';

const Contact = () => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      await new Promise((res) => setTimeout(res, 1200));
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  const infoCards = [
    { Icon: LuMapPin, title: t('contact.info.location_title'), value: t('contact.info.location') },
    { Icon: LuMail, title: t('contact.info.email_title'), value: 'hermannlesage03@gmail.com', href: 'mailto:hermannlesage03@gmail.com' },
    { Icon: LuPhone, title: t('contact.info.phone_title'), value: '+229 00 00 00 00', href: 'tel:+22900000000' },
    { Icon: LuClock, title: t('contact.info.hours_title'), value: t('contact.info.hours') },
  ];

  const socials = [
    { name: 'Facebook', Icon: LuFacebook, href: 'https://facebook.com/ton-profil' },
    { name: 'Instagram', Icon: LuInstagram, href: 'https://instagram.com/ton-profil' },
    { name: 'TikTok', Icon: FaTiktok, href: 'https://tiktok.com/@ton-profil' },
    { name: 'WhatsApp', Icon: FaWhatsapp, href: 'https://wa.me/22900000000' },
  ];

  return (
    <div className="relative bg-light-bg dark:bg-dark-bg transition-colors overflow-x-hidden">
      
      {/* Filigranes — cachés sur mobile */}
      <div className="pointer-events-none absolute inset-0 hidden md:block">
        <LuCamera className="absolute top-[8%] right-[4%] w-28 h-28 text-light-text/[0.04] dark:text-dark-text/[0.05]" />
        <LuAperture className="absolute bottom-[10%] left-[4%] w-32 h-32 text-light-text/[0.04] dark:text-dark-text/[0.05]" />
      </div>

      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12 py-10 sm:py-16 lg:py-20">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-12 lg:mb-14"
        >
          <span className="text-[10px] sm:text-xs font-heading uppercase tracking-super-wide text-accent font-semibold block mb-2">
            {t('contact.title')}
          </span>
          <h1 className="font-heading text-[1.75rem] sm:text-4xl md:text-5xl lg:text-6xl font-bold text-light-text dark:text-dark-text leading-tight mb-3 sm:mb-4">
            {t('contact.subtitle')}
          </h1>
          <p className="text-light-muted dark:text-dark-muted text-sm sm:text-base max-w-xl mx-auto px-2">
            {t('contact.intro')}
          </p>
        </motion.div>

        {/* GRID : Formulaire + Infos */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-5 sm:gap-8 lg:gap-10">
          
          {/* FORMULAIRE */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-4 sm:p-6 lg:p-8 rounded-2xl bg-light-secondary/60 dark:bg-dark-secondary/60 border border-light-border dark:border-dark-border space-y-4"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field
                label={t('contact.form.name')}
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <Field
                label={t('contact.form.email')}
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field
                label={t('contact.form.phone')}
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
              />

              <div className="flex flex-col">
                <label className="text-[10px] uppercase tracking-widest text-light-muted dark:text-dark-muted font-semibold mb-1.5">
                  {t('contact.form.service')}
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full bg-light-bg dark:bg-dark-bg border border-light-border dark:border-dark-border rounded-lg px-3 py-2.5 text-sm text-light-text dark:text-dark-text focus:outline-none focus:border-accent transition-colors"
                >
                  <option value="">{t('contact.form.select_service')}</option>
                  {['mariage', 'portrait', 'mode', 'corporate', 'evenement', 'autre'].map((opt) => (
                    <option key={opt} value={opt}>
                      {t(`contact.form.options.${opt}`)}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex flex-col">
              <label className="text-[10px] uppercase tracking-widest text-light-muted dark:text-dark-muted font-semibold mb-1.5">
                {t('contact.form.message')}
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full bg-light-bg dark:bg-dark-bg border border-light-border dark:border-dark-border rounded-lg px-3 py-2.5 text-sm text-light-text dark:text-dark-text focus:outline-none focus:border-accent transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-accent text-white dark:text-black font-semibold text-sm shadow-md shadow-accent/20 hover:bg-accent-hover transition-all disabled:opacity-60 disabled:cursor-not-allowed"
            >
              <LuSend className="w-4 h-4" />
              {status === 'sending' ? t('contact.form.sending') : t('contact.form.send')}
            </button>

            {status === 'success' && (
              <p className="text-green-600 dark:text-green-400 text-xs sm:text-sm text-center">
                {t('contact.form.success')}
              </p>
            )}
            {status === 'error' && (
              <p className="text-red-600 dark:text-red-400 text-xs sm:text-sm text-center">
                {t('contact.form.error')}
              </p>
            )}
          </motion.form>

          {/* INFOS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col gap-3"
          >
            {infoCards.map(({ Icon, title, value, href }) => {
              const Wrapper = href ? 'a' : 'div';
              const wrapperProps = href
                ? { href, target: href.startsWith('http') ? '_blank' : undefined, rel: 'noreferrer' }
                : {};
              return (
                <Wrapper
                  key={title}
                  {...wrapperProps}
                  className="flex items-start gap-3 p-3 sm:p-4 rounded-xl bg-light-secondary/60 dark:bg-dark-secondary/60 border border-light-border dark:border-dark-border hover:border-accent transition-colors"
                >
                  <div className="w-9 h-9 rounded-full bg-accent/10 text-accent flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-[10px] uppercase tracking-widest text-light-muted dark:text-dark-muted font-semibold">
                      {title}
                    </div>
                    <div className="text-xs sm:text-sm text-light-text dark:text-dark-text mt-0.5 break-words">
                      {value}
                    </div>
                  </div>
                </Wrapper>
              );
            })}

            <div className="p-3 sm:p-4 rounded-xl bg-light-secondary/60 dark:bg-dark-secondary/60 border border-light-border dark:border-dark-border">
              <div className="text-[10px] uppercase tracking-widest text-light-muted dark:text-dark-muted font-semibold mb-3">
                {t('contact.social_title')}
              </div>
              <div className="flex flex-wrap gap-2">
                {socials.map(({ name, Icon, href }) => (
                  <a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={name}
                    className="w-9 h-9 rounded-full border border-light-border dark:border-dark-border text-light-muted dark:text-dark-muted hover:text-accent hover:border-accent flex items-center justify-center transition-colors"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const Field = ({ label, name, type = 'text', value, onChange, required }) => (
  <div className="flex flex-col">
    <label className="text-[10px] uppercase tracking-widest text-light-muted dark:text-dark-muted font-semibold mb-1.5">
      {label}
    </label>
    <input
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      required={required}
      className="w-full bg-light-bg dark:bg-dark-bg border border-light-border dark:border-dark-border rounded-lg px-3 py-2.5 text-sm text-light-text dark:text-dark-text focus:outline-none focus:border-accent transition-colors"
    />
  </div>
);

export default Contact;