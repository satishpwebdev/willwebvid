"use client"
import Image from "next/image";
import ImageOne from '../../../../public/business/tech-grade.jpg'
import ImageTwo from '../../../../public/business/Brand_Products.jpg'
import ImageThree from '../../../../public/business/toll-manufact.png'
import ImageFour from '../../../../public/business/research-deve.jpg'
import ImageFive from '../../../../public/business/exports.jpg'
import { motion } from "framer-motion";


const businessSegments = [
  {
    title: "Technical-Grade/Institutional Products",
    image: ImageOne, 
    link: "#",
  },
  {
    title: "Brand Products",
    image: ImageTwo, 
    link: "#",
  },
  {
    title: "Toll Manufacturing & Packaging",
    image: ImageThree, 
    link: "#",
  },
  {
    title: "Research & Development",
    image: ImageFour, 
    link: "#",
  },
  {
    title: "Exports",
    image: ImageFive, 
    link: "#",
  },
];

const BusinessSegments = ({title}) => {
  return (
    <section className="bg-white  text-black py-4 ">
      <div className="container mx-auto px-4">
        <motion.h2 
         initial={{ opacity: 0, y: 24 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 1.3, delay: 0.2 }}
        className="text-3xl font-bold mb-4 text-center">
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
         initial={{ opacity: 0, y: 24 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 1.3, delay: 0.3 }}
         className="text-lg mb-6 text-center">Our primary business activities in India include:</motion.p>
        
        <motion.div 
         initial={{ opacity: 0, y: 50 }}
         animate={{ opacity: 1, y: 10 }}
         transition={{ duration: 1.5, delay: 0.9 }}
        className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
          {businessSegments.map((segment, index) => (
            <a key={index} href={segment.link} className="group block shadow-lg rounded-lg overflow-hidden">
              <div className="relative w-full h-48">
                <Image src={segment.image} alt={segment.title} layout="fill" objectFit="cover" />
              </div>
              <div className="p-4 bg-white text-center">
                <h3 className="text-lg font-semibold">{segment.title}</h3>
                <span className="text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
              </div>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BusinessSegments;
