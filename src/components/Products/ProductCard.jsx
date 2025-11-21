/* eslint-disable */
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="shadow-xl rounded-lg p-6 transition-transform duration-300 transform hover:scale-105">
      <img
        src={product.images[0]}
        alt={product.productName}
        className="w-full h-40 object-contain rounded-t-lg mb-4 border-b-2 border-gray-300"
      />
      <h2 className="text-2xl font-bold text-lightYellow">
        {product.productName}
      </h2>
      <p className="mt-2 text-darkSlateGray">{product.productDescription}</p>
      <p className="mt-4 text-darkSlateGray text-lg font-semibold">
        {product.price} {product.currency}
      </p>
      <Link
        to={`/product/${product.productId}`}
        className="inline-block mt-6 px-4 py-2 bg-limeGreen text-darkSlateGray font-medium rounded-md hover:bg-mutedGreen transition-colors"
      >
        View Details
      </Link>
    </div>
  );
};

export default ProductCard;
