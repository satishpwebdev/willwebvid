import Image from "next/image";

import ISO15 from '../../../../public/certificates/ISO_9001_2015.jpg'
import ISO15_2 from '../../../../public/certificates/ISO_14001_2015.jpg'
import ISO15_3 from '../../../../public/certificates/ISO_45001_2018.jpg'
import NABL from '../../../../public/certificates/NABL.jpg'

const certifications = [
  {
    title: "ISO",
    number: "9001:2015",
    description: "For Quality Management Systems",
    image: ISO15,
  },
  {
    title: "ISO",
    number: "14001:2015",
    description: "For Environmental Management Systems",
    image: ISO15_2,
  },
  {
    title: "ISO OHSMS",
    number: "45001:2018",
    description: "For Occupational Health and Safety Management Systems",
    image: ISO15_3,
  },
  {
    title: "NABL",
    number: "",
    description: "",
    image: NABL,
  },
];

const Certifications = ({title}) => {
  return (
    <section className="container mx-auto px-4 py-10 bg-white">
      <h2 className="text-3xl font-bold text-center mb-8 text-black">
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {certifications.map((cert, index) => (
          <div key={index} className="text-center">
            <div className="border rounded-lg shadow-md p-4">
              <Image
                src={cert.image}
                alt={cert.title}
                width={200}
                height={200}
                className="w-full h-auto object-contain"
              />
            </div>
            <h3 className="text-green-700 font-bold text-lg mt-4">{cert.title}</h3>
            {cert.number && <p className="font-bold text-gray-800">{cert.number}</p>}
            {cert.description && (
              <p className="text-gray-600 text-sm">{cert.description}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
