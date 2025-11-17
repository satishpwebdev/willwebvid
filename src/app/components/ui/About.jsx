"use client";
import React from "react";
import Image from "next/image";
import aboutUs from "../../../../public/about-us.jpg";
import { motion } from "framer-motion";

const About = ({ title, meta, description, image }) => {
  return (
    <section className="py-6 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-1 gap-4 items-center px-10 py-6">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.1 }}
              className="text-4xl font-bold text-gray-900"
            >
              {title.indexOf(" ") === -1 ? (
                <span className="text-yellow-500">{title}</span>
              ) : (
                <>
                  <span className="text-yellow-500">
                    {title.slice(0, title.indexOf(" "))}
                  </span>
                  <span className="text-green-600">
                    {title.slice(title.indexOf(" "))}
                  </span>
                </>
              )}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: false, amount: 0.2 }}
              className="mt-4 text-lg font-semibold text-gray-800"
            >
              Willowood Chemicals, is an affiliate of Willowood Group, a leading
              global producer and distributor of crop protection chemicals.
            </motion.p>
            <motion.p
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6, delay: 0.3 }}
             viewport={{ once: false, amount: 0.2 }}
              className="mt-3 text-gray-700"
            >
              With over 30+ years of experience and a loyal customer base in
              over 50 countries, Willowood is one of the most trusted names in
              agrochemicals today.
            </motion.p>
            <motion.p
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6, delay: 0.3 }}
             viewport={{ once: false, amount: 0.2 }}
              className="mt-3 text-gray-700"
            >
              The group currently operates offices in India, USA, Hong Kong,
              China and Kenya. Products include insecticides, herbicides,
              fungicides, biopesticides and plant growth regulators. Willowood
              places a strategic emphasis on innovation-driven solutions, using
              in-house R&D capabilities and a committed team of agronomists to
              fuel a continuous pipeline of new products.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-3 text-gray-700"
            >
              Since its inception in 2006, the company has grown from strength
              to strength, recently earning a spot in the Top 20 Agrochemical
              Companies of India, and named the 2nd fastest growing agrochemical
              company in India by Agropages Magazine.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              viewport={{ once: true }}
              className="mt-3 text-gray-700"
            >
              Willowood empowers farmers worldwide with high-quality products
              that help protect and grow crops, contributing to a more
              sustainable future.
              <a href="#" className="text-green-600 hover:underline">
                {" "}
                Willowood Team
              </a>
              .
            </motion.p>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: false, amount: 0.2 }}
          className="w-full px-10"
        >
          <Image
            src={aboutUs}
            alt="Willowood Chemicals Building"
            className="rounded-lg shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
