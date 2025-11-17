"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import worldMap from '../../../../public/worldmap.png'
import flone from '../../../../public/flone.jpg'
import fltwo from '../../../../public/fltwo.jpg'
import flthree from '../../../../public/flthree.jpg'
import flfour from '../../../../public/flfour.jpg'
import fleave from '../../../../public/flleave.png'
import fleave2 from '../../../../public/fleleave2.png'
import Image from "next/image";

const testimonials = [
  {
    name: "Alex Rony",
    designation: "Fresh Design",
    text: "Consectetur adipiscing elit. Integer nunc viverra laoreet est the is porta pretium metus aliquam eget maecenas porta is nunc viverra Aenean pulvinar maximus leo",
    image: "/images/farmer1.jpg",
  },
  {
    name: "Jane Doe",
    designation: "Organic Farms",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at neque vitae erat aliquet imperdiet.",
    image: "/images/farmer2.jpg",
  },
];

const bgImage = {
  backgroundImage: `url(${worldMap})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  zIndex: 10
}

const SectionSix = () => {
  return (
    <div className="bg-white container mx-auto py-16 px-4 md:px-10 lg:px-20 relative overflow-hidden">
      <div className="text-center max-w-xl mx-auto">
        <h4 className="text-green-600 font-medium tracking-wide uppercase">
          Our Testimonials
        </h4>
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-2">
          Hear What Our Global Clients Say
        </h2>
      </div>

      <div  style={bgImage} className="relative mt-10">
        <Swiper
          modules={[Pagination, Autoplay]}
          autoplay={{ delay: 3000 }}
          loop={true}
          className="w-full max-w-xl mx-auto"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index} className="text-center">
              <p className="text-gray-700 max-w-lg mx-auto text-lg">“ {testimonial.text} ”</p>
              <div className="mt-6">
                <h4 className="text-gray-900 font-semibold text-lg">
                  {testimonial.name}
                </h4>
                <p className="text-green-600">{testimonial.designation}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Floating Images */}
      <div className="absolute top-4 left-5 md:left-16">
        <Image
          src={flone}
          width={100}
          height={100}
          alt="Farmer 1"
          className="w-40 md:w-48 rounded-lg shadow-lg rotate-6"
        />
      </div>
      <div className="absolute top-5 right-5 md:right-16">
        <Image
          src={fltwo}
          width={100}
          height={100}
          alt="Farmer 2"
          className="w-32 md:w-40 rounded-lg shadow-lg -rotate-6"
        />
      </div>
      <div className="absolute top-5 left-5 md:left-64 ">
        <Image
          src={fleave}
          width={100}
          height={100}
          alt="Farmer 2"
          className="w-32 md:w-40 rounded-lg  -rotate-6"
        />
      </div>
      <div className="absolute bottom-2 right-2 md:right-64 ">
        <Image
          src={fleave2}
          width={100}
          height={100}
          alt="Farmer 2"
          className="w-32 md:w-52 rounded-lg  -rotate-6"
        />
      </div>
      <div className="absolute bottom-10 right-10">
        <Image
          src={flthree}
          width={100}
          height={100}
          alt="Farmer 3"
          className="w-36 md:w-44 rounded-lg shadow-lg rotate-3"
        />
      </div>
      <div className="absolute top-[12rem] left-10 md:left-16">
        <Image
          src={flfour}
          width={100}
          height={100}
          alt="Farmer 4"
          className="w-36 md:w-44 rounded-lg shadow-lg -rotate-6"
        />
      </div>
    </div>
  );
};

export default SectionSix;
