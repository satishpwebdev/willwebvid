// import { dynamicRoutes } from "../constants";
// import { notFound } from "next/navigation";
// import Image from "next/image";
// import backgroundImg from "../../../public/willowood-banner.jpg";
// import dynamic from "next/dynamic";
// const Layouts = dynamic(() => import("../components/ui/Layouts"));
// import { pageContent } from "@/lib/pageContent";


// export function generateStaticParams() {
//   return dynamicRoutes.map((route) => ({
//     slug: route === "/" ? [] : route.split("/").filter(Boolean),
//   }));
// }

// export function generateMetadata({ params }) {
//   const pageTitle = params.slug?.join(" ").replace(/-/g, " ") || "Page";
//   return {
//     title: `${pageTitle} | Willowood`,
//     description: `Explore ${pageTitle} at Willowood. Find information about ${pageTitle.toLowerCase()}.`,
//     openGraph: {
//       title: `${pageTitle} | Willowood`,
//       description: `Learn more about ${pageTitle}.`,
//     },
//   };
// }

// export default function DynamicPage({ params }) {
//   const slugPath = `/${params.slug?.join("/")}`;

//   if (!dynamicRoutes.includes(slugPath)) {
//     return notFound();
//   }

//   const breadcrumb = [
//     { name: "Home", href: "/" },
//     ...params.slug.map((segment, index) => ({
//       name: segment.replace(/-/g, " "),
//       href: `/${params.slug.slice(0, index + 1).join("/")}`,
//     })),
//   ];


//   console.log("PageContent", pageContent.title)

//   return (
//     <main className="max-w-full mx-auto ">
//       <div className="relative w-full h-[300px] flex items-center justify-center text-white">
//         <div className="absolute inset-0">
//           <Image
//             src={backgroundImg}
//             alt="Willowood"
//             layout="fill"
//             objectFit="cover"
//             className="brightness-20"
//           />
//         </div>

//         <div className="relative z-10 text-center">
//           <h1 className="text-4xl font-bold capitalize">
//             {params.slug?.[params.slug.length - 1]}
//           </h1>
//           <nav className="mt-2">
//             <ul className="flex items-center justify-center space-x-2 text-sm">
//               {breadcrumb.map((item, index) => (
//                 <li key={index} className="flex items-center">
//                   {item.href ? (
//                     <a
//                       href={item.href}
//                       className="text-gray-300 hover:text-white transition"
//                     >
//                       {item.name}
//                     </a>
//                   ) : (
//                     <span className="text-white">{item.name}</span>
//                   )}
//                   {index < breadcrumb.length - 1 && (
//                     <span className="mx-1">›</span>
//                   )}
//                 </li>
//               ))}
//             </ul>
//           </nav>
//         </div>
//         {pageContent && (
//         <Layouts
//           title={pageContent.title}
//           content={pageContent.content}
//           sectionType={pageContent.sectionType}
//         >
//           {slugPath}
//         </Layouts>
//       )}
//       </div>
//     </main>
//   );
// }

// import { dynamicRoutes } from "../constants";
// import { notFound } from "next/navigation";
// import Image from "next/image";
// import backgroundImg from "../../../public/willowood-banner.jpg";
// import dynamic from "next/dynamic";
// import { pageContent } from "../../lib/pageContent";

// const Layouts = dynamic(() => import("../components/ui/Layouts"));  

// export function generateStaticParams() {
//   return dynamicRoutes.map((route) => ({
//     slug: route === "/" ? [] : route.split("/").filter(Boolean),
//   }));
// }

// export function generateMetadata({ params }) {
//   const pageTitle = params?.slug?.join(" ").replace(/-/g, " ") || "Page";
//   return {
//     title: `${pageTitle} | Willowood`,
//     description: `Explore ${pageTitle} at Willowood. Find information about ${pageTitle.toLowerCase()}.`,
//     openGraph: {
//       title: `${pageTitle} | Willowood`,
//       description: `Learn more about ${pageTitle}.`,
//     },
//   };
// }

// export default function DynamicPage({ params }) {
//   const slugArray = params.slug || [];
//   const slugPath = `/${slugArray.join("/")}`;

//   if (!dynamicRoutes.includes(slugPath)) {
//     return notFound();
//   }

