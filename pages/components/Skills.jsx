import React from "react";
import { SkillBox } from "./SkillBox";
import { motion } from "framer-motion";
import { SkillCategory } from "./SkillCategory";

export const Skills = () => {
  const dataSkill = {
    categories: [
      {
        name: "Front End",
        skills: [
          { name: "Javascript" },
          { name: "HTML" },
          { name: "CSS" },
          { name: "React" },
        ],
      },
      {
        name: "Back End",
        skills: [{ name: "PHP" }, { name: "Codeigniter" }, { name: "Laravel" }],
      },
      {
        name: "Database",
        skills: [{ name: "MySQL" }, { name: "MongoDB" }],
      },
    ],
  };

  return (
    <div id="skills">
      <h1 className="text-center pb-10 pt-20">Skill</h1>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        layoutId="underline"
        className="flex flex-col"
      >
        <div className="mockup-code">
          <div className="flex">
            {dataSkill.categories.map((item) => (
              <SkillCategory category={item.name} />
            ))}
          </div>
          <div className="flex p-5 bg-base-300">
            <pre className="">
              <code>tes</code>
            </pre>
            <pre className="">
              <code>tes</code>
            </pre>
            <pre className="">
              <code>tes</code>
            </pre>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
