import React from "react";
import { ExpSvg } from "../assets/expSvg";
import { expData } from "../data";

const Experiences = () => {
  return (
    <section id="experiences">
      <div className="container items-center text-center mx-auto my-10 px-20">
        <div className="my-5 flex flex-col items-center">
          <ExpSvg />
          <h1 className="mb-4 text-3xl"> Apps I've Built</h1>
          <p className="mb-4">
            Please download Resume for my working experience in banking
            industry.
          </p>
          <p className="mb-4">
            As a Frond-end developer with above 3 years and as a functional
            support with 2 years experienced in banking industry.
          </p>
          <p className="mb-4">
            Specialize in Reactjs, Nextjs, JavaScript, HTML, CSS and responsive
            web design.
          </p>
          <p className="mb-4">I have passion with learning new technology.</p>
        </div>
        <div className="grid grid-cols-2 max-lg:grid-cols-1 py-5 justify-between gap-5">
          {expData?.map((exp) => {
            return (
              <a
                className="w-full mb-4"
                href={exp.href}
                target="_blank"
                key={exp.imgName}
              >
                <div className="flex relative h-64 max-md:h-56">
                  <img
                    alt={exp.imgName}
                    src={exp.imgPath}
                    className="absolute inset-0 w-full h-full object-cover object-center max-md:px-5 px-10"
                  />
                  <div className="relative z-10 w-full opacity-0 hover:opacity-100 text-black p-10 hover:backdrop-blur-sm">
                    <h3 className="text-2xl">{exp.title}`</h3>
                    <p className="lg:p-5">{exp.context}</p>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experiences;
