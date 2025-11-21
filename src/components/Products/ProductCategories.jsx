/* eslint-disable */
import { Link } from "react-router-dom";

const ProductCategories = ({ categories }) => {
  return (
    <div className="container mx-auto p-4 text-lightYellow">
      <h1 className="text-4xl font-bold mb-8 text-limeGreen">
        Product Categories
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((category, index) => (
          <Link key={index} to={`/category/${category.categoryName}`}>
            <div className="bg-darkSlateGray text-lightYellow shadow-lg rounded-lg p-6 hover:bg-mutedGreen transition-colors duration-300">
              <h2 className="text-2xl font-semibold mb-2">
                {category.categoryName}
              </h2>
              <p className="text-lg">{category.products.length} Products</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductCategories;
