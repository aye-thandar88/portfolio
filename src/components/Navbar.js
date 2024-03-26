import React from "react";

const Navbar = ({ handlePrint, data, headers }) => {
  return (
    <header className="bg-gray-800 z-10 md:sticky top-0">
      <div className="container flex p-5 md:flex-row mx-auto items-center">
        <a
          href="#about"
          className="ml-3 text-xl text-white title-font font-medium items-center md:border-gray-700"
        >
          Portfolio
        </a>
        <nav className="flex flex-wrap justify-center text-base">
          <a href="#experiences" className="mr-5 ml-5 hover:text-white">
            Experiences
          </a>
          <a href="#skills" className="mr-5 hover:text-white">
            Skills
          </a>
          <a href="#contact" className="hover:text-white">
            Contact
          </a>
        </nav>
        <a
          href="AyeThandar-Resume.pdf"
          download="Resume-PDF-document"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            className="bg-slate-500 px-3 py-2 rounded-md mx-5 text-white"
            // onClick={handlePrint}
          >
            download CV
          </button>
        </a>
      </div>
    </header>
  );
};

export default Navbar;
