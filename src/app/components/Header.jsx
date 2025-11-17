"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { X, Menu, MoveRight } from "lucide-react";
import { motion } from "framer-motion";
import Logo from "../../../public/logo.png";
import Image from "next/image";

export default function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileDropdownOpen, setMobileDropdownOpen] = useState(null);
  const [closeTimeout, setCloseTimeout] = useState(null);

  const navLinks = [
    { name: "Home", href: "/" },
    {
      name: "About",
      href: "/about",
      submenu: [
        { name: "Company Overview", href: "/about/company-overview"},
        { name: "Vision & Values", href: "/about/vision-values" },
        { name: "Awards & Recognition", href: "/about/awards-and-recognitions" },
        { name: "Milestones", href: "/about/milestones" },
        { name: "EHS Policy", href: "/about/ehs-policy" },
        { name: "Management Team", href: "/about/management-team" },
        { name: "Certifications", href: "/about/certifications" },
      ],
    },

    {
      name: "Business Segments",
      href: "/business-segments",
      submenu: [
        { name: "Institutional", href: "/business/institutional" },
        { name: "Brand", href: "/business/brand" },
        { name: "R & D", href: "/business/r-and-d" },
        { name: "Manufacturing", href: "/business/manufacturing" },
        { name: "Exports", href: "/business/exports" },
      ],
    },
    {
      name: "Products",
      href: "/products",
      submenu: [
        { name: "Technical Grade", href: "/product/technical-grade" },
        { name: "Brand", href: "/product/brand" },
        { name: "Bulk Products", href: "/product/bulk-products" },
        { name: "Exports", href: "/product/exports" },
      ],
    },
    {
      name: "Careers",
      href: "/careers",
      submenu: [
        { name: "Career At Willowood", href: "/careers/career-at-willowood" },
        { name: "Job Opportunities", href: "/careers/job-opportunities" },
        { name: "CSR", href: "/careers/csr" },
      ],
    },
    {
      name: "Global Presense",
      href: "/global",
      submenu: [
        { name: "Global Operations", href: "/global-presence/global-operations" },
        { name: "India Operations", href: "/global-presence/india-operations" },
        { name: "Customer Network", href: "/global-presence/customer-network" },
      ],
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = (itemName) => {
    if (closeTimeout) {
      clearTimeout(closeTimeout);
    }
    setActiveDropdown(itemName);
  };

  const handleMouseLeave = () => {
    const timeoutId = setTimeout(() => {
      setActiveDropdown(null);
    }, 200);

    setCloseTimeout(timeoutId);
  };

  return (
    <header>
      <motion.nav
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed w-full z-50 transition-all duration-300 mx-auto flex max-w-full items-center justify-between p-4 lg:px-8 
        ${
          isScrolled
            ? "bg-gray-900/80 backdrop-blur-md shadow-md py-3"
            : "bg-transparent py-4"
        }`}
      >
        <div className="flex lg:flex1">
          <Link href="/">
            {/* <span className="-m-1.5 p-1.5 text-3xl md:text-4xl font-bold cursor-pointer text-white"> */}
            <span className="w-20 h-20">
              <Image className="w-full h-16" src={Logo} alt="willowood" />
            </span>
            {/* Willowood */}
            {/* </span> */}
          </Link>
        </div>

        {/* Desktop Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="hidden lg:flex lg:gap-x-6 lg:p lg:justify-end w-full "
        >
          {navLinks.map((item) => (
            <div
              key={item.name}
              className="relative group"
              onMouseEnter={() => item.submenu && handleMouseEnter(item.name)}
              onMouseLeave={handleMouseLeave}
            >
              <Link href={item.href}>
                <span
                  className={`text-[1.04rem] font-semibold leading-6 transition-all cursor-pointer ${
                    isScrolled
                      ? "text-white hover:text-emerald-400"
                      : "text-white hover:text-emerald-600"
                  } hover:underlin flex items-center gap-1`}
                >
                  {item.name}
                  {item.submenu && <span className="ml-1 text-xs">▼</span>}
                </span>
              </Link>

              {item.submenu && activeDropdown === item.name && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="absolute left-0 mt-2 top-12 w-48 bg-white shadow-lg rounded-md opacity-100 transition-opacity duration-300"
                >
                  {item.submenu.map((subItem) => (
                    <Link
                      key={subItem.name}
                      href={subItem.href}
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200 rounded-md"
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </div>
          ))}
        </motion.div>

        <div className="hidden lg:flex lg:flex1 lg:justifyend">
          {/* <Link href="/quote">
            <div className="rounded-full flex gap-2 bg-green-900 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-emerald-700 cursor-pointer">
              Get A Quote
              <MoveRight size={20} />
            </div>
          </Link> */}
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="text-white focus:outline-none"
          >
            <Menu size={28} />
          </button>
        </div>
      </motion.nav>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 text-white p-6 transition-transform duration-300">
          <div className="flex items-center justify-between mb-8">
            <span className="text-xl font-bold">MAIN MENU</span>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="focus:outline-none"
            >
              <X size={28} />
            </button>
          </div>

          <div className="flex flex-col gap-6">
            {navLinks.map((item) => (
              <div key={item.name}>
                {item.submenu ? (
                  <>
                    <button
                      onClick={() =>
                        setMobileDropdownOpen(
                          isMobileDropdownOpen === item.name ? null : item.name
                        )
                      }
                      className="flex justify-between items-center text-lg font-medium hover:text-emerald-400 cursor-pointer border-b border-gray-700 pb-2 w-full"
                    >
                      {item.name}
                      <span>
                        {isMobileDropdownOpen === item.name ? "▲" : "▼"}
                      </span>
                    </button>

                    {isMobileDropdownOpen === item.name && (
                      <div className="flex flex-col gap-2 pl-4 mt-2">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="text-gray-300 hover:text-white"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link href={item.href}>
                    <span className="flex justify-between items-center text-lg font-medium hover:text-emerald-400 cursor-pointer border-b border-gray-700 pb-2">
                      {item.name}
                    </span>
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
