import React from "react";
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <section className="px-16 py-20 text-[#0a0906] w-full flex flex-col gap-16">
      <div>
        <p className="text-md text-[#0a0906]/70 mb-2">{t('about.label')}</p>
        <h1 className="text-5xl font-semibold mb-4">{t('about.title')}</h1>
        <p className="text-lg text-[#0a0906]/70 max-w-2xl">
          {t('about.subtitle')}
        </p>
      </div>

      <div className="flex flex-col gap-12 w-full">
        {/* Our Story */}
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-semibold">{t('about.story_title')}</h2>
          <p className="text-lg text-[#0a0906]/80 leading-relaxed max-w-4xl">
            {t('about.story_text')}
          </p>
        </div>

        {/* Our Mission */}
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-semibold">{t('about.mission_title')}</h2>
          <p className="text-lg text-[#0a0906]/80 leading-relaxed max-w-4xl">
            {t('about.mission_text')}
          </p>
        </div>

        {/* Why Choose Us */}
        <div className="flex flex-col gap-6">
          <h2 className="text-3xl font-semibold">{t('about.why_title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">
            <div className="flex flex-col gap-2">
              <div className="text-xl font-semibold flex items-center gap-2">
                <span>✓</span> {t('about.quality_title')}
              </div>
              <p className="text-[#0a0906]/70">
                {t('about.quality_text')}
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <div className="text-xl font-semibold flex items-center gap-2">
                <span>✓</span> {t('about.experience_title')}
              </div>
              <p className="text-[#0a0906]/70">
                {t('about.experience_text')}
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <div className="text-xl font-semibold flex items-center gap-2">
                <span>✓</span> {t('about.customization_title')}
              </div>
              <p className="text-[#0a0906]/70">
                {t('about.customization_text')}
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <div className="text-xl font-semibold flex items-center gap-2">
                <span>✓</span> {t('about.service_title')}
              </div>
              <p className="text-[#0a0906]/70">
                {t('about.service_text')}
              </p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-semibold">{t('about.values_title')}</h2>
          <p className="text-lg text-[#0a0906]/80 leading-relaxed max-w-4xl">
            {t('about.values_text')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
