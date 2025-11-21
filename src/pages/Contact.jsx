import React from "react";

const Contact = () => {
  return (
    <section className="px-16 py-20 text-[#0a0906] w-full flex flex-col gap-16">
      <div>
        <p className="text-sm text-[#0a0906]/70 mb-2">Reach out</p>
        <h1 className="text-5xl font-semibold mb-4">Get in touch</h1>
        <p className="text-lg text-[#0a0906]/70 max-w-2xl">
          We're here to help with orders, questions, or custom requests.
        </p>
      </div>

      <div className="flex gap-20 items-start w-full">

        <div className="flex flex-col gap-12 w-1/3">

          <div className="flex flex-col gap-2">
            <div className="text-2xl">✉️</div>
            <h3 className="text-xl font-semibold">Email</h3>
            <p className="text-[#0a0906]/70">Send us a message</p>
            <a href="mailto:info@metalproducts.com" className="underline text-[#0a0906] hover:text-black">
              info@metalproducts.com
            </a>
          </div>

          <div className="flex flex-col gap-2">
            <div className="text-2xl">📞</div>
            <h3 className="text-xl font-semibold">Phone</h3>
            <p className="text-[#0a0906]/70">Call during business hours</p>
            <a href="tel:+13035550147" className="underline text-[#0a0906] hover:text-black">
              +1 (303) 555-0147
            </a>
          </div>

          <div className="flex flex-col gap-2">
            <div className="text-2xl">📍</div>
            <h3 className="text-xl font-semibold">Office</h3>
            <p className="text-[#0a0906]/70 leading-relaxed">
              2847 Industrial Boulevard, Denver, Colorado 80202
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