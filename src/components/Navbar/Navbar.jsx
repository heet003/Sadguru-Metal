import React, { useState } from "react";
import { Button } from "../../ui/button";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
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
        <li className="relative group">
          <Link to="/products" className="relative py-2 transition-colors duration-300 group-hover:text-[#0a0906]">
            {t('nav.products')}
            <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#0a0906] to-[#0a0906]/50 transition-all duration-300 ${
              location.pathname === '/products' ? 'w-full' : 'w-0 group-hover:w-full'
            }`}></span>
          </Link>
        </li>
        <li className="relative group">
          <Link to="/catalog" className="relative py-2 transition-colors duration-300 group-hover:text-[#0a0906]">
            {t('nav.catalog')}
            <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#0a0906] to-[#0a0906]/50 transition-all duration-300 ${
              location.pathname === '/catalog' ? 'w-full' : 'w-0 group-hover:w-full'
            }`}></span>
          </Link>
        </li>
        <li className="relative group">
          <Link to="/contact" className="relative py-2 transition-colors duration-300 group-hover:text-[#0a0906]">
            {t('nav.contact')}
            <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#0a0906] to-[#0a0906]/50 transition-all duration-300 ${
              location.pathname === '/contact' ? 'w-full' : 'w-0 group-hover:w-full'
            }`}></span>
          </Link>
        </li>
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