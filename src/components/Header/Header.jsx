import React from "react";
import { Button } from "../../ui/button";
import { images } from "../../utlis/data";
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";

const Header = () => {
  const { t } = useTranslation();

  return (
    <section className="flex flex-col items-center gap-12 sm:gap-16 lg:gap-20">
      <div className="flex flex-col max-w-full items-start justify-center gap-12 sm:gap-16 lg:gap-20 w-full">
        <article className="flex flex-col-reverse lg:flex-row w-full bg-white">
          <div className="flex flex-col items-start justify-center gap-6 sm:gap-8 p-4 sm:p-6 lg:p-12 flex-1">
            <header className="flex flex-col items-start gap-4 sm:gap-6 w-full">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0a0906] leading-tight opacity-0 -translate-y-4 animate-fade-in">
                {t('home.hero_title')}
              </h1>

              <p className="text-base sm:text-lg text-[#0a0906] leading-relaxed opacity-0 -translate-y-4 animate-fade-in delay-200">
                {t('home.hero_description')}
              </p>
            </header>
            <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4 w-full sm:w-auto opacity-0 -translate-y-4 animate-fade-in delay-400">
              <Link to="/catalog" className="w-full sm:w-auto">
                <Button
                  className="
                  w-full sm:w-auto
                  cursor-pointer
                  bg-[#cedee7]
                  px-6 py-2.5
                  border border-[#0a0906]
                  shadow-[0px_2px_2px_#0a090626,inset_0px_-5px_0px_#0a090626,inset_0px_4px_0px_#ffffff33]
                  rounded-none
                  hover:bg-[#b8d4e0]
                  transition-colors
                "
                >
                  {t('home.browse')}
                </Button>
              </Link>
              <Link to="/about" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  className="
                  w-full sm:w-auto
                  cursor-pointer
                  bg-[#f2f2f2]
                  px-6 py-2.5
                  border border-[#0a0906]
                  shadow-[0px_2px_2px_#0a090626,inset_0px_-5px_0px_#0a090626,inset_0px_4px_0px_#ffffff33]
                  rounded-none
                  hover:bg-[#e5e5e5]
                  transition-colors
                "
                >
                  {t('home.learn_more')}
                </Button>
              </Link>
            </div>
          </div>

          <img
            className="w-full lg:w-1/2 h-64 sm:h-80 lg:h-[540px] object-cover opacity-0 animate-fade-in delay-600"
            alt="Header Image"
            src={images[4]}
          />
        </article>
      </div>
    </section>
  );
};

export default Header;
