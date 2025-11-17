import React from 'react'
import Image from "next/image";
import aboutUs from "../../../../public/business/map-new.png";

const GlobalOps = ({title}) => {
  return (
    <>
    <section className="py-6 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-1 gap-4 items-center px-10 py-6">
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
                Willowood has major operating offices in 5 locations across the globe. 
                Each office functions as an individual profit centre and focuses on different business segments, but together they form the integrated business model that has contributed to Willowood’s success.

                </p>
                <p className="mt-3 text-gray-700">
                  With over 30+ years of experience and a loyal customer base in
                  over 50 countries, Willowood is one of the most trusted names in
                  agrochemicals today.
                </p>
                <p className="mt-3 text-gray-700">
                  The group currently operates offices in India, USA, Hong Kong,
                  China and Kenya. Products include insecticides, herbicides,
                  fungicides, biopesticides and plant growth regulators. Willowood
                  places a strategic emphasis on innovation-driven solutions, using
                  in-house R&D capabilities and a committed team of agronomists to
                  fuel a continuous pipeline of new products.
                </p>
    
                <p className="mt-3 text-gray-700">
                  Since its inception in 2006, the company has grown from strength
                  to strength, recently earning a spot in the Top 20 Agrochemical
                  Companies of India, and named the 2nd fastest growing agrochemical
                  company in India by Agropages Magazine.
                </p>
                <p className="mt-3 text-gray-700">
                  Willowood empowers farmers worldwide with high-quality products
                  that help protect and grow crops, contributing to a more
                  sustainable future.
                  <a href="#" className="text-green-600 hover:underline">
                    {" "}
                    Willowood Team
                  </a>
                  .
                </p>
              </div>
            </div>
            <div className="relative w-full px-10">
              <Image
                src={aboutUs}
                alt="Willowood Chemicals Building"
                className="rounded-lg shadow-lg"
              />
              {/* <div className='absolute  top-24   left-12 text-black'>
                <h2>Willowood</h2>
              </div> */}
            </div>
          </div>
        </section>
    </>
  )
}

export default GlobalOps
