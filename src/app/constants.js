export const navLinks = [
    { name: "Home", href: "/" },
    {
      name: "About",
      href: "/about",
      submenu: [
        { 
          name: "Company Overview", 
          href: "/about/company-overview", 
          // submenu: [
          //   { name: "History", href: "/about/history" },
          //   { 
          //     name: "Timeline", 
          //     href: "/about/timeline",
          //     submenu: [
          //       { name: "2020", href: "/about/timeline/2020",  submenu: [
          //           { name: "2020", href: "/about/2020" },
          //           { name: "2023", href: "/about/2023" }
          //         ] },
          //       { name: "2023", href: "/about/2023" }
          //     ],

          //   }
          // ]
        },
        { name: "Vision & Values", href: "/about/vision-values" },
        { name: "Awards & Recognition", href: "/about/awards-and-recognitions",  
        //   submenu: [
        //   { name: "History", href: "/about/history" },
        //   { 
        //     name: "Timeline", 
        //     href: "/about/timeline",
        //     submenu: [
        //       { name: "2020", href: "/about/timeline/2020",  submenu: [
        //           { name: "2020", href: "/about/2020" },
        //           { name: "2023", href: "/about/2023" }
        //         ] },
        //       { name: "2023", href: "/about/2023",  submenu: [
        //         { name: "History", href: "/about/history" },
        //         { 
        //           name: "Timeline", 
        //           href: "/about/timeline",
        //           submenu: [
        //             { name: "2020", href: "/about/timeline/2020",  submenu: [
        //                 { name: "2020", href: "/about/2020" },
        //                 { name: "2023", href: "/about/2023" }
        //               ] },
        //             { name: "2023", href: "/about/2023" }
        //           ],
    
        //         }
        //       ] }
        //     ],

        //   }
        // ] 
      },
        { name: "Milestones", href: "/about/milestones" },
        { name: "EHS Policy", href: "/about/ehs-policy" },
        { name: "Management Team", href: "/about/management-team" },
        { name: "Certifications", href: "/certifications" },
      ],
    },
    {
        name: "Business Segments",
        href: "/business-segments",
        submenu: [
          { name: "Institutional", href: "/institutional" },
          { name: "Brand", href: "/brand" },
          { name: "R & D", href: "/r-and-d" },
          { name: "Manufacturing", href: "/business-segments/manufacturing" },
          { name: "Exports", href: "/business-segments/exports" },
        ],
        
      },
      {
        name: "Products",
        href: "/products",
        submenu: [
          { name: "Technical Grade", href: "/products/technical-grade" },
          { name: "Brand", href: "/products/brand" },
          { name: "Bulk Products", href: "/products/bulk-products" },
          { name: "Exports", href: "/products/exports" },
        ],
      },
      {
        name: "Careers",
        href: "/careers",
        submenu: [
          { name: "Career At Willowood", href: "/careers/career-at-willowood" },
          { name: "Job Opportunities", href: "/careers/job-opportunities" },
          // { name: "CSR", href: "/careers/csr" },
        ],
      },
      {
        name: "Global Presense",
        href: "/global-presence",
        submenu: [
          { name: "Global Operations", href: "/global-presence/global-operations"},
          { name: "India Operations", href: "/global-presence/india-operations" },
          { name: "Customer Network", href: "/global-presence/customer-network" },
        ],
      },
  ];


  export const getAllRoutes = (links, parentPath = "") => {
    let routes = [];
    links.forEach((link) => {
      const fullPath = `${parentPath}${link.href}`;
      routes.push(fullPath);
      if (link.submenu) {
        routes = [...routes, ...getAllRoutes(link.submenu, "")];
      }
    });
    return routes;
  };
  
  
  export const dynamicRoutes = getAllRoutes(navLinks);
  


