import React from "react";
import { Button } from "../../ui/button";
import { images } from "../../utlis/data";
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t } = useTranslation();

  return (
    <section className="flex flex-col items-center gap-20">
      <div className="flex flex-col max-w-full items-start justify-center gap-20 w-full">
        <article className="flex w-full bg-white ">
          <div className="flex flex-col items-start justify-center gap-8 p-12 flex-1">

            {/* HEADER TEXT */}
            <header className="flex flex-col items-start gap-6 w-full">
              <h1 className="text-5xl font-bold text-[#0a0906] leading-tight opacity-0 -translate-y-4 animate-fade-in">
                {t('home.hero_title')}
              </h1>

              <p className="text-lg text-[#0a0906] leading-relaxed opacity-0 -translate-y-4 animate-fade-in delay-200">
                {t('home.hero_description')}
              </p>
            </header>

            {/* BUTTONS */}
            <div className="flex items-start gap-4 opacity-0 -translate-y-4 animate-fade-in delay-400">

              {/* BROWSE BUTTON */}
              <Button
                className="
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

              <Button
                variant="outline"
                className="
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

            </div>
          </div>

          <img
            className="flex-1 h-[640px] object-cover opacity-0 animate-fade-in delay-600"
            alt="Header Image"
            src={images[1]}
          />
        </article>
      </div>
    </section>
  );
};

export default Header;

