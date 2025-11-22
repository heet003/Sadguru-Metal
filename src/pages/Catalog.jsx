import React, { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { products } from '../utlis/data';
import ImageViewer from '../components/ImageViewer/ImageViewer';

function Catalog() {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedProductName, setSelectedProductName] = useState('');

  // Get all categories with product counts
  const categories = useMemo(() => {
    return products?.map(cat => ({
      name: cat.categoryName,
      count: cat.products?.length
    }));
  }, []);

  // Filter products based on search and category
  const filteredProducts = useMemo(() => {
    let allProducts = [];

    // Flatten all products with category info
    products?.forEach(category => {
      category?.products?.forEach(product => {
        allProducts?.push({
          ...product,
          categoryName: category?.categoryName
        });
      });
    });

    // Filter by category
    if (selectedCategory) {
      allProducts = allProducts?.filter(p => p.categoryName === selectedCategory);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      allProducts = allProducts?.filter(product =>
        product.productName.toLowerCase().includes(query) ||
        product.productDescription.toLowerCase().includes(query) ||
        product.categoryName.toLowerCase().includes(query)
      );
    }

    return allProducts;
  }, [searchQuery, selectedCategory]);

  const handleCategoryClick = (categoryName) => {
    setSelectedCategory(prev => prev === categoryName ? null : categoryName);
  };

  const getCategoryTranslationKey = (categoryName) => {
    if (categoryName === "Hangers (Khuti)") return "catalog.category_hangers";
    if (categoryName === "Cabinet Handle") return "catalog.category_cabinet_handle";
    if (categoryName === "Knobs") return "catalog.category_knobs";
    return categoryName;
  };

  return (
    <div className="px-4 py-8 sm:px-8 sm:py-12 lg:px-16 lg:py-20">

      {/* Header Section */}
      <div className="mb-8 sm:mb-10 lg:mb-12">
        <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#0a0906]">
            {t('catalog.title')}
          </h1>
          
          {/* Download Catalog Button */}
          <a
            href="/SadguruMetalPerex.pdf"
            download="SadguruMetalPerex.pdf"
            className="flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-[#0a0906] text-white rounded-md hover:bg-[#0a0906]/80 transition-all shadow-md hover:shadow-lg whitespace-nowrap"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <span className="font-medium text-sm sm:text-base">{t('catalog.download_catalog')}</span>
          </a>
        </div>
        <p className="text-base sm:text-lg text-[#0a0906]/70 mb-6 sm:mb-8">
          {t('catalog.subtitle')}
        </p>

        {/* Search Bar */}
        <div className="relative w-full sm:max-w-2xl">
          {/* Search Icon */}
          <svg
            className="absolute left-4 top-1/2 -translate-y-1/2 text-[#0a0906]/50"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t('catalog.search_placeholder')}
            className="w-full pl-12 pr-4 py-2.5 sm:py-2 rounded border border-[#0a0906] bg-white text-[#0a0906] placeholder-[#0a0906]/50 focus:outline-none focus:ring-2 focus:ring-[#0a0906]/20"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-[#0a0906]/50 hover:text-[#0a0906] transition-colors"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Category Filter Cards */}
      <div className="mb-12">
        <div className="flex gap-4 flex-wrap">
          {/* All Categories Button */}
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-4 py-2 rounded-md cursor-pointer border border-[#0a0906] transition-all ${selectedCategory === null
              ? 'bg-[#0a0906] text-white hover:bg-[#0a0906]/80'
              : 'bg-white text-[#0a0906] hover:bg-gray-100'
              }`}
          >
            <div className="flex flex-col items-start">
              <span className="font-medium">{t('catalog.all_categories')}</span>
              <span className="text-sm opacity-70">
                {t('catalog.products_count', { count: products?.reduce((sum, cat) => sum + cat.products?.length, 0) })}
              </span>
            </div>
          </button>

          {/* Individual Category Buttons */}
          {categories?.map((category, index) => (
            <button
              key={index}
              onClick={() => handleCategoryClick(category?.name)}
              className={`px-4 py-2 rounded-md cursor-pointer border border-[#0a0906] transition-all ${selectedCategory === category?.name
                ? 'bg-[#0a0906] text-white hover:bg-[#0a0906]/80'
                : 'bg-white text-[#0a0906] hover:bg-gray-100'
                }`}
            >
              <div className="flex flex-col items-start">
                <span className="font-medium">{t(getCategoryTranslationKey(category?.name))}</span>
                <span className="text-sm opacity-70">
                  {t('catalog.products_count', { count: category?.count })}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      {filteredProducts?.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts?.map((product) => (
            <div
              key={product.productId}
              className="flex flex-col rounded-md p-2 border border-[#0a0906]/20 hover:border-gray-500 transition-all hover:shadow-lg group"
            >
              {/* Product Image */}
              <div className="w-full h-64 rounded-md bg-gray-50 overflow-hidden">
                <img
                  src={product.images[0]}
                  alt={product.productName}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300 cursor-pointer"
                  onClick={() => {
                    setSelectedImage(product.images[0]);
                    setSelectedProductName(product.productName);
                  }}
                  onError={(e) => {
                    e.target.src = './metal/1.png';
                  }}
                />
              </div>

              {/* Product Info */}
              <div className="p-4 flex flex-col flex-grow bg-white">
                <div className="text-xs text-[#0a0906]/50 mb-2">
                  {t(getCategoryTranslationKey(product.categoryName))}
                </div>

                <h3 className="text-lg font-semibold text-[#0a0906] mb-2">
                  RK-{product.productId}
                </h3>
                <p className="text-md font-semibold text-[#0a0906] mb-2">
                  {product.productName}
                </p>

                <p className="text-sm text-[#0a0906]/70 mb-4 line-clamp-2 flex-grow">
                  {t(`catalog.product_desc_rk${product.productId}`)}
                </p>

                <div className="flex items-end justify-end mt-auto pt-4 border-t border-[#0a0906]/10">
                  {/* <span className="text-xl font-semibold text-[#0a0906]">
                    ₹{product.price}
                  </span> */}
                  {product.variants && (
                    <span className="text-xs text-[#0a0906]/50">
                      {product.variants.length} {t('catalog.variants')}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <p className="text-2xl text-[#0a0906]/50 mb-4">
            {t('catalog.no_results')}
          </p>
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="px-6 py-2 border border-[#0a0906] bg-white text-[#0a0906] hover:bg-gray-100 transition-colors"
            >
              {t('catalog.clear_search')}
            </button>
          )}
        </div>
      )}

      {/* Image Viewer Modal */}
      {selectedImage && (
        <ImageViewer
          image={selectedImage}
          productName={selectedProductName}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </div>
  );
}

export default Catalog;
