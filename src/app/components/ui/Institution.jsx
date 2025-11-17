import React from "react";
import Image from "next/image";
import aboutUs from "../../../../public/business/inst.jpg";

const Institutional = ({ title, meta, description, image }) => {
  return (
    <section className="py-6   pb-6 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900">
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
            <p className="mt-4 text-lg font-semibold text-gray-800">
              Willowood Chemicals Ltd. (WCL) is a leading supplier of agrochemicals in the Indian market.
            </p>
            <p className="mt-3 text-gray-700">
              Headquartered in Kolkata, WCL is also the holding company for all of Willowood’s business activities in India.
            </p>
            <p className="mt-3 text-gray-700">
              It imports an extensive range of technical grade pesticides, under its own registrations, and supplies to over 150 companies across India. Additionally, it 
              <a href="#" className="text-green-600 hover:underline"> exports </a> 
              a range of generic and branded products globally.
            </p>
            <p className="mt-3 text-gray-700">
              For a complete list of Bulk and Technical Grade products offered, please view our  
              <a href="#" className="text-green-600 hover:underline"> Products page</a>.
            </p>
          </div>

          <div className="w-full">
            <Image
              src={aboutUs} 
              alt="Willowood Chemicals Building"
              width={700}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Institutional;
