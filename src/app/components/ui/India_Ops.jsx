import React from "react";
import Image from "next/image";
import brand from "../../../../public/business/map-willow.jpg";

const IndiaOps = ({ title }) => {
  return (
    <section className="py-12 bg-white px-4">
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
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <div className="w-full">
            <Image
              src={brand}
              alt="Willowood Chemicals Building"
              width={450}
              height={400}
              className="rounded-lg shadow-sm"
            />
          </div>
          <div>
            
            <p className="mt-4 text-lg font-semibold text-gray-800">
            In the past decade, Willowood has burgeoned into one of the largest players in the Indian agrochemicals market, 
            with a network that extends over 20 states and over 10000+ dealers and distributors across the country.
            </p>
            <p className="mt-3 text-gray-700">
            Willowood India has a direct team strength of more than 400 qualified professionals across departments along with a seasonal team of 700+ field support staff. Our head offices in Kolkata and Delhi handle the bulk of our finance, marketing & regulatory operations,
             while regional offices present in most states support sales at the distributor and dealer level.
            </p>
            <p className="mt-3 text-gray-700">
            We have 3 manufacturing facilities and an 
            R&D facility based in Vadodara, as well as 29 strategically placed warehouses around India.
            </p>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndiaOps;
