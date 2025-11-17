import Image from "next/image";
import BannerLeave from "../../../../public/bigleave.png";
import Leave from "../../../../public/smallleave.png";
const SectionOne = () => {
  return (
    <section className=" container mx-auto flex flex-col lg:flex-row items-center justify-between px-6 lg:px-6 py-12">
      <div className="relative w-full lg:w-1/2 flex justify-center items-center">
        <div className="relative z-10 w-[300px] h-[300px] lg:w-[600px] lg:h-[600px]  ">
          <Image
            src={BannerLeave}
            alt="Farm"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>

      {/* Right Side Content */}
      <div className="w-full lg:w-1/2 md:ml-12 mt-10 lg:mt-0 text-center lg:text-left">
        <h3 className="text-green-800 font-semibold mb-6 uppercase text-md tracking-wide">
          About Willowood
        </h3>
        <h2 className="text-4xl md:text-6xl font-bold text-gray-900">
          Crop Protection & Agrochemicals
        </h2>
        <p className="mt-4 text-gray-600">
          Willowood Chemicals, is an affiliate of Willowood Group, a leading
          global producer and distributor of crop protection chemicals. With
          over 30+ years of experience and a loyal customer base in over 50
          countries, Willowood is one of the most trusted names in agrochemicals
          today.

          The group currently operates offices in India, USA, Hong Kong, China and Kenya. Products include insecticides, herbicides, fungicides, biopesticides and plant growth regulators. Willowood places a strategic emphasis on innovation-driven solutions, using in-house R&D capabilities and a committed team of agronomists to fuel a continuous pipeline of new products.

Since its inception in 2006, the company has grown from strength to strength, recently earning a spot in the Top 20 Agrochemical Companies of India, and named the 2nd fastest growing agrochemical company in India by Agropages Magazine.
        </p>

        {/* Features */}
        <div className="flex flex-col lg:flex-row gap-4 mt-6">
          <div className="flex items-center gap-4">
            <div className="bg-green-200 text-white px-3 py-2.5 rounded-full">
              🍃
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">
                Agriculture Solutions
              </h4>
              <p className="text-gray-500 text-sm">
                Effective insecticides, herbicides, and fungicides for crops.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-green-200 text-white px-3 py-2.5 rounded-full">
              🥦
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">
                Research & Innovation
              </h4>
              <p className="text-gray-500 text-sm">
                Leading-edge R&D for sustainable agriculture..
              </p>
            </div>
          </div>
        </div>

        <p className="mt-6 text-gray-600">
          Willowood empowers farmers worldwide with high-quality products that
          help protect and grow crops, contributing to a more sustainable
          future.
        </p>

        {/* Signature & Button */}
        <div className="mt-8 flex flex-col lg:flex-row items-center gap-4">
          <span className="text-green-700 font-signature text-lg">
            Willowood Team
          </span>
          {/* <Button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700">Explore More</Button> */}
        </div>
      </div>
    </section>
  );
};

export default SectionOne;
