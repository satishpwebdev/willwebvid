import React from 'react'
import Image from 'next/image'
import researchdev from "../../../../public/business/exportship.jpg";

const Exports = ({title}) => {
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
                 In parallel to its domestic business, Willowood is a global exporter of generic, proprietary and branded crop protection products, including insecticides, acaricides,
                  fungicides, weedicides and herbicides. Key markets include the USA, South America, Europe, Africa and the CIS Region.
                 </p>
                 <p className="mt-3 text-gray-700">
                 For a complete list of products that we currently offer for export, please click here.
                 </p>
                 <p className="mt-3 text-gray-700">
                 We can also develop custom or specialised formulations for our customers, 
                 and have the capability to manufacture EC, SC, SL, WP, WDG, EW, CS / ME, ZC and other formulation types.
                 </p>
                 <p className="mt-3 text-gray-700">
                 For more information, please email  sales@willowood.com or exports@willowood.com with the heading “Exports Enquiry”.
                 </p>
               </div>
             </div>
           </div>
         </section>
   </>
  )
}

export default Exports
