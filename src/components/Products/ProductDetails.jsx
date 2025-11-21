/* eslint-disable */
// src/pages/ProductDetails.jsx
import { useParams } from "react-router-dom";

const ProductDetails = ({ categories }) => {
  const { productId } = useParams();

  let product;
  categories.forEach(category => {
    category.products.forEach(prod => {
      if (prod.productId === productId) {
        product = prod;
      }
    });
  });

  if (!product) {
    return <h2 className="text-2xl">Product not found</h2>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">{product.productName}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <img src={product.images[0]} alt={product.productName} className="w-full h-64 object-contain rounded-md" />
        </div>
        <div>
          <p>{product.productDescription}</p>
          <p className="mt-4 font-bold text-xl">{product.price} {product.currency}</p>
          <h3 className="mt-6 text-lg font-semibold">Variants</h3>
          <ul className="mt-2">
            {product.variants.map((variant, index) => (
              <li key={index} className="mt-1">
                {variant.color} - {variant.size} ({variant.dimensions})
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
