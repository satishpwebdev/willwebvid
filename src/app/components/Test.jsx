"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { X, Menu } from "lucide-react";
import Logo from "../../../public/logo.png";
import Image from "next/image";
import { navLinks } from "../constants";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathName = usePathname()
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [activeSubSubmenu, setActiveSubSubmenu] = useState(null);
  const [mobileActiveDropdown, setMobileActiveDropdown] = useState(null);
  const [mobileActiveSubmenu, setMobileActiveSubmenu] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);


  useEffect(() => {
    setActiveDropdown(null);
    setActiveSubmenu(null);
    setActiveSubSubmenu(null);
    setMobileActiveDropdown(null);
    setMobileActiveSubmenu(null);
    setMobileMenuOpen(false);
  }, [pathName]);

    useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 50);
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

  // Desktop submenu component
  const DesktopMenu = ({ items }) => (
    <ul className="absolute left-full rounded-md top-2 min-w-[200px] bg-white shadow-lg rounded-md z-50">
      {items.map((item) => (
        <li
          key={item.name}
          className="relative group"
          onMouseEnter={() => setActiveSubSubmenu(item.name)}
          onMouseLeave={() => setActiveSubSubmenu(null)}
        >
          <Link
            href={item.href}
            className="flex justify-between items-center px-4 py-2 text-gray-800 hover:bg-gray-50"
          >
            {item.name}
            {item.submenu && <span className="ml-2 text-xs">›</span>}
          </Link>

          {/* Third-Level Submenu */}
          {item.submenu && activeSubSubmenu === item.name && (
            <ul className="absolute left-full top-0 min-w-[180px] bg-white shadow-md rounded-md">
              {item.submenu.map((subItem) => (
                <li key={subItem.name} className="px-4 py-2 hover:bg-gray-50">
                  <Link href={subItem.href} className="text-gray-800">
                    {subItem.name}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );

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
        <ul className="hidden lg:flex lg:gap-x-8">
          {navLinks.map((item) => (
            <li
              key={item.name}
              className="relative group"
              onMouseEnter={() => setActiveDropdown(item.name)}
              onMouseLeave={() => {
                setActiveDropdown(null);
                setActiveSubmenu(null);
                setActiveSubSubmenu(null);
              }}
            >
              <Link
                href={item.href}
                className="flex items-center text-[1.04rem] font-semibold text-white hover:text-emerald-400"
              >
                {item.name}
                {item.submenu && (
                  <span className="ml-1.5 text-xs opacity-80 transform transition-transform group-hover:rotate-180">
                    ▼
                  </span>
                )}
              </Link>

              {/* First-Level Dropdown */}
              {item.submenu && activeDropdown === item.name && (
                <ul className="absolute -left-4 top-full min-w-[200px] bg-white shadow-lg rounded-md z-50">
                  {item.submenu.map((subItem) => (
                    <li
                      key={subItem.name}
                      className="relative group"
                      onMouseEnter={() => setActiveSubmenu(subItem.name)}
                      onMouseLeave={() => setActiveSubmenu(null)}
                    >
                      <Link
                        href={subItem.href}
                        className="flex justify-between rounded-md items-center px-4 py-2 text-gray-800 hover:bg-gray-50"
                      >
                        {subItem.name}
                        {subItem.submenu && (
                          <span className="ml-2 text-xs">›</span>
                        )}
                      </Link>

                      {/* Second-Level Dropdown */}
                      {subItem.submenu && activeSubmenu === subItem.name && (
                        <DesktopMenu items={subItem.submenu} />
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(true)}
          className="lg:hidden text-white"
        >
          <Menu size={28} />
        </button>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 text-white p-6 overflow-y-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-bold">MAIN MENU</h2>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="focus:outline-none"
            >
              <X size={28} />
            </button>
          </div>

          {/* Mobile Menu */}
          <ul className="flex flex-col gap-2">
            {navLinks.map((item) => (
              <li key={item.name} className="border-b border-gray-700 py-2">
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() =>
                    setMobileActiveDropdown(
                      mobileActiveDropdown === item.name ? null : item.name
                    )
                  }
                >
                  <Link href={item.href} className="text-white">
                    {item.name}
                  </Link>
                  {item.submenu && <span className="ml-2">▼</span>}
                </div>

                {/* First-Level Mobile Dropdown */}
                {item.submenu && mobileActiveDropdown === item.name && (
                  <ul className="pl-4 mt-2">
                    {item.submenu.map((subItem) => (
                      <li key={subItem.name} className="py-1">
                        <div
                          className="flex justify-between items-center cursor-pointer"
                          onClick={() =>
                            setMobileActiveSubmenu(
                              mobileActiveSubmenu === subItem.name
                                ? null
                                : subItem.name
                            )
                          }
                        >
                          <Link href={subItem.href} className="text-gray-300">
                            {subItem.name}
                          </Link>
                          {subItem.submenu && <span className="ml-2">›</span>}
                        </div>

                        {/* Second-Level Mobile Dropdown */}
                        {subItem.submenu &&
                          mobileActiveSubmenu === subItem.name && (
                            <ul className="pl-4 mt-1">
                              {subItem.submenu.map((subSubItem) => (
                                <li key={subSubItem.name} className="py-1">
                                  <Link
                                    href={subSubItem.href}
                                    className="text-gray-400"
                                  >
                                    {subSubItem.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
