/* eslint-disable */
import { useParams } from "react-router-dom";
import ProductCard from "./ProductCard";

const CategoryPage = ({ categories }) => {
  const { categoryName } = useParams();
  const category = categories.find((cat) => cat.categoryName === categoryName);

  if (!category) {
    return <h2 className="text-2xl">Category not found</h2>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">{category.categoryName}</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {category.products.map((product) => (
          <ProductCard key={product.productId} product={product} />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
