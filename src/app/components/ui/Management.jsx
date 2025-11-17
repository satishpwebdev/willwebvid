
// import Image from "next/image";

// const ManagementTeam = () => {
//   return (
//     <section className="container bg-white mx-auto px-4 py-10">
//       {/* Section Title */}
//       <h2 className="text-3xl font-bold mb-8">Management Team</h2>

//       {/* Founder Section */}
//       <div className="flex flex-col md:flex-row bg-gray-100 rounded-lg overflow-hidden shadow-md mb-6">
//         {/* Text Content */}
//         <div className="md:w-2/3 p-6">
//           <h3 className="text-lg italic text-green-700 font-medium">Founder</h3>
//           <h4 className="text-2xl font-bold mt-2">MR. VIJAY MUNDHRA</h4>
//           <p className="text-gray-700 mt-4 text-sm leading-relaxed">
//             Vijay founded Willowood Limited as a trading Company in Hong Kong in 1992, and has since spearheaded 
//             its evolution to become a globally respected company. Over the past decade, he has stood as a pillar 
//             for Willowood group and his visionary abilities have helped the group's transition from a trading 
//             company into a research-based and value-added manufacturing business.
//           </p>
//           <p className="text-gray-700 text-sm mt-2">
//             He remains the key guiding force to propel Willowood’s continuous growth through strategies to 
//             increase its global footprint by increasing geographical presence and securing customers in more 
//             than 50 countries worldwide.
//           </p>
//         </div>
//         {/* Image */}
//         <div className="md:w-1/3">
//           <Image
//             src="/images/vijay-mundhra.jpg" // Replace with actual image path
//             alt="Vijay Mundhra"
//             width={300}
//             height={300}
//             className="w-full h-full object-cover"
//           />
//         </div>
//       </div>

//       {/* Managing Director Section */}
//       <div className="flex flex-col md:flex-row-reverse bg-gray-200 rounded-lg overflow-hidden shadow-md">
//         {/* Text Content */}
//         <div className="md:w-2/3 p-6">
//           <h3 className="text-lg italic text-green-700 font-medium">Managing Director</h3>
//           <h4 className="text-2xl font-bold mt-2">MR. PARIKSHIT MUNDHRA</h4>
//           <p className="text-gray-700 mt-4 text-sm leading-relaxed">
//             Parikshit joined and co-founded Willowood India in 2007. He has since led the company from strength to 
//             strength, overseeing its emergence as the fastest growing agrochemical company in India. His business 
//             intelligence, bold thinking, and motivating personality have been the cornerstones of Willowood India’s 
//             phenomenal success.
//           </p>
//           <p className="text-gray-700 text-sm mt-2">
//             As Managing Director, Parikshit oversees the overall functioning of Willowood India. He holds an 
//             Honors degree in Business and Commerce from St. Xavier’s College, Kolkata.
//           </p>
//         </div>
//         {/* Image */}
//         <div className="md:w-1/3">
//           <Image
//             src="/images/parikshit-mundhra.jpg" 
//             alt="Parikshit Mundhra"
//             width={300}
//             height={300}
//             className="w-full h-full object-cover"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ManagementTeam;



import Image from "next/image";

import vijay_ji from '../../../../public/team/vijay.jpg'
import hitesh_ji from '../../../../public/team/hitesh.png'
import jitenrda_ji from '../../../../public/team/jitendra.jpg'
import neeraj_ji from '../../../../public/team/neeraj.jpg'
import parishit_ji from '../../../../public/team/parikshit.png'
import shahung_sir from '../../../../public/team/shahunjpg.jpg'

