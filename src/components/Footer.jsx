import React from "react";

const Footer = () => {
  return (
    <footer className="bgwhite border-blue-200 mt-12 shadow-inner">
      <div className="container mx-auto px-6 md:px-16 lg:px-24 py-10 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center mb-6 md:mb-0">
          <span className="text-blue-600 font-extrabold text-2xl tracking-tight mr-2">
            E-Commerce
          </span>
        </div>
        <div className="text-gray-700 text-sm mb-6 md:mb-0 text-center md:text-left leading-relaxed">
          <div>
            <span className="font-semibold">Indirizzo:</span> Via Roma 123,
            00100 Roma (RM)
          </div>
          <div>
            <span className="font-semibold">P.IVA:</span> 12345678901
          </div>
          <div>
            <span className="font-semibold">Email:</span>{" "}
            <a
              href="mailto:info@ecommerce.it"
              className="text-blue-500 hover:underline"
            >
              info@ecommerce.it
            </a>
          </div>
          <div>
            <span className="font-semibold">Tel:</span>{" "}
            <a
              href="tel:+39061234567"
              className="text-blue-500 hover:underline"
            >
              +39 06 1234567
            </a>
          </div>
        </div>
        <div className="text-gray-400 text-xs text-center md:text-right">
          &copy; {new Date().getFullYear()}{" "}
          <span className="font-semibold text-blue-500">E-Commerce</span>. Tutti
          i diritti riservati.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
