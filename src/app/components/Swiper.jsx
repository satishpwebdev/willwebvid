"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const slides = [
  {
    id: 1,
    background: "/herobg.jpg",
    title: "Serving Farmers",
    subtitle: "the world over",
    description: "Revolutionizing agriculture with modern solutions and sustainable practices",
    buttonText: "Start Now",
    manImage: "/man.png",
  },
  {
    id: 2,
    background: "/herobg2.jpg",
    title: "Innovating Agriculture",
    subtitle: "For a Sustainable Future",
    description: "Helping farmers with modern technology and eco-friendly solutions.",
    buttonText: "Discover More",
    manImage: "/man2.png",
  },
  {
    id: 3,
    background: "/herobg3.jpg",
    title: "Empowering Farmers",
    subtitle: "With Smart Solutions",
    description: "Bringing AI and data-driven insights to revolutionize farming.",
    buttonText: "Join Us",
    manImage: "/man3.png",
  },
];

const Hero = () => {
  return (
    <section className="relative md:h-[700px] h-[550px] flex items-center justify-center overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        loop
        className="w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="absolute inset-0 z-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.background})` }}
            >
              <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>

            <div className="flex items-center justify-center mx-auto px-4 z-10 text-center">
              <div className="flex items-center md:flex-row flex-col">
                <div className="relative md:top-10 top-80 z-10">
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl md:text-6xl font-bold text-white mb-2"
                  >
                    <span className="text-yellow-500">{slide.title}</span>
                    <br />
                    {slide.subtitle}
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-lg text-gray-200 mb-8 max-w-xl mx-auto"
                  >
                    {slide.description}
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex justify-center"
                  >
                    <button className="bg-green-800 text-white py-3 px-6 rounded-full font-bold hover:bg-yellow-600 transition duration-300">
                      {slide.buttonText}
                    </button>
                  </motion.div>
                </div>

                <div className="man-image w-[250px] md:w-[500px] md:h-[550px] h-[550px]">
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="relative top-20 md:top-2 left-24 md:left-40"
                  >
                    <Image src={slide.manImage} width={450} height={450} alt="man" />
                  </motion.div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;
