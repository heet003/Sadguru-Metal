import React, { useState } from "react";
import { Button } from "../../ui/button";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isLangOpen, setIsLangOpen] = useState(false);

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'hi', name: 'हिन्दी' },
    { code: 'gu', name: 'ગુજરાતી' }
  ];

  const currentLang = languages.find(lang => lang?.code === i18n.language) || languages[0];

  const changeLanguage = (langCode) => {
    i18n.changeLanguage(langCode);
    setIsLangOpen(false);
  };

  return (
    <nav className="w-full bg-white flex items-center justify-between px-16 py-6">

      {/* Logo */}
      <div className="text-3xl font-bold italic text-[#0a0906]">
        <Link to="/">SM</Link>
      </div>

      {/* Center Menu */}
      <ul className="flex items-center gap-12 text-[#0a0906]">
        <li><Link to="/products" className="hover:text-black/70">{t('nav.products')}</Link></li>
        <li><Link to="/catalog" className="hover:text-black/70">{t('nav.catalog')}</Link></li>
        <li><Link to="/contact" className="hover:text-black/70">{t('nav.contact')}</Link></li>
      </ul>

      {/* Language Selector */}
      <div className="relative">
        <button
          onClick={() => setIsLangOpen(!isLangOpen)}
          className="flex items-center gap-2 px-4 py-2 border border-[#0a0906] bg-white rounded cursor-pointer hover:bg-gray-100 transition-colors"
        >
          <span>{currentLang?.name}</span>
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#0a0906"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`transition-transform ${isLangOpen ? 'rotate-180' : ''}`}
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>

        {isLangOpen && (
          <div className="absolute rounded-md p-1 right-0 mt-2 w-40 bg-white border border-[#0a0906] shadow-lg z-50">
            {languages.map((lang) => (
              <button
                key={lang?.code}
                onClick={() => changeLanguage(lang?.code)}
                className={`w-full rounded-md text-left px-4 py-2 hover:bg-gray-100 transition-colors ${i18n.language === lang?.code ? 'bg-gray-200 font-semibold' : ''
                  }`}
              >
                {lang?.name}
              </button>
            ))}
          </div>
        )}
      </div>

    </nav>
  );
};

export default Navbar;