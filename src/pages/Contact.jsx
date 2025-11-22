import React from "react";
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section className="px-16 py-20 text-[#0a0906] w-full flex flex-col gap-16">
      <div>
        <p className="text-md text-[#0a0906]/70 mb-2">{t('contact.reach_out')}</p>
        <h1 className="text-5xl font-semibold mb-4">{t('contact.title')}</h1>
        <p className="text-lg text-[#0a0906]/70 max-w-2xl">
          {t('contact.subtitle')}
        </p>
      </div>

      <div className="flex gap-20 items-start w-full">

        <div className="flex flex-row w-full justify-between">

          <div className="flex flex-col gap-2">
            <div className="text-xl font-semibold">✉️ {t('contact.email')}</div>
            <p className="text-[#0a0906]/70">{t('contact.email_text')}</p>
            <a href="mailto:info@metalproducts.com" className="underline text-[#0a0906] hover:text-black">
              sadgurumetal45@gmail.com
            </a>
          </div>

          <div className="flex flex-col gap-2">
            <div className="text-xl font-semibold">📞 {t('contact.phone')}</div>
            <p className="text-[#0a0906]/70">{t('contact.phone_text')}</p>
            <a href="tel:+13035550147" className="underline text-[#0a0906] hover:text-black">
              +91 9712134409
            </a>
          </div>

          <div className="flex flex-col gap-2">
            <div className="text-xl font-semibold">📍 {t('contact.office')}</div>
            <p className="text-[#0a0906]/70 leading-relaxed">
              Shree Hari Industry, Rajkot, Gujarat 360002, India
            </p>

            {/* <a
              href="https://www.google.com/maps/search/?api=1&query=2847+Industrial+Boulevard,+Denver,+Colorado+80202"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-[#0a0906] hover:text-black flex items-center gap-1 mt-1"
            >
              Get directions →
            </a> */}
          </div>
        </div>

        {/* <div className="flex-1">
          <iframe
            title="Office Map"
            width="100%"
            height="450"
            className="rounded-md"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src={`https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=2847+Industrial+Boulevard,+Denver,+Colorado+80202`}
          ></iframe>
        </div> */}

      </div>
    </section>
  );
};

export default Contact;