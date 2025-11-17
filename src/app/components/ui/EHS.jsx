
import Image from "next/image";
import EHSone from '../../../../public/ehs-1.jpg'
import EHStwo from '../../../../public/ehs-2.jpg'
const EHSPolicy = ({title}) => {
  return (
    <section className="container mx-auto px-4 py-10 bg-white">
      <h2 className="text-3xl text-black font-bold mb-8">
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

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <Image
            src={EHSone} 
            alt="Environment"
            width={600}
            height={400}
            className="w-full h-64 object-cover"
          />
          <div className="bg-green-700 text-white p-6">
            <h3 className="text-xl font-semibold mb-4">Our Pledge to The Environment</h3>
            <p className="text-sm leading-relaxed">
              We are committed to conducting our business activities such that they comply with all applicable 
              environmental regulations. As an organization, we are also committed to doing everything that 
              is reasonably within our power to minimize negative impact on the environment.
            </p>
            <p className="text-sm mt-2">
              To this end, we pledge to periodically review the environmental footprint of our business 
              activities, in a methodical and transparent manner, to encourage a culture of accountability 
              and continual improvement.
            </p>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <Image
            src={EHStwo} 
            alt="Employees"
            width={600}
            height={400}
            className="w-full h-64 object-cover"
          />
          <div className="bg-yellow-500 text-white p-6">
            <h3 className="text-xl font-semibold mb-4">Our Pledge to Our Employees</h3>
            <p className="text-sm leading-relaxed">
              We pledge to provide a safe and healthy work environment for all our employees and contracted 
              workers. This includes providing them with a clean, comfortable workspace and, where applicable, 
              safety gear and safety training, in accordance with regulatory requirements and industry practices.
            </p>
            <p className="text-sm mt-2">
              We pledge to keep in place, an accessible system for employees to report health and safety 
              violations, should they occur, so that they can be addressed appropriately at the supervisor or 
              management level.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EHSPolicy;
