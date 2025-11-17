"use client";

import Image from "next/image";
import Banner from "../../../../public/section3.jpg";
import StepLogo from "../../../../public/steplogo.png";
import { GiWillowTree } from "react-icons/gi";
import { TbToolsKitchen2 } from "react-icons/tb";
import { FaPersonBreastfeeding } from "react-icons/fa6";
import { SiCoffeescript } from "react-icons/si";

import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useInView,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

const SectionThree = () => {
  const count = useMotionValue(1);
  const rounded = useTransform(count, (latest) => Math.floor(latest));
  const [displayCount, setDisplayCount] = useState(1);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "10px" });

  useEffect(() => {
    if (isInView) {
      const animation = animate(count, 25, {
        duration: 5,
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

  const steps = [
    {
      number: "01",
      title: "Schedule Your Experience",
      description:
        "When you work with us, you’ll see that absolute conditions is our priority.",
      icon: <GiWillowTree />,
    },
    {
      number: "02",
      title: "Get Professional Advice",
      description:
        "When you work with us, you’ll see that absolute conditions is our priority.",
      icon: <TbToolsKitchen2 />,
    },
    {
      number: "03",
      title: "Meet Our Expert People",
      description:
        "When you work with us, you’ll see that absolute conditions is our priority.",
      icon: <FaPersonBreastfeeding />,
    },
    {
      number: "04",
      title: "Now Get A Best Products",
      description:
        "When you work with us, you’ll see that absolute conditions is our priority.",
      icon: <SiCoffeescript />,
    },
  ];

  return (
    <section className="relative container mx-auto bg-white py- flex flex-col lg:flex-row items-center ">
      <div className="  max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
        {/* Left Image Section */}
        <div className="">
          <div className="rounded-lg overflow-hidden">
            <Image
              src={Banner}
              alt="Farmer in field"
              width={600}
              height={400}
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Right Content Section */}
        <div className=" md:h-[720px] ">
          <p className="text-green-700 font-semibold uppercase tracking-wide">
            Work Process
          </p>
          <h2 className="text-4xl font-bold text-center lg:text-left text-gray-900 mt-2">
          The Crop Protection Process
          </h2>
          <p className="text-gray-600 mt-4 text-lg text-center lg:text-left">
          We actively participate in key international agrochemical exhibitions,
           offering opportunities to forge new partnerships, stay updated on industry trends,
           share expertise, and showcase our latest innovations in crop protection.
          </p>

          {/* Experience Box */}
          <div
            ref={ref}
            className="mt-6 flex items-center justify-center lg:justify-start  gap-4"
          >
            <Image
              src={StepLogo}
              alt="Experience Icon"
              width={80}
              height={80}
            />
            <div>
              <span className="text-green-700 text-5xl font-bold">
                {displayCount}+
              </span>
              <p className="text-gray-700">Years of Experience</p>
            </div>
          </div>

          {/* Steps Section */}
          <div className="hidden  lg:grid lg:absolute w-full mt-32 px-16 left-0 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-white relative p-6 rounded-lg shadow-md text-center"
              >
                <span className="text-gray-300 text-4xl left-4 top-2 absolute font-bold">
                  {step.number}
                </span>
                <div className="my-2 bg-gray-200 w-12 h-12 mx-auto items-center rounded-full flex justify-center text-2xl text-green-700">{step.icon}</div>

                <h3 className="text-lg font-semibold text-gray-900">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm mt-2">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="lg:hidden grid  w-full mt-4 px-4 left-0 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md text-center"
          >
            <span className="text-gray-300 text-2xl font-bold">
              {step.number}
            </span>
            <div className="my-2 flex justify-center text-3xl text-green-700">{step.icon}</div>
            <h3 className="text-lg font-semibold text-gray-900">
              {step.title}
            </h3>
            <p className="text-gray-600 text-sm mt-2">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionThree;
