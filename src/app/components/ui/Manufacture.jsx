import React from "react";
import Image from "next/image";
import researchdev from "../../../../public/business/toll.jpg";

const Manufacture = ({ title }) => {
  return (
    <>
      <section className="py-2 bg-white  pb-12">
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
                src={researchdev}
                alt="Willowood Chemicals Building"
                width={700}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <p className="mt-4 text-gray-800">
                Willowood Chemicals Ltd’s manufacturing facility specialises in
                the manufacturing and packaging of agrochemical products.
                Strategically located in the chemical manufacturing hub of
                Vadodara, between two major ports (Mundra and Kandla), WCL is
                readily accessible by sea and by road.
              </p>
              <p className="mt-3 text-gray-700">
                The facility caters to different product ranges including
                insecticides, herbicides and fungicides, spread over 4 separate
                wings, carefully designed to prevent cross-contamination. WCL is
                equipped to manufacture a variety of formulations, including EC,
                EW, SL, WP, SP, WDG, DF, SC, CS, ME, SE, SG, ZC, ZW and OD.
              </p>
              <p className="mt-3 text-gray-700">
                As a licensed manufacturer with over 30 years of experience, WCL
                has become synonymous with the highest standards of quality and
                professionalism. Modern facilities, relatively large production
                capacities, and highly customizable formulation and packaging
                options, make it the contract manufacturer of choice for a
                number of national and multinational companies.
              </p>
              <p className="mt-3 text-gray-700">
                WCL received NABL accreditation in 2017 and was also recently
                recognized by Dupont India for “Best Product Delivery in
                Insecticides and Fungicides”.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Manufacture;