//   const pageData = pageContent.find((page) => page.slug === slugPath);

//   if (!pageData) {
//     return notFound();
//   }

//   const breadcrumb = [
//     { name: "Home", href: "/" },
//     ...slugArray.map((segment, index) => ({
//       name: segment.replace(/-/g, " "),
//       href: `/${slugArray.slice(0, index + 1).join("/")}`,
//     })),
//   ];


//   return (
//     <main className="max-w-full mx-auto">
//       <div className="relative w-full h-[300px] flex items-center justify-center text-white">
//         <div className="absolute inset-0">
//           <Image
//             src={backgroundImg}
//             alt="Willowood"
//             layout="fill"
//             objectFit="cover"
//             className="brightness-20"
//           />
//         </div>

//         <div className="relative z-10 text-center">
//           <h1 className="text-4xl font-bold capitalize">
//             {slugArray[slugArray.length - 1] || "Home"}
//           </h1>
//           <nav className="mt-2">
//             <ul className="flex items-center justify-center space-x-2 text-sm">
//               {breadcrumb.map((item, index) => (
//                 <li key={index} className="flex items-center">
//                   <a
//                     href={item.href}
//                     className="text-gray-300 hover:text-white transition"
//                   >
//                     {item.name}
//                   </a>
//                   {index < breadcrumb.length - 1 && <span className="mx-1">›</span>}
//                 </li>
//               ))}
//             </ul>
//           </nav>
//         </div>
//       </div>

//       {pageData && (<Layouts
//         title={pageData?.title}
//         content={pageData?.content} 
//         bgColor = {pageData?.bgColor}
//         sectionType={pageData?.sectionType}
//       >
//       </Layouts>)}
//     </main>
//   );
// }


// import { dynamicRoutes } from "../constants";
// import { notFound } from "next/navigation";
// import Image from "next/image";
// import backgroundImg from "../../../public/willowood-banner.jpg";
// import dynamic from "next/dynamic";
// import { pageContent } from "../../lib/pageContent";
// import Head from "next/head";

// const Layouts = dynamic(() => import("../components/ui/Layouts"));

// export function generateStaticParams() {
//   return dynamicRoutes.map((route) => ({
//     slug: route === "/" ? [] : route.split("/").filter(Boolean),
//   }));
// }

// export function generateMetadata({ params }) {
//   const slugPath = `/${(params?.slug || []).join("/")}`;
//   const pageData = pageContent.find((page) => page.slug === slugPath);

//   if (!pageData) {
//     return {
//       title: "Page Not Found | Willowood",
//       description: "This page does not exist on Willowood.",
//     };
//   }

//   return {
//     title: `${pageData.title} | Willowood`,
//     description: pageData?.meta?.description ?? pageData?.content.slice(0, 150),
//     openGraph: {
//       title: `${pageData.title} | Willowood`,
//       description: pageData.content.slice(0, 200),
//     },
//     alternates: {
//       canonical: `https://yourdomain.com${slugPath}`,
//     },
//   };
// }

// export default function DynamicPage({ params }) {
//   const slugArray = params.slug || [];
//   const slugPath = `/${slugArray.join("/")}`;

//   if (!dynamicRoutes.includes(slugPath)) {
//     return notFound();
//   }

//   const pageData = pageContent.find((page) => page.slug === slugPath);
//   if (!pageData) {
//     return notFound();
//   }

//   const breadcrumb = [
//     { name: "Home", href: "/" },
//     ...slugArray.map((segment, index) => ({
//       name: segment.replace(/-/g, " "),
//       href: `/${slugArray.slice(0, index + 1).join("/")}`,
//     })),
//   ];

  
//   const breadcrumbSchema = {
//     "@context": "https://schema.org",
//     "@type": "BreadcrumbList",
//     "itemListElement": breadcrumb.map((item, index) => ({
//       "@type": "ListItem",
//       "position": index + 1,
//       "name": item.name,
//       "item": `https://yourdomain.com${item.href}`,
//     })),
//   };

//   return (
//     <main className="max-w-full mx-auto">
//       <Head>
//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
//         />
//       </Head>
//       <div className="relative w-full h-[300px] flex items-center justify-center text-white">
//         <div className="absolute inset-0">
//           <Image
//             src={backgroundImg}
//             alt="Willowood company banner showing nature"
//             layout="fill"
//             objectFit="cover"
//             className="brightness-20"
//           />
//         </div>

