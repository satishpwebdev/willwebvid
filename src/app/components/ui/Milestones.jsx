export default function Milestones({title}) {
  const milestones = [
    {
      year: 2019,
      events: [
        "Willowood embarks on a journey of transformation with launch of its new logo & new tagline “Harvesting Dreams”.",
      ],
    },
    {
      year: 2018,
      events: [
        "Acquired land for a Technical Plant in Dahej, with a target for completion by 2020.",
      ],
    },
    {
      year: 2017,
      events: [
        "Shreeji Pesticides, Willowood’s manufacturing facility, received NABL accreditation.",
      ],
    },
    {
      year: 2016,
      events: [
        'Formation of a dedicated CSR wing, with the introduction of projects like "Paryavaran" to promote sustainable agroforestry and "We Care" to provide free health checkups and awareness camps in rural areas.',
      ],
    },
    {
      year: 2015,
      events: [
        "Willowood launches new state-of-the-art R&D Centre in Vadodara",
      ],
    },
    {
      year: 2013,
      events: [
        "Shreeji Unit II begins operations",
        "Willowood hosts its first annual conference in Vadodara",
      ],
    },
    {
      year: 2012,
      events: [
        "Operations commence in Africa and Middle East",
        'Launch of mobile "Clinical Van Program" to provide free soil testing and crop protection advice to farmers across India.',
      ],
    },
  ];

  return (
    <div className="container mx-auto px-12 py-8 bg-white">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">
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

      <div className="relative border-l-2 border-gray-200 pl-8">
        {milestones.map((milestone, index) => (
          <div key={index} className="relative mb-8">
            {/* <div className="absolute w-4 h-4 bg-blue-500 rounded-full left-[1px] top-20" /> */}
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              {milestone.year}
            </h2>

            <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-100">
              <ul className="list-disc pl-5 space-y-3">
                {milestone.events.map((event, i) => (
                  <li key={i} className="text-gray-600 leading-relaxed">
                    {event}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
