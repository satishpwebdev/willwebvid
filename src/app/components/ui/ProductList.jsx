"use client"
import { useState } from "react";
import Image from "next/image";
import carmel    from '../../../../public/product/carmel.jpg'
import drcol    from '../../../../public/product/drcol.jpg'
import layby    from '../../../../public/product/layby.jpg'
import mywill    from '../../../../public/product/mywill.jpg'
import phylum    from '../../../../public/product/phylum.jpg'
import theme    from '../../../../public/product/theme.jpg'
import valxtra    from '../../../../public/product/valxtra.jpg'
import wilcore    from '../../../../public/product/wilcore.jpg'
import willonyl    from '../../../../public/product/willonyl.jpg'

const categories = [
  {
    title: "Brand Products",
    subcategories: ["Fungicide", "Herbicide", "Insecticide", "PGRs & Others"],
  },
  // { title: "Technical Grade", subcategories: [" Tech Fungicide", " Tech Herbicide", "Tech Insecticide", " Tech PGRs & Others"] },
  // { title: "Bulk Products", subcategories: [] },
  // { title: "Exports", subcategories: [] },
];

const allProducts = {
  Fungicide: [
    { name: "CARMEL", image: carmel, description: "Carbendazim 12% + Mancozeb 63% WP" },
    { name: "DR COL", image: drcol, description: "PROPINEB 70% WP" },
    { name: "LAYBY", image: layby, description: "CYMOXANIL 8% + MANCOZEB 64% WP" },
    { name: "MYWILL", image: mywill, description: "MYCLOBUTANIL 10% WP" },
    { name: "PHYLLUM", image: phylum, description: "PROPICONAZOLE 25% EC" },
    { name: "THEME", image: theme, description: "THIOPHANATE METHYL 70% WP" },
    { name: "VALXTRA", image: valxtra, description: "HEXACONAZOLE 5% + VALIDAMYCIN 2.5% SC" },
    { name: "WILCORE", image: wilcore, description: "DIFENOCONAZOLE 25% EC" },
    { name: "WILLONYL", image: willonyl, description: "CHLOROTHALONIL 75% WP" },
  ],
  Herbicide: [
    { name: "HERB-X", image: "/productlist.png", description: "Herbicide Example 1" },
    { name: "WEED-CLEAR", image: "/productlist.png", description: "Herbicide Example 2" },
  ],
  
};

const ProductsPage = () => {
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
        <h2 className="text-xl font-bold border-b pb-2">Products</h2>
        {categories.map((category, index) => (
          <div key={index} className="mt-4">
            <div
              className="flex justify-between items-center cursor-pointer border-b pb-1 font-semibold"
              onClick={() => toggleCategory(category.title)}
            >
              {category.title}
              {category.subcategories.length > 0 && (
                <span className="text-gray-500">{openCategories[category.title] ? "−" : "+"}</span>
              )}
            </div>

            {openCategories[category.title] && category.subcategories.length > 0 && (
              <ul className="mt-2 space-y-1 text-gray-600 ">
                {category.subcategories.map((sub, subIndex) => (
                  <li
                    key={subIndex}
                    onClick={() => handleCategorySelect(sub)}
                    className={`cursor-pointer pl-4 ${
                      selectedCategory === sub ? "text-green-600 font-bold" : ""
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {paginatedProducts.map((product, index) => (
            <div key={index} className="border p-4 rounded-lg shadow-sm hover:shadow-lg">
              <Image src={product.image} alt={product.name} width={200} height={200} className="mx-auto" />
              <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
              <p className="text-sm text-gray-600">{product.description}</p>
            </div>
          ))}
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
                  currentPage === i + 1 ? "bg-green-600 text-white" : "hover:bg-gray-100"
                }`}
              >
                {i + 1}
              </button>
            ))}
            <button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
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

export default ProductsPage;
