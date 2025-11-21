import React from "react";
import { Link } from "react-router-dom";

const products = [
  {
    title: "Chrome towel bar",
    finish: "Polished",
    price: "$48",
    img: "https://images.unsplash.com/photo-1557682250-33bd709cbe85",
  },
  {
    title: "Brushed door handle",
    finish: "Satin",
    price: "$32",
    img: "https://images.unsplash.com/photo-1594818375337-534c0c43af92",
  },
  {
    title: "Cabinet knob set",
    finish: "Matte",
    price: "$56",
    img: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91",
  },
  {
    title: "Soap dispenser",
    finish: "Chrome",
    price: "$42",
    img: "https://images.unsplash.com/photo-1544717305-996b815c338c",
  },
  {
    title: "Mirror frame bar",
    finish: "Brushed",
    price: "$64",
    img: "https://images.unsplash.com/photo-1533228100845-08145b01de14",
  },
  {
    title: "Lever door handle",
    finish: "Polished",
    price: "$38",
    img: "https://images.unsplash.com/photo-1503602642458-232111445657",
  },
];

const Products = () => {
  return (
    <section className="px-16 py-20 flex flex-col items-center text-[#0a0906]">

      {/* HEADER */}
      <p className="text-sm text-[#0a0906]/70 mb-2">Featured</p>
      <h1 className="text-5xl font-semibold mb-4">Products</h1>
      <p className="text-lg text-[#0a0906]/70 mb-16">
        Hand-selected pieces that represent our best work
      </p>

      {/* PRODUCT GRID */}
      <div className="grid grid-cols-3 gap-16 w-full max-w-7xl">

        {products.map((item, index) => (
          <div key={index} className="flex flex-col items-center text-center">

            <img
              src={item.img}
              alt={item.title}
              className="w-full h-[360px] object-cover rounded"
            />

            <h3 className="text-xl font-medium mt-6">{item.title}</h3>

            <p className="text-[#0a0906]/70 text-sm">{item.finish}</p>

            <p className="text-xl font-semibold mt-2">{item.price}</p>
          </div>
        ))}

      </div>

      <div className="mt-10">
        <Link to="/catalog">
          <span className=" mt-16 px-6 py-2 border border-[#0a0906] bg-white rounded-none text-sm shadow-[0px_2px_2px_#0a090626,inset_0px_-4px_0px_#0a090626,inset_0px_3px_0px_#ffffff33] hover:bg-gray-100 transition-colors " >
            View catalog
          </span>
        </Link>
      </div>
    </section>
  );
};

export default Products;