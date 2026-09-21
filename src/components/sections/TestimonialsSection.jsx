import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { LuStar } from 'react-icons/lu';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  { id: 1, name: "Sophie & Thomas", text: "Hermann a su capturer l'essence de notre mariage avec une discrétion et une élégance rares. Les photos sont de véritables œuvres d'art." },
  { id: 2, name: "Claire L. (Dior)", text: "Un professionnel hors pair. Son œil pour la lumière et les textures a sublimé notre dernière campagne Haute Couture." },
  { id: 3, name: "Marc Antoine", text: "Je déteste être pris en photo, mais Hermann m'a mis à l'aise instantanément. Mon portrait corporate n'a jamais été aussi percutant." },
  { id: 4, name: "Élise V.", text: "Une expérience incroyable du début à la fin. Les clichés noir et blanc sont d'une pureté absolue. Merci pour ce souvenir." }
];

const TestimonialsSection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 sm:py-28 bg-light-secondary dark:bg-dark-secondary transition-colors duration-300">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 md:px-12 text-center">
        
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="text-xs font-heading uppercase tracking-super-wide text-accent font-semibold block mb-2">
            {t('testimonials.title')}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-light-text dark:text-dark-text mb-16">
            {t('testimonials.subtitle')}
          </h2>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            className="pb-16"
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="bg-light-bg dark:bg-dark-bg p-8 rounded-2xl shadow-sm border border-light-border dark:border-dark-border h-full flex flex-col justify-between cursor-grab active:cursor-grabbing">
                  <div className="flex gap-1 mb-6 text-accent justify-center">
                    {[...Array(5)].map((_, i) => <LuStar key={i} className="w-4 h-4 fill-accent" />)}
                  </div>
                  <p className="italic text-light-muted dark:text-dark-muted mb-8 text-sm md:text-base leading-relaxed">
                    "{item.text}"
                  </p>
                  <p className="font-heading font-bold text-light-text dark:text-dark-text uppercase tracking-widest text-xs">
                    — {item.name}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;