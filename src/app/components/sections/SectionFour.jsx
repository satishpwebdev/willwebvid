// "use client";

// import Image from "next/image";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// import oldman from "../../../public/oldman1.jpg";
// import lady from "../../../public/lady.jpg";
// import fruit from "../../../public/freshfruit.jpg";

// const projects = [
//   { title: "Chicken Farm", image: oldman, description: "Chicken Farm Description " },
//   { title: "Easy Harvesting", image: lady, description: "Easy Harvesting Description" },
//   { title: "Organic Solutions", image: fruit,  description: "Organic Solutions Description" },
//   { title: "Fresh Products", image: fruit, description: "Fresh Products Description" },
//   { title: "Easy Harvesting", image: lady, description: "Easy Harvesting Description" },
//   { title: "Organic Solutions", image: fruit, description: "Organic Solutions Description" },
//   { title: "Fresh Products", image: fruit, description: "Fresh Products Description" },
// ];

// const SectionFour = () => {
//   return (
//     <section className="pt-2 pb-16 bg-white">
//       <div className="container mx-auto px-6">
//         <h3 className="text-center text-green-600 font-semibold uppercase mb-2">
//           Explore Projects
//         </h3>
//         <h2 className="text-center text-3xl font-bold text-gray-900">
//           Recently Completed Projects
//         </h2>

//         <Swiper
//           modules={[Navigation, Pagination, Autoplay]}
//           spaceBetween={20}
//           slidesPerView={1}
//           breakpoints={{
//             640: { slidesPerView: 1 },
//             768: { slidesPerView: 2 },
//             1024: { slidesPerView: 3 },
//             1280: { slidesPerView: 4 },
//           }}
//           autoplay={{ delay: 2000, disableOnInteraction: false }}
//           className="mt-10"
//         >
//           {projects.map((project, index) => (
//             <SwiperSlide key={index}>
//               <div className="relative cursor-pointer rounded-xl overflow-hidden shadow-lg">
//                 <Image
//                   src={project.image}
//                   alt={project.title}
//                   width={500}
//                   height={300}
//                   className="w-full h-72 object-cover"
//                 />
//                 <div className="absolute  bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
//                   <h3 className="text-white font-semibold text-lg">
//                     {project.title}
//                   </h3>
//                   <h2 className="text-white font-semibold text-lg">
//                     {project.title}
//                   </h2>
//                 </div>
//                 <button className="absolute bottom-4 right-4 bg-green-500 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-green-600 transition">
//                   +
//                 </button>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </section>
//   );
// };

// export default SectionFour;


"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import product1 from "../../../../public/productone.jpg";
import product2 from "../../../../public/product2.png";
import product3 from "../../../../public/product3.jpg";
import fruit from "../../../../public/freshfruit.jpg";

const projects = [
  { title: "Chicken Farm", image: product1, description: "Chicken Farm Description bgverbgerb rjgberjbg niegiewbgw" },
  { title: "Easy Harvesting", image: product2, description: "Easy Harvesting Description vjbrjvbe ewgbewugb beugbwuegbe" },
  { title: "Organic Solutions", image: product3, description: "Organic Solutions Description ewgbewugb beugbwuegbe ewgbewugb beugbwuegbe" },
  { title: "Fresh Products", image: product1, description: "Fresh Products Description ewgbewugb beugbwuegbe ewgbewugb beugbwuegbe" },
  { title: "Easy Harvesting", image: product2, description: "Easy Harvesting Description ewgbewugb beugbwuegbe ewgbewugb beugbwuegbe" },
  { title: "Organic Solutions", image: product3, description: "Organic Solutions Description ewgbewugb beugbwuegbe ewgbewugb beugbwuegbe" },
  { title: "Fresh Products", image: fruit, description: "Fresh Products Description ewgbewugb beugbwuegbe ewgbewugb beugbwuegbe" },
];

const SectionFour = () => {
  return (
    <section className="pt-2 pb-16 bg-white">
      <div className="container mx-auto px-6">
        <h3 className="text-center text-green-600 font-semibold uppercase mb-2">
          Explore Products
        </h3>
        <h2 className="text-center text-3xl font-bold text-gray-900">
          Recently Launched Products
        </h2>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          className="mt-10"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <div className="relative cursor-pointer rounded-xl overflow-hidden shadow-lg group">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="w-full h-72 object-cover"
                />
                <div className="absolute bottom-6 left-0 right-0  p-4 z-10 group-hover:-translate-y-10 duration-300">
                  <h3 className="text-white font-semibold text-lg">
                    {project.title}
                  </h3>
                </div>
                <button className="absolute bottom-4 right-4 bg-green-500 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-green-600 transition z-10">
                  +
                </button>
                <div className="absolute -bottom-2 left-0 right-0 bg p-4 w-full transform transition-transform duration-300 translate-y-full group-hover:translate-y-0">
                  <p className="text-white">{project.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default SectionFour;