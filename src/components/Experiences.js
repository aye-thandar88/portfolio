import React from "react";

const Experiences = () => {
  return (
    <section id="experiences">
      <div className="container items-center text-center mx-auto my-10 px-20">
        <div className="my-5 flex flex-col items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-26 h-16 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
            />
          </svg>
          <h1 className="mb-4 text-3xl"> Apps I've Built</h1>
          <p className="mb-4">
            Please download CV for my working experience in banking industry.
          </p>
          <p className="mb-4">
            As a Junior Frond-end developer with 2 years and functional support
            with 2 years experienced in banking industry.
          </p>
          <p className="mb-4">
            Specialize in React, JavaScript, HTML, CSS and responsive web
            design.
          </p>
          <p className="mb-4">I have passion with learning new technology.</p>
        </div>
        <div className="grid grid-cols-2 max-md:grid-cols-1 py-5 justify-between gap-5">
          <a
            className="w-full"
            href={"https://dev--statuesque-halva-7a371d.netlify.app/"}
            target="_blank"
          >
            <div className="flex relative h-72 max-md:h-56">
              <img
                alt="emp"
                src={require("../assets/emp.png")}
                className="absolute inset-0 w-full h-full object-cover object-center max-md:px-5 px-10"
              />
              <div className="relative z-10 w-full opacity-0 hover:opacity-100 text-black p-10 hover:backdrop-blur-sm">
                <h3 className="text-2xl">Employee Management CRUD</h3>
                <p className="lg:p-5">
                  Created Employee Management CRUD app by using Nextjs SSR/CSR,
                  Tailwind CSS and MongoDB
                </p>
              </div>
            </div>
          </a>
          <a
            className="w-full"
            href={"https://6qnsqz.csb.app/"}
            target="_blank"
          >
            <div className="flex relative h-72 max-md:h-56">
              <img
                alt="emp"
                src={require("../assets/calculator.png")}
                className="absolute inset-0 w-full h-full object-cover object-center max-md:px-5 px-10"
              />
              <div className="relative z-10 w-full opacity-0 hover:opacity-100 text-black p-10 hover:backdrop-blur-sm">
                <h3 className="text-2xl">Calulator</h3>
                <p className="lg:p-5">
                  Created Calulator app by using React.js
                </p>
              </div>
            </div>
          </a>
          <a
            className="w-full"
            href={"https://next-travel-eight.vercel.app/"}
            target="_blank"
          >
            <div className="flex relative h-72 max-md:h-56">
              <img
                alt="exp"
                src={require("../assets/travel.png")}
                className="absolute inset-0 w-full h-full max-md:px-5 object-cover object-center px-10"
              />
              <div className="relative z-10 w-full opacity-0 hover:opacity-100 text-black p-10 hover:backdrop-blur-lg">
                <h3 className="text-2xl">Travel App</h3>
                <p className="lg:p-5">
                  Created Travel app by using Nextjs, Typescript and Tailwind
                  CSS.
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Experiences;
