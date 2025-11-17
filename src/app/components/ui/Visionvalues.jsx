import React from "react";
import Image from "next/image";
import Head from "next/head";

const Visionvalues = ({ title, meta, description, image }) => {
  return (
    <>
      <section className=" container bg-white mx-auto flex flex-col p-1 py-4">
        <>
          <div className="relative h-[40vh] flex items-center justify-center text-center">
            <div className="absolute inset-0 bg-gray-200 z-10 rounded-md" />
            {/* <Image
          src="/farm-field.jpg"
          alt="Farm field"
          fill
          className="object-cover"
          priority
        /> */}
            <div className="relative z-20 text-white px-4 max-w-4xl">
              <h1 className="text-4xl  font-bold mb-6 tracking-wide md:text-5xl">
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
              </h1>
              <p className="text-lg md:text-3xl text-black">
                To sustainably feed the world’s growing population using
                research-based, integrated solutions to crop protection.
              </p>
            </div>
          </div>

          <section className="py-10 bg-gray-50 px-4 sm:px-6 lg:px-2">
            <div className="max-w-7xl mx-auto grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-4">
              <div className="bg-yellow-500 p-6 rounded-xl shadow-lg transition-all duration-300 hover:-translate-y-2">
                <i className="fas fa-lightbulb text-4xl text-green-600 mb-6" />
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Innovation
                </h3>
                <p className="text-gray-600">
                  Cultivate an environment of collaboration in which everyone is
                  comfortable sharing his or her thoughts and ideas. Build an
                  environment in which people can work freely to devise bold and
                  creative solutions to real world problems.
                </p>
              </div>

              <div className="bg-green-700 p-8 rounded-xl shadow-lg transition-all duration-300 hover:-translate-y-2">
                <i className="fas fa-flag text-4xl text-green-600 mb-6" />
                <h3 className="text-2xl font-bold text-white-800 mb-4">
                  Leadership
                </h3>
                <p className="text-white-600">
                  Lead by example to encourage hard work, ambition and
                  enthusiasm in our employees. Delegate, empower and offer
                  challenges and rewards to foster growth.
                </p>
              </div>

              <div className="bg-yellow-500 p-8 rounded-xl shadow-lg transition-all duration-300 hover:-translate-y-2">
                <i className="fas fa-award text-4xl text-green-600 mb-6" />
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Professionalism
                </h3>
                <p className="text-gray-600">
                  Show respect for our stakeholders by adhering to deadlines and
                  consistently delivering at or above the promised quality of
                  service.
                </p>
              </div>

              <div className="bg-green-700 p-8 rounded-xl shadow-lg transition-all duration-300 hover:-translate-y-2">
                <i className="fas fa-hand-holding-heart text-4xl text-green-600 mb-6" />
                <h3 className="text-2xl font-bold text-white-800 mb-4">
                  Responsibility
                </h3>
                <p className="text-white-600">
                  Practice a culture of integrity, accountability and
                  sustainability.
                </p>
              </div>
            </div>
          </section>
        </>
      </section>
    </>
  );
};

export default Visionvalues;
