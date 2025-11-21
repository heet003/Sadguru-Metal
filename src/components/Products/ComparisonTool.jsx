/* eslint-disable */
import { useState } from 'react';

const ComparisonTool = ({ categories }) => {
  const [compareProducts, setCompareProducts] = useState([]);

  const handleCompare = (product) => {
    setCompareProducts((prev) => {
      if (prev.find((p) => p.productId === product.productId)) {
        return prev.filter((p) => p.productId !== product.productId);
      } else {
        return [...prev, product];
      }
    });
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Compare Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) =>
          category.products.map((product) => (
            <div key={product.productId} className="bg-gray-100 p-4 rounded-lg">
              <h3 className="font-bold">{product.productName}</h3>
              <button
                onClick={() => handleCompare(product)}
                className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
              >
                {compareProducts.find((p) => p.productId === product.productId) ? 'Remove from Compare' : 'Add to Compare'}
              </button>
            </div>
          ))
        )}
      </div>

      {compareProducts.length > 0 && (
        <div className="mt-8">
          <h3 className="text-2xl font-bold mb-4">Comparison</h3>
          <div className="flex space-x-4">
            {compareProducts.map((product) => (
              <div key={product.productId} className="bg-white p-4 rounded-lg shadow-lg">
                <h4 className="font-bold">{product.productName}</h4>
                <ul>
                  {product.variants.map((variant, idx) => (
                    <li key={idx} className="text-gray-700">
                      {variant.color}, {variant.size}, {variant.dimensions}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ComparisonTool;