//         <div className="relative z-10 text-center">
//           <h1 className="text-4xl font-bold capitalize">{pageData.title}</h1>
//           <nav className="mt-2">
//             <ul className="flex items-center justify-center space-x-2 text-sm">
//               {breadcrumb.map((item, index) => (
//                 <li key={index} className="flex items-center">
//                   <a
//                     href={item.href}
//                     className="text-gray-300 hover:text-white transition"
//                   >
//                     {item.name}
//                   </a>
//                   {index < breadcrumb.length - 1 && <span className="mx-1">›</span>}
//                 </li>
//               ))}
//             </ul>
//           </nav>
//         </div>
//       </div>
//       {pageData && (
//         <Layouts
//           title={pageData.title}
//           content={pageData.content}
//           meta={pageData.meta}
//           bgColor={pageData.bgColor}
//           sectionType={pageData.sectionType}
//         />
//       )}
//     </main>
//   );
// }




// import { dynamicRoutes } from "../constants";
// import Image from "next/image";
// import backgroundImg from "../../../public/willowood-banner.jpg";
// import dynamic from "next/dynamic";
// import { pageContent } from "../../lib/pageContent";
// import Head from "next/head";

// const Layouts = dynamic(() => import("../components/ui/Layouts"));

// export function generateStaticParams() {
//   return dynamicRoutes.map((route) => ({
//     slug: route === "/" ? [] : route.split("/").filter(Boolean),
//   }));
// }

// export function generateMetadata({ params }) {
//   const slugPath = `/${(params?.slug || []).join("/")}`;
//   const pageData = pageContent.find((page) => page.slug === slugPath);

//   if (!pageData) {
//     return {
//       title: "Page Not Found | Willowood",
//       description: "This page does not exist on Willowood.",
//     };
//   }

//   return {
//     title: `${pageData.title} | Willowood`,
//     description: pageData?.meta?.description ?? pageData?.content.slice(0, 150),
//     openGraph: {
//       title: `${pageData.title} | Willowood`,
//       description: pageData.content.slice(0, 200),
//     },
//     alternates: {
//       canonical: `https://yourdomain.com${slugPath}`,
//     },
//   };
// }

// export default function DynamicPage({ params }) {
//   const slugArray = params.slug || [];
//   const slugPath = `/${slugArray.join("/")}`;
//   const pageData = pageContent.find((page) => page.slug === slugPath);

//   const breadcrumb = [
//     { name: "Home", href: "/" },
//     ...slugArray.map((segment, index) => ({
//       name: segment.replace(/-/g, " "),
//       href: `/${slugArray.slice(0, index + 1).join("/")}`,
//     })),
//   ];

//   const breadcrumbSchema = {
//     "@context": "https://schema.org",
//     "@type": "BreadcrumbList",
//     "itemListElement": breadcrumb.map((item, index) => ({
//       "@type": "ListItem",
//       "position": index + 1,
//       "name": item.name,
//       "item": `https://yourdomain.com${item.href}`,
//     })),
//   };

//   return (
//     <main className="max-w-full mx-auto">
//       <Head>
//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
//         />
//       </Head>
      
      
//       <div className="relative w-full h-[300px] flex items-center justify-center text-white">
//         <div className="absolute inset-0">
//           <Image
//             src={backgroundImg}
//             alt="Willowood"
//             layout="fill"
//             objectFit="cover"
//             className="brightness-20"
//           />
//         </div>

