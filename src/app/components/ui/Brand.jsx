import React from "react";
import Image from "next/image";
import brand from "../../../../public/business/salcon.jpg";
const Brand = ({ title }) => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-gray-900  py-6">
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
            </h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="w-full">
            <Image
              src={brand}
              alt="Willowood Chemicals Building"
              width={700}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            
            <p className="mt-4 text-lg font-semibold text-gray-800">
            Willowood Chemicals Limited is headquartered in New Delhi.
            </p>
            <p className="mt-3 text-gray-700">
            Since its inception in 2012, it has grown to enjoy a pan-India presence,
            with regional marketing teams and more than 10000 direct dealers and distributors spread across over 20 Indian states.
            </p>
            <p className="mt-3 text-gray-700">
            Over the next few years, in addition to generics, it will focus increasingly on promoting its own range of 
            patented and proprietary products under the Willowood brand. To view a complete list of Willowood Brand products, please visit our
            <a href="#" className="text-green-600 hover:underline">
                {" "}
                Products page
              </a>
              .
            </p>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brand;
