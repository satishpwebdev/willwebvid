import Image from "next/image";

export default function CustomerNetwork({ title }) {
  const regions = [
    {
      name: "Asia",
      countries: [
          { name: "India", flag: "/flags/india.png" },
        { name: "Bangladesh", flag: "/flags/bangladesh.png" },
        { name: "China", flag: "/flags/china.png" },
        { name: "Malaysia", flag: "/flags/malesia.png" },
        { name: "Pakistan", flag: "/flags/pakistan.png" },
        { name: "Philippines", flag: "/flags/phillipin.png" },
        { name: "Kazakhstan", flag: "/flags/kajjakistan.png" },
        { name: "Kyrgyzstan", flag: "/flags/kyrgyzstan.png" },
        { name: "Korea", flag: "/flags/koria.png" },
        { name: "Taiwan", flag: "/flags/taiwan.png" },
        { name: "Thailand", flag: "/flags/thailand.png" },
        { name: "Uzbekistan", flag: "/flags/ujebekistan.png" },
        { name: "Vietnam", flag: "/flags/viyatname.png" },
      ],
    },
    {
      name: "Middle East & Africa",
      countries: [
        { name: "Algeria", flag: "/flags/algeria.png" },
        { name: "Egypt", flag: "/flags/ejecpt.png" },
        { name: "Ethiopia", flag: "/flags/ethepia.png" },
        { name: "Iraq", flag: "/flags/iraq.png" },
        { name: "Israel", flag: "/flags/isrile.png" },
        { name: "Jordan", flag: "/flags/jardan.png" },
        { name: "Lebanon", flag: "/flags/lebnon.png" },
        { name: "Kenya", flag: "/flags/kenya.png" },
        { name: "Libya", flag: "/flags/linya.png" },
        { name: "Morocco", flag: "/flags/moroko.png" },
      ],
    },
  ];

  return (
    <div className="container bg-white mx-auto p-6 px-6">
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
      <p className="text-gray-600 text-lg text-left mb-4">
        Our customer network extends across over 50 countries around the globe,
        including:
      </p>

      {regions.map((region, index) => (
        <div key={index} className="mb-8">
          <h2 className="text-green-600 text-xl font-semibold mb-4 px-4">
            {region.name}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
            {region.countries.map((country, i) => (
              <div key={i} className="flex flex-col items-center space-y-">
                <div className="w-24 h-24 bg-white rounded-full hover:shadow-lg hover:-translate-y-1 transform-gpu my-4 hover:cursor-pointer shadow-lg flex items-center justify-center border">
                  <img
                    src={country.flag}
                    alt={country.name}
                    className="w-24 h-24 rounded-full"
                  />
                </div>
                <p className="text-black font-medium">{country.name}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
