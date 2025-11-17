import React from "react";
import Image from "next/image";
import pmf from "../../../../public/awards/agri.png";
import wcrc from "../../../../public/awards/wcrc.png";
import wcrcint from "../../../../public/awards/wcrcint.png";
import etacent from "../../../../public/awards/ettimes.jpg";
import etleader from "../../../../public/awards/Etleadership.png";
import agri from "../../../../public/awards/agri.png";
import skochaward from "../../../../public/awards/skochaward.png";

const awardsData = [
  {
    img: pmf,
    text: "PMFAI-SML Annual AGCHEM Award 2024 by Pesticides manufacturers & Formulations Association of India.",
  },
  {
    img: wcrc,
    text: "WCRC LEADERS award 2023 by WCRCINT.",
  },
  {
    img: wcrcint,
    text: "IDEASFEST 2023 award by WCRCINT.",
  },
  {
    img: pmf,
    text: "Award for outstanding innovation and chemical synthesis 2022 by PMFAI.",
  },
  {
    img: etacent,
    text: "Top Most Manufacturing Company award, 2022 by ET Ascent.",
  },
  {
    img: etleader,
    text: "ET Leadership Excellence Awards North 2022 in Agriculture and Agrochemical space by ET.",
  },

  {
    img: agri,
    text: "Agri business Summit & Agri Awards, ABSA 2021.",
  },
  {
    img: skochaward,
    text: "Winner of SKOCH Award gold category, 2019 ",
  },
];

const Awards = ({ title, meta, description, image }) => {
  return (
    <section className="container mx-auto py-12 px-6 bg-white">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {awardsData.map((award, index) => (
          <div
            key={index}
            className="flex items-center border border-green-300 rounded-lg p-4 shadow-sm"
          >
            <div className="w-24 h-24 relative flex-shrink-0">
              <Image
                src={award.img}
                alt="Award"
                className="rounded-full"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <p className="ml-4 text-gray-700">{award.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Awards;
