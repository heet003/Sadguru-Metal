import React from 'react';
import { useTranslation } from 'react-i18next';

function Catalog() {
  const { t } = useTranslation();

  return (
    <div className="px-16 py-20">
      <h1 className="text-4xl font-bold text-[#0a0906] mb-4">{t('catalog.title')}</h1>
      <p className="text-lg text-gray-700">
        {t('catalog.browse')}
      </p>
    </div>
  );
}

export default Catalog;