//         <div className="relative z-10 text-center">
//           <h1 className="text-4xl font-bold capitalize">
//             {pageData ? pageData.title : "Page Not Found"}
//           </h1>
//           <nav className="mt-2">
//             <ul className="flex items-center justify-center space-x-2 text-sm">
//               {breadcrumb.map((item, index) => (
//                 <li key={index} className="flex items-center">
//                   <a
//                     href={item.href}
//                     className="text-gray-300 hover:text-white transition"
//                   >
//                     {item.name}
//                   </a>
//                   {index < breadcrumb.length - 1 && <span className="mx-1">›</span>}
//                 </li>
//               ))}
//             </ul>
//           </nav>
//         </div>
//       </div>

    
//       {pageData ? (
//         <Layouts
//           title={pageData.title}
//           content={pageData.content}
//           meta={pageData.meta}
//           bgColor={pageData.bgColor}
//           sectionType={pageData.sectionType}
//         />
//       ) : (
//         <div className="text-center py-20 bg-white text-black">
//           <h2 className="text-2xl font-semibold">Oops! Page Not Found</h2>
//           <p className="text-gray-500 mt-2">
//             The page you are looking for does not exist.
//           </p>
//           <a
//             href="/"
//             className="mt-4 inline-block px-4 py-2 text-gray-800 bg-yellow-400 rounded-full hover:text-white hover:bg-green-700"
//           >
//             Go Back Home
//           </a>
//         </div>
//       )}
//     </main>
//   );
// }





import { dynamicRoutes } from "../constants";
import Image from "next/image";
import backgroundImg from "../../../public/willowood-banner.jpg";
import dynamic from "next/dynamic";
import { pageContent } from "../../lib/pageContent";
import Head from "next/head";

const Layouts = dynamic(() => import("../components/ui/Layouts"));

export function generateStaticParams() {
  // return dynamicRoutes.map((route) => ({
  //   slug: route === "/" ? [] : route.split("/").filter(Boolean),
  // }));
  return dynamicRoutes
    .filter(route => route !== "/")
    .map((route) => ({
      slug: route.split("/").filter(Boolean),
    }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params; 
  const slugArray = resolvedParams.slug || [];
  const slugPath = `/${slugArray.join("/")}`;
  const pageData = pageContent.find((page) => page.slug === slugPath);

  if (!pageData) {
    return {
      title: "Page Not Found | Willowood",
      description: "This page does not exist on Willowood.",
    };
  }

  return {
    title: `${pageData.title} | Willowood`,
    description: pageData?.meta?.description ?? pageData?.content.slice(0, 150),
    openGraph: {
      title: `${pageData.title} | Willowood`,
      description: pageData.content.slice(0, 200),
    },
    alternates: {
      canonical: `https://yourdomain.com${slugPath}`,
    },
  };
}

export default async function DynamicPage({ params }) {
  const resolvedParams = await params; 
  const slugArray = resolvedParams.slug || [];
  const slugPath = `/${slugArray.join("/")}`;
  const pageData = pageContent.find((page) => page.slug === slugPath);

  const breadcrumb = [
    { name: "Home", href: "/" },
    ...slugArray.map((segment, index) => ({
      name: segment.replace(/-/g, " "),
      href: `/${slugArray.slice(0, index + 1).join("/")}`,
    })),
  ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumb.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `https://yourdomain.com${item.href}`,
    })),
  };

  return (
    <main className="max-w-full mx-auto">
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      </Head>

      <div className="relative w-full h-[300px] flex items-center justify-center text-white">
        <div className="absolute inset-0">
          <Image
            src={backgroundImg}
            alt="Willowood"
            layout="fill"
            objectFit="cover"
            className="brightness-20"
          />
        </div>

        <div className="relative z-10 text-center">
          <h1 className="text-4xl font-bold capitalize">
            {pageData ? pageData.title : "Page Not Found"}
          </h1>
          <nav className="mt-2">
            <ul className="flex items-center justify-center space-x-2 text-sm">
              {breadcrumb.map((item, index) => (
                <li key={index} className="flex items-center">
                  <a
                    href={item.href}
                    className="text-gray-300 hover:text-white transition"
                  >
                    {item.name}
                  </a>
                  {index < breadcrumb.length - 1 && (
                    <span className="mx-1">›</span>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {pageData ? (
        <Layouts
          title={pageData.title}
          content={pageData.content}
          meta={pageData.meta}
          bgColor={pageData.bgColor}
          sectionType={pageData.sectionType}
        />
      ) : (
        <div className="text-center py-20 bg-white text-black">
          <h2 className="text-2xl font-semibold">Oops! Page Not Found</h2>
          <p className="text-gray-500 mt-2">
            The page you are looking for does not exist.
          </p>
          <a
            href="/"
            className="mt-4 inline-block px-4 py-2 text-gray-800 bg-yellow-400 rounded-full hover:text-white hover:bg-green-700"
          >
            Go Back Home
          </a>
        </div>
      )}
    </main>
  );
}



