import React, { useState } from "react";
import { Button } from "../../ui/button";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="w-full bg-white flex items-center justify-between px-4 py-4 sm:px-6 sm:py-5 lg:px-16 lg:py-6 relative z-50">

        {/* Logo */}
        <div className="text-2xl sm:text-3xl font-bold italic text-[#0a0906]">
          <Link to="/">SM</Link>
        </div>

        {/* Desktop Menu - Hidden on mobile */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-12 text-[#0a0906]">
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
            <Link to="/about" className="relative py-2 transition-colors duration-300 group-hover:text-[#0a0906]">
              {t('nav.about')}
              <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#0a0906] to-[#0a0906]/50 transition-all duration-300 ${
                location.pathname === '/about' ? 'w-full' : 'w-0 group-hover:w-full'
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

        {/* Right side: Language selector + Hamburger */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Language Selector */}
          <div className="relative">
            <button
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="flex items-center gap-2 px-3 py-2 sm:px-4 border border-[#0a0906] bg-white rounded cursor-pointer hover:bg-gray-100 transition-colors min-h-[44px]"
            >
              <span className="text-sm sm:text-base">{currentLang?.name}</span>
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

          {/* Hamburger Menu Button - Visible only on mobile */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden flex flex-col items-center justify-center w-11 h-11 rounded border border-[#0a0906] bg-white hover:bg-gray-100 transition-colors"
            aria-label="Toggle mobile menu"
          >
            <span className={`block w-6 h-0.5 bg-[#0a0906] transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-[#0a0906] mt-1.5 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-[#0a0906] mt-1.5 transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </button>
        </div>

      </nav>

      {/* Mobile Menu Drawer */}
      <div className={`md:hidden fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={closeMobileMenu}></div>
      
      <div className={`md:hidden fixed top-0 right-0 h-full w-64 bg-white shadow-2xl z-50 transform transition-transform duration-300 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <span className="text-xl font-bold italic text-[#0a0906]">Menu</span>
            <button
              onClick={closeMobileMenu}
              className="w-10 h-10 flex items-center justify-center rounded hover:bg-gray-100 transition-colors"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0a0906" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          {/* Mobile Menu Links */}
          <nav className="flex-1 overflow-y-auto">
            <ul className="flex flex-col p-4">
              <li className="border-b border-gray-100">
                <Link 
                  to="/products" 
                  onClick={closeMobileMenu}
                  className={`block py-4 px-2 text-lg transition-colors ${location.pathname === '/products' ? 'text-[#0a0906] font-semibold' : 'text-[#0a0906]/70'} hover:text-[#0a0906]`}
                >
                  {t('nav.products')}
                </Link>
              </li>
              <li className="border-b border-gray-100">
                <Link 
                  to="/catalog" 
                  onClick={closeMobileMenu}
                  className={`block py-4 px-2 text-lg transition-colors ${location.pathname === '/catalog' ? 'text-[#0a0906] font-semibold' : 'text-[#0a0906]/70'} hover:text-[#0a0906]`}
                >
                  {t('nav.catalog')}
                </Link>
              </li>
              <li className="border-b border-gray-100">
                <Link 
                  to="/about" 
                  onClick={closeMobileMenu}
                  className={`block py-4 px-2 text-lg transition-colors ${location.pathname === '/about' ? 'text-[#0a0906] font-semibold' : 'text-[#0a0906]/70'} hover:text-[#0a0906]`}
                >
                  {t('nav.about')}
                </Link>
              </li>
              <li className="border-b border-gray-100">
                <Link 
                  to="/contact" 
                  onClick={closeMobileMenu}
                  className={`block py-4 px-2 text-lg transition-colors ${location.pathname === '/contact' ? 'text-[#0a0906] font-semibold' : 'text-[#0a0906]/70'} hover:text-[#0a0906]`}
                >
                  {t('nav.contact')}
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;