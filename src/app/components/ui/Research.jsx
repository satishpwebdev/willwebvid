import React from "react";
import Image from "next/image";
import researchdev from "../../../../public/business/researchdev.jpg";

const Research = ({ title }) => {
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
              <p className="mt-4 text-lg font-semibold text-gray-800">
                Based in Vadodara, Willowood’s newly launched R&D facility
                handles the bulk of in-house testing and R&D needs for its
                various business functions.
              </p>
              <p className="mt-3 text-gray-700">
                With state-of-the-art equipment and a highly experienced team of
                scientists, technicians and agronomists, the facility is a
                valuable step towards Willowood’s goal of becoming an innovation
                leader and fully-integrated provider of crop protection.
              </p>
              <p className="mt-3 text-gray-700">
                It is NABL (ISO 17025) certified and GLP approved.
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
    </>
  );
};

export default Research;
