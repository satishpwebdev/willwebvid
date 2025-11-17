"use client";
import { useState } from "react";
import Image from "next/image";
import carmel from "../../../../public/product/carmel.jpg";
import drcol from "../../../../public/product/drcol.jpg";
import layby from "../../../../public/product/layby.jpg";
import mywill from "../../../../public/product/mywill.jpg";
import phylum from "../../../../public/product/phylum.jpg";
import theme from "../../../../public/product/theme.jpg";
import valxtra from "../../../../public/product/valxtra.jpg";
import wilcore from "../../../../public/product/wilcore.jpg";
import willonyl from "../../../../public/product/willonyl.jpg";

const categories = [
 
  {
    title: "Technical Grade",
    subcategories: ["Fungicide", "Herbicide", "Acaricide", "Insecticide"],
  },
];

const allProducts = {
  Fungicide: [
    { name: "Acephate", class: "Fungicide", formulation: "75% SP" },
    { name: "Acetamiprid", class: "Fungicide", formulation: "20% SP" },
    { name: "Bifenthrin", class: "Fungicide", formulation: "10% EC & 10% WP" },
    { name: "BPMC (Fenobucarb)", class: "Fungicide", formulation: "50% EC" },
    { name: "Buprofezin", class: "Fungicide", formulation: "25% SC" },
    {
      name: "Cartap Hydrochloride",
      class: "Fungicide",
      formulation: "50% SP & 4% Gr",
    },
    { name: "Diafenthiuron", class: "Fungicide", formulation: "50% WP" },
    {
      name: "Emamectin Benzoate",
      class: "Fungicide",
      formulation: "5% SG & 1.9% EC",
    },
    { name: "Fipronil", class: "Fungicide", formulation: "5% SC & 0.3% Gr" },
  ],
  Herbicide: [
    {
      name: "Fenoxaprop-p-Ethyl",
      class: "Herbicide",
      formulation: "71283-80-2",
    },
    {
      name: "Glyphosate",
      class: "Herbicide",
      formulation: "1071-83-6",
    },
    {
      name: "Imazethapyr",
      class: "Herbicide",
      formulation: "81335-77-5",
    },
    {
      name: "Metribuzin",
      class: "Herbicide",
      formulation: "21087-64-9",
    },
    {
      name: "Oxyfluorfen",
      class: "Herbicide",
      formulation: "42874-03-3",
    },
    {
      name: "Paraquat Dichloride",
      class: "Herbicide",
      formulation: "1910-42-5",
    },
    {
      name: "Pretilachlor",
      class: "Herbicide",
      formulation: "51218-49-6",
    },
  ],
  Acaricide: [
    {
      name: "Propargite",
      class: "Acaricide",
      formulation: "2312-35-8",
    },
    {
      name: "Hexythiazox",
      class: "Acaricide",
      formulation: "78587-05-0",
    },
  ],
  Insecticide: [
    {
      name: "Acetamiprid",
      class: "Insecticide",
      formulation: "135410-20-7",
    },
    {
      name: "Bifenthrin",
      class: "Insecticide",
      formulation: "82657-04-3",
    },
    {
      name: "Cartap Hydrochloride",
      class: "Insecticide",
      formulation: "15263-52-2",
    },
    {
      name: "Difenthiuron",
      class: "Insecticide",
      formulation: "80060-09-9",
    },
    {
      name: "Emamectin Benzoate",
      class: "Insecticide",
      formulation: "155569-91-8",
    },
    {
      name: "Fenobucarb (BPMC)",
      class: "Insecticide",
      formulation: "3766-81-2",
    },
    {
      name: "Imidacloprid",
      class: "Insecticide",
      formulation: "138261-41-3",
    },
    {
      name: "Lambda Cyhalothrin",
      class: "Insecticide",
      formulation: "91465-08-6",
    },
    {
      name: "Triazophos",
      class: "Insecticide",
      formulation: "24017-47-8",
    },
  ],
};

const Technical = ({ title }) => {
  const [openCategories, setOpenCategories] = useState({});
  const [selectedCategory, setSelectedCategory] = useState("Fungicide");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  const toggleCategory = (title) => {
    setOpenCategories((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  const handleCategorySelect = (subcategory) => {
    setSelectedCategory(subcategory);
    setCurrentPage(1);
  };

  const products = allProducts[selectedCategory] || [];

  const totalPages = Math.ceil(products.length / productsPerPage);
  const paginatedProducts = products.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  return (
    <div className="container mx-auto p-6 grid md:grid-cols-4 gap-6  bg-white text-black">
      <aside className="border-r pr-4 hidden md:block">
        <h2 className="text-xl font-bold border-b pb-2">{title}</h2>
        {categories.map((category, index) => (
          <div key={index} className="mt-4">
            <div
              className="flex justify-between items-center cursor-pointer border-b pb-1 font-semibold"
              onClick={() => toggleCategory(category.title)}
            >
              {category.title}
              {category.subcategories.length > 0 && (
                <span className="text-gray-500">
                  {openCategories[category.title] ? "−" : "+"}
                </span>
              )}
            </div>

            {openCategories[category.title] &&
              category.subcategories.length > 0 && (
                <ul className="mt-2 space-y-1 text-gray-600 ">
                  {category.subcategories.map((sub, subIndex) => (
                    <li
                      key={subIndex}
                      onClick={() => handleCategorySelect(sub)}
                      className={`cursor-pointer pl-4 ${
                        selectedCategory === sub
                          ? "text-green-600 font-bold"
                          : ""
                      }`}
                    >
                      {sub}
                    </li>
                  ))}
                </ul>
              )}
          </div>
        ))}
      </aside>

      <main className="md:col-span-3">
        <h2 className="text-2xl font-bold mb-4">{selectedCategory}</h2>
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {paginatedProducts.map((product, index) => (
            <div key={index} className="border p-4 rounded-lg shadow-sm hover:shadow-lg">
              <Image src={product.image} alt={product.name} width={200} height={200} className="mx-auto" />
              <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
              <p className="text-sm text-gray-600">{product.description}</p>
            </div>
          ))}
        </div> */}
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-200 shadow-md rounded-lg">
            <thead>
              <tr className="bg-green-600 text-white">
                <th className="p-3 text-left">Product</th>
                <th className="p-3 text-left">Class</th>
                <th className="p-3 text-left">Formulation</th>
              </tr>
            </thead>
            <tbody>
              {paginatedProducts.map((product, index) => (
                <tr
                  key={index}
                  className="border-b hover:bg-gray-100 transition-colors"
                >
                  <td className="p-3">{product.name}</td>
                  <td className="p-3">{product.class}</td>
                  <td className="p-3">{product.formulation}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {totalPages > 1 && (
          <div className="flex justify-center mt-6 space-x-2">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="border px-3 py-1 rounded hover:bg-gray-100 disabled:opacity-50"
            >
              &lt;
            </button>
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`border px-3 py-1 rounded ${
                  currentPage === i + 1
                    ? "bg-green-600 text-white"
                    : "hover:bg-gray-100"
                }`}
              >
                {i + 1}
              </button>
            ))}
            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className="border px-3 py-1 rounded hover:bg-gray-100 disabled:opacity-50"
            >
              &gt;
            </button>
          </div>
        )}
      </main>
    </div>
  );
};

export default Technical;
