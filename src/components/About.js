import React from "react";

const About = () => {
  return (
    <section id="about">
      <div className="container flex flex-col justify-center md:flex-row mx-auto p-20 gap-5 items-center">
        <div className="md:w-1/2 items-center flex-col lg:px-20 md:px-0">
          <h1 className="mb-4 text-3xl text-white">Hi, I'm Aye Thandar.</h1>
          <p className="mb-4 text-xl text-white">Frontend Developer</p>
          <p className="mb-8">
            Seeking a role as a frontend developer so I can use my thorough
            knowledge of programming languages, frameworks and software
            development lifecycle.
          </p>
          <div className="flex justify-start">
            <a
              href="#contact"
              className="bg-yellow-300 px-6 py-3 rounded-md mr-5 text-center text-black font-bold"
            >
              Work with me
            </a>
            <a
              href="#experiences"
              className="bg-gray-800 text-white px-6 py-3 rounded-md text-center"
            >
              See my experiences
            </a>
          </div>
        </div>
        <div className="md:w-1/2 lg:w-1/3 items-center flex justify-center p-5 border-2 rounded-full border-yellow-500">
          <img
            className="w-full h-fit rounded-full"
            alt="profile"
            src={require('../assets/myProfile.jpg')}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
