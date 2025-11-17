"use client";

import { motion, useAnimation } from "framer-motion";
import { Leaf, Sprout, Sun, Droplets, Award, Users } from "lucide-react";
import { useEffect } from "react";
import Image from "next/image";
import SectionOne from "./components/sections/SectionOne";
import SectionTwo from "./components/sections/SectionTwo";
import SectionThree from "./components/sections/SectionThree";
import SectionFour from "./components/sections/SectionFour";
import SectionFive from "./components/sections/SectionFive";
import SectionSix from "./components/sections/SectionSix";
import Hero from "./components/Hero";

export default function Home() {
  const controls = useAnimation();
  useEffect(() => {
    controls.start({
      scale: 1.5,
      transition: { duration: 19, ease: "easeInOut" },
    });
  }, [controls]);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  return (
    <>
      <Hero />

      {/* Features Section */}
      <section className=" bg-white">
        <SectionOne />
      </section>

      {/* Stats Section */}
      <section className="bg-white ">
        <SectionTwo />
      </section>

      <section className="bg-white ">
        <SectionThree />
      </section>

      <section className="bg-white   ">
        <SectionFour />
      </section>
      <section className="bg-white ">
        <SectionFive />
      </section>
      <section className="bg-white ">
        <SectionSix />
      </section>
      
    </>
  );
}
