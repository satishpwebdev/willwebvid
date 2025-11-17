import Image from "next/image";
import ImageOne from '../../../../public/business/gbo.jpg'
import ImageTwo from '../../../../public/business/indigate.jpg'
import ImageThree from '../../../../public/business/cusnet.png'


const businessSegments = [
  {
    title: "Global Operations",
    image: ImageOne, 
    link: "#",
  },
  {
    title: "India Operations",
    image: ImageTwo, 
    link: "#",
  },
  {
    title: "Customer Network",
    image: ImageThree, 
    link: "#",
  },
 
];

const Global = ({title}) => {
  return (
    <section className="bg-white  text-black py-4 ">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 text-center">
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
        <p className="text-lg mb-6 text-center">Our primary business activities include:</p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6  px-4">
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
        </div>
      </div>
    </section>
  );
};

export default Global;
