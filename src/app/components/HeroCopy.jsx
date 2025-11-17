"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import Image from "next/image";

const Hero = () => {
  const controls = useAnimation();
  useEffect(() => {
    controls.start({
      scale: 1.5,
      transition: { duration: 15, ease: "easeInOut" },
    });
  }, [controls]);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };
  return (
    <>
      <section className="relative md:h-[700px] h-[550px] flex items-center justify-center  overflow-hidden ">
        <motion.div
          initial={{ scale: 1 }}
          animate={controls}
          className="absolute inset-0 z-0 bg-cover bg-center "
          style={{
            backgroundImage: "url('/herobg.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50 "></div>
        </motion.div>
        {/* <motion.div
          initial={{ scale: 1 }}
          animate={controls}
          className="absolute inset-0 z-0"
        >
          
          <video
            autoPlay
            loop
            muted
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/drone3.webm" type="video/webm" />
            Your browser does not support the video tag.
          </video>

          
          <div className="absolute inset-0 bg-black opacity-10"></div>
        </motion.div> */}

        <div className="flex items-center justify-center mx-auto px-4 z-10 text-center">
          <div className=" flex items-center md:flex-row flex-col ">
            <div className="relative md:top-10 top-80 z-10">
              <div className="absolute -z-10 ">
                <motion.div
                  initial={{ opacity: 0, x: 20, y: 0 }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    y: [0, -30, 0],
                  }}
                  transition={{
                    opacity: { duration: 0.6, delay: 0.6 },
                    x: { duration: 0.6, delay: 0.6 },
                    y: {
                      duration: 3.7,
                      ease: "easeInOut",
                      repeat: Infinity,
                      repeatType: "loop",
                      delay: 1.0,
                    },
                  }}
                  className="relative top-10 md:-top-12 left-2 md:left-2"
                >
                  <img
                    src={"/leaf.png"}
                    alt={"leaf"}
                    className="md:w-16 md:h-16 h-8 w-8"
                  />
                </motion.div>
              </div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-6xl font-bold text-white mb-2"
              >
                <span className="text-yellow-500">Serving Farmers</span>
                <br />
                the world over
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg text-gray-200 mb-8 max-w-xl mx-auto"
              >
                Revolutionizing agriculture with modern solutions and
                sustainable practices
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex justify-center"
              >
                <button className="bg-green-800 text-white py-3 px-6 rounded-full font-bold hover:bg-yellow-600 transition duration-300">
                  Start Now
                </button>
              </motion.div>
            </div>
            <div className="man-image w-[250px] md:w-[500px]  md:h-[550px] h-[550px]">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="relative  top-20 md:top-52  left-24 md:left-40"
              >
                {/* <Image
                  src={"/plantg.png"}
                  width={450}
                  height={450}
                  alt={"man.png"}
                  className=""
                ></Image> */}
              </motion.div>
            </div>
          </div>
        </div>
        <div className="custom-shape-divider-bottom-1738788101 ">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </section>
    </>
  );
};

export default Hero;
