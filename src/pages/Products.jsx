import React from "react";
import { Link } from "react-router-dom";
import { images } from "../utlis/data";
import { useTranslation } from 'react-i18next';

const Products = () => {
  const { t } = useTranslation();

  const products = [
    {
      title: t('products.chrome_towel_bar'),
      finish: t('products.polished'),
      price: "$48",
      img: images[6],
    },
    {
      title: t('products.brushed_door_handle'),
      finish: t('products.satin'),
      price: "$32",
      img: images[19],
    },
    {
      title: t('products.cabinet_knob_set'),
      finish: t('products.matte'),
      price: "$56",
      img: images[25],
    },
    {
      title: t('products.soap_dispenser'),
      finish: t('products.chrome'),
      price: "$42",
      img: images[14],
    },
    {
      title: t('products.mirror_frame_bar'),
      finish: t('products.brushed'),
      price: "$64",
      img: images[4],
    },
    {
      title: t('products.lever_door_handle'),
      finish: t('products.polished'),
      price: "$38",
      img: images[5],
    },
  ];

  return (
    <section className="px-16 py-20 flex flex-col items-center text-[#0a0906]">

      {/* HEADER */}
      <p className="text-sm text-[#0a0906]/70 mb-2">{t('products.featured')}</p>
      <h1 className="text-5xl font-semibold mb-4">{t('products.title')}</h1>
      <p className="text-lg text-[#0a0906]/70 mb-16">
        {t('products.subtitle')}
      </p>

      {/* PRODUCT GRID */}
      <div className="grid grid-cols-3 gap-16 w-full max-w-7xl">

        {products.map((item, index) => (
          <div key={index} className="flex flex-col items-center text-center">

            <img
              src={item?.img}
              alt={item?.title}
              className="w-full h-[360px] object-contain rounded"
            />

            <h3 className="text-xl font-medium mt-6">{item?.title}</h3>

            <p className="text-[#0a0906]/70 text-sm">{item?.finish}</p>

            {/* <p className="text-xl font-semibold mt-2">{item?.price}</p> */}
          </div>
        ))}

      </div>

      <div className="mt-10">
        <Link to="/catalog">
          <span className=" mt-16 px-6 py-2 border border-[#0a0906] bg-white rounded-none text-sm shadow-[0px_2px_2px_#0a090626,inset_0px_-4px_0px_#0a090626,inset_0px_3px_0px_#ffffff33] hover:bg-gray-100 transition-colors " >
            {t('products.view_catalog')}
          </span>
        </Link>
      </div>
    </section>
  );
};

export default Products;