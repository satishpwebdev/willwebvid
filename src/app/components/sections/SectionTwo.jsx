import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import oldman from "../../../../public/oldman.jpg";
import { FaTractor } from "react-icons/fa6";
import { FaAward } from "react-icons/fa";
import { GiFruitBowl } from "react-icons/gi";


const SectionTwo = () => {
  const services = [
    {
      title: "R & D Services",
      description:
        "Why Choose Our Services Lorem ipsum is simply free text used by...",
      img:'/research.jpg',
        icon: <FaTractor />,
    },
    {
      title: "Crop Protection",
      description:
        "Why Choose Our Services Lorem ipsum is simply free text used by...",
      img: "https://demo2.themelexus.com/agrile/wp-content/uploads/2024/11/service-7.jpg",
        icon: <GiFruitBowl />,
    },
    {
      title: "Manufacturing",
      description:
        "Why Choose Our Services Lorem ipsum is simply free text used by...",
      img: '/manufacturing.jfif',
        icon: <GiFruitBowl />,
    },
  ];

  return (
    <section className="container mx-auto flex flex-col md:flex-row items-start md:items-start gap-10 px-10 py-12 bg-white">
      {/* Left Section */}
      <div className="w-full md:w-1/3">
        <h3 className="text-green-700 font-semibold uppercase tracking-wide">
          Our Service
        </h3>
        <h2 className="text-4xl md:text-6xl font-bold mt-2 text-gray-900">
          What We Provide
        </h2>
        <div className="mt-5 flex items-center  gap-3">
          <FaAward size={40} className="text-gray-600 text-2xl"/>
          <div>
            <p className="text-lg font-semibold text-gray-900">Best Service</p>
            <p className="text-gray-600 text-sm">
              National Best Service Awards
            </p>
            <p className="text-green-600 font-semibold mt-1">
              ⭐ 5/5 For The Willowood Service
            </p>
          </div>
        </div>
      </div>

      <div className="w-full md:w-2/3">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          autoplay={{ delay: 2900, disableOnInteraction: false }} 
          loop={true} 
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 20 },
            1024: { slidesPerView: 2, spaceBetween: 30 },
          }}
          className="relative"
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-[350px] h-[400px] mx-auto z-10">
                <div className="overflow-hidden rounded-xl shadow-lg">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-[300px] object-cover"
                  />
                </div>

                <div className="absolute  top-[50%] left-1/2 transform -translate-x-1/2 w-[80%] h-[30%] bg-white shadow-xl rounded-xl p-5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="text-green-600 h-8 w-8 bg-green-100 rounded-full text-2xl flex items-center justify-center">{service.icon}</div>
                      <h3 className="text-lg font-semibold text-gray-900">{service.title}</h3>
                    </div>
                    <button className="bg-green-600 text-white p-2 rounded-full">
                      ➝
                    </button>
                  </div>
                  <div className="text-gray-600 text-sm mt-2">
                    {service.description}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default SectionTwo;
