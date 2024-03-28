import React from "react";
import { skills } from "../data";
import { SkillTitle } from "../assets/skillTitleSvg";
import { SkillSvg } from "../assets/skillSvg";

const Skills = () => {
  return (
    <section id="skills">
      <div className="container items-center text-center mx-auto mb-10 px-20">
        <div className="mb-10 flex flex-col items-center">
          <SkillTitle />

          <h1 className="mb-4 text-3xl">Skills & Technologies</h1>
          <p>
            Good collaboration with designers, backend developers and business
            teams in agile environment.
          </p>
        </div>
        <div className="flex flex-wrap">
          {skills &&
            skills.map((skill) => (
              <div key={skill} className="p-2 sm:w-1/2 w-full">
                <div className="items-center flex p-3 bg-gray-800 rounded-md lg:mx-10">
                  <SkillSvg />
                  <span className="ml-5 text-white">{skill}</span>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
