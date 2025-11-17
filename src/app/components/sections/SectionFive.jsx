"use client";
import Image from "next/image";
import { Check } from "lucide-react";
import Tractor from "../../../../public/tractor.jpg";
import { GiGrain } from "react-icons/gi";
import { FaPlateWheat } from "react-icons/fa6";
import { FaBowlRice } from "react-icons/fa6";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useInView,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

const SectionFive = () => {

  const count = useMotionValue(1);
  const rounded = useTransform(count, (latest) => Math.floor(latest));
  const [displayCount, setDisplayCount] = useState(1);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "10px" });

  useEffect(() => {
    if (isInView) {
      const animation = animate(count, 26, {
        duration: 3,
        ease: "easeInOut",
      });

      const unsubscribe = rounded.on("change", (latest) => {
        setDisplayCount(latest);
      });

      return () => {
        animation.stop();
        unsubscribe();
      };
    }
  }, [isInView, count, rounded]);

  return (
    <section className="container mx-auto bg-white py-12 px-4 md:px-10 lg:px-16">
      <div className="flex flex-col lg:flex-row items-center">
        {/* Left Section */}
        <div className="lg:w-1/2">
          <h3 className="text-green-600 font-semibold text-sm md:text-lg uppercase flex items-center space-x-2">
            <span>🌿</span>
            <span>WHY CHOOSE US</span>
          </h3>
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mt-2 md:mt-3 leading-tight">
            We Are Different <br className="hidden md:block" /> From Other
            Crop Protection
          </h2>
          <p className="text-gray-600 mt-3 md:mt-4 text-base md:text-lg">
          With over 30 years of global experience in crop protection,
          Willowood works with professionals to deliver high-quality, sustainable solutions.
          </p>

          {/* Features List */}
          <div className="mt-5 md:mt-6 space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-green-600 text-white flex items-center justify-center rounded-full">
                <span className="px-4 py-2">
                  <FaPlateWheat size={30} />
                </span>
              </div>
              <div>
                <h4 className="text-base md:text-lg font-semibold text-gray-900">
                Sustainable & Effective Crop Protection
                </h4>
                <p className="text-gray-500 text-sm md:text-base">
                Tailored solutions for both small and large-scale farmers, 
                protecting crops with innovative chemicals.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-green-600 text-white flex items-center justify-center rounded-full">
                <span className="px-4 py-2">
                  <FaBowlRice size={30} />
                </span>
              </div>
              <div>
                <h4 className="text-base md:text-lg font-semibold text-gray-900">
                Innovative Agrochemical Solutions
                </h4>
                <p className="text-gray-500 text-sm md:text-base">
                Advanced formulations to enhance crop yield and health,
                ensuring sustainability.
                </p>
              </div>
            </div>
          </div>

          {/* Bullet Points */}
          <div className="mt-5 md:mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-green-700 font-semibold">
            <p className="flex items-center">
              <Check className="w-5 h-5 mr-2" /> 100% Naturally
            </p>
            <p className="flex items-center">
              <Check className="w-5 h-5 mr-2" /> High-tech Processing
            </p>
            <p className="flex items-center">
              <Check className="w-5 h-5 mr-2" /> Home Delivery Service
            </p>
            <p className="flex items-center">
              <Check className="w-5 h-5 mr-2" /> Best Quality Product
            </p>
          </div>

          {/* Button */}
          <button className="mt-6 md:mt-8 bg-green-600 text-white px-5 md:px-6 py-2 md:py-3 rounded-lg font-semibold hover:bg-green-700 flex items-center">
            Explore More <span className="ml-2">→</span>
          </button>
        </div>

        {/* Right Section */}
        <div className="lg:w-1/2 flex justify-center mt-8 lg:mt-0 relative">
          <div className="relative w-full max-w-xs sm:max-w-md lg:max-w-lg">
            {/* Background Image */}
            <Image
              src={Tractor}
              alt="Agriculture"
              width={500}
              height={300}
              className="rounded-xl shadow-lg w-full h-auto"
            />

            {/* Play Button */}
            <button className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 rounded-xl">
              <div className="  w-12 h-12 md:w-16 md:h-16 bg-green-500 text-white rounded-full flex items-center justify-center text-lg md:text-2xl">
                <span className="animate-pulse"> ▶ </span>
              </div>
            </button>
          </div>

          {/* Harvest Info Box */}
          <div ref={ref} className="absolute -bottom-8 right-2 sm:right-6 bg-white shadow-lg rounded-xl p-3 md:p-4 flex flex-col items-center">
            <span className="text-gray-600">
              <GiGrain size={40} />
            </span>
            <p className="text-2xl md:text-3xl font-bold text-green-700 mt-1 md:mt-2">
              {displayCount}+
            </p>
            <p className="text-gray-600 text-xs md:text-sm">
              Growth Tonns of Harvest
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionFive;