const teamMembers = [
  {
    name: "MR. VIJAY MUNDHRA",
    role: "Founder",
    image: vijay_ji,
    description: `Vijay founded Willowood Limited as a trading Company in Hong Kong in 1992, 
      and has since spearheaded its evolution to become a globally respected company. 
      Over the past decade, he has stood as a pillar for Willowood group and his 
      visionary abilities have helped the group's transition from a trading company into 
      a research-based and value-added manufacturing business.`,
    extra: `He remains the key guiding force to propel Willowood’s continuous growth through 
      strategies to increase its global footprint by increasing geographical presence and 
      securing customers in more than 50 countries worldwide.`,
  },
  {
    name: "MR. PARIKSHIT MUNDHRA",
    role: "Managing Director",
    image: parishit_ji,
    description: `Parikshit joined and co-founded Willowood India in 2007. He has since led the company 
      from strength to strength, overseeing its emergence as the fastest growing agrochemical 
      company in India. His business intelligence, bold thinking, and motivating personality 
      have been the cornerstones of Willowood India’s phenomenal success.`,
    extra: `As Managing Director, Parikshit oversees the overall functioning of Willowood India. 
      He holds an Honors degree in Business and Commerce from St. Xavier’s College, Kolkata.`,
  },
  {
    name: "MR. JITENDRA MOHAN",
    role: "Chief Operating Officer",
    image: jitenrda_ji,
    description: `With over 26 years of experience in the agrochemicals industry, Jitendra brings to Willowood the versatile combination of
     scientific knowledge and business acumen. Since joining Willowood in 2007, he has played an instrumental role in the company’s expansion into different business verticals, as well as the growth of its customer base. As Chief Operations Officer, he looks after the key functions of the group, handling Willowood’s Institutional Business, Manufacturing Operations, Brand Business and Regulatory & IP Affairs.`,
    extra: `Jitendra holds a Masters Degree in Agrochemicals from the University of Delhi, a specialization in 
    Residue Chemistry from Jerusalem University and an MBA from Bharti Vidyapeeth in Delhi.`,
  },
  {
    name: "MR. HITESH BAGRI",
    role: "DIRECTOR",
    image: hitesh_ji,
    description: `Hitesh joined Willowood India in 2009 and, while working through different divisions, rapidly made an impression for his energy and acumen. He currently heads Willowood’s brand business in Delhi, managing a team of over 200 people. As part of his role, he has led numerous 
    initiatives to improve the efficiency of the brand business and extend the reach of the Willowood name to every corner of India.`,
    extra: `As the youngest member in the Willowood management team, Hitesh is known for his excellent management skills and collaborative leadership style. Prior to joining Willowood, Hitesh graduated with a Business degree from HR College of 
    Commerce and Economics in Mumbai and completed his CFA (Chartered Financial Analyst) designation from ICFAI University.`,
  },
  {
    name: "MR. Neeraj Mundhra",
    role: "Chief Financial Officer",
    image: neeraj_ji,
    description: `Neeraj joined Willowood India in 2009 and earned a reputation for his diligence and his penchant for numbers. Neeraj holds an MBA in Finance from SIBAR, Pune, as well as Post Graduate Diplomas in Logistics, International Business and Foreign Trade from the University of Pune. He has an extensive background in finance and currently
     looks after financial strategic planning, accounts, taxation and banking relationships for the Group Companies.`,
    extra: `He has played a leading role in building good governance practices and overseeing sound management of the company finances.`,
  },
  {
    name: "Mr. Shen Shao Jun",
    role: "Chief Financial Officer",
    image: shahung_sir,
    description: `Shao Jun joined Willowood China in 2002 and quickly rose up the ranks to reach the position of General Manager. He has been instrumental in creating deep ties with 
    various Chinese manufacturers while establishing an excellent name recognition for Willowood.`,
    extra: `Shao Jun has worked at the Chemical Products Inspection Station of Zhejiang Province and has deep knowledge of product quality and required specifications. His background as a chemistry major 
    from Zhejiang University of Technology provide him the sound credentials for Willowood’s supply chain management.`,
  },
];

const ManagementTeam = ({title}) => {
  return (
    <section className="container bg-white mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-8 text-black">
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

      {teamMembers.map((member, index) => (
        <div
          key={index}
          className={`flex flex-col md:flex-row ${
            index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
          } bg-gray-100 rounded-lg overflow-hidden shadow-md mb-6`}
        >
          <div className="md:w-2/3 p-6">
            <h3 className="text-lg italic text-green-700 font-medium">{member.role}</h3>
            <h4 className="text-2xl text-black font-bold mt-2">{member.name}</h4>
            <p className="text-gray-700 mt-4 text-sm leading-relaxed">{member.description}</p>
            <p className="text-gray-700 text-sm mt-2">{member.extra}</p>
          </div>

          <div className="md:w-1/3">
            <Image
              src={member.image}
              alt={member.name}
              width={300}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      ))}
    </section>
  );
};

export default ManagementTeam;

