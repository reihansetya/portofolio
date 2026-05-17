import React from "react";
import SkillBox from "./SkillBox";
import { motion, AnimatePresence } from "framer-motion";
import SkillCategory from "./SkillCategory";
import { useState } from "react";

const Skills = ({ ...props }) => {
  const dataSkill = {
    categories: [
      {
        name: "Salesforce",
        skills: [
          { name: "Lightning Web Component (LWC)", year: "1", icon: "/images/lwc-logo.png" },
          { name: "Flow", year: "2", icon: "/images/flow-logo.png" },
          { name: "Apex", year: "2", icon: "/images/apex-logo.png" },
          { name: "OmniStudio", year: "1", icon: "/images/omnistudio-logo.png" },
        ],
      },
      {
        name: "Front End",
        skills: [
          { name: "Javascript", year: "2", icon: "/images/icon-js.png" },
          { name: "HTML", year: "3", icon: "/images/icon-html.png" },
          { name: "Bootstrap", year: "3", icon: "/images/icon-bootstrap.png" },
          {
            name: "Tailwind",
            year: "1",
            icon: "/images/icon-tailwind.png",
          },
          { name: "React", year: "1", icon: "/images/icon-react.png" },
        ],
      },
      {
        name: "Back End",
        skills: [
          { name: "PHP", year: "2", icon: "/images/icon-php.png" },
          {
            name: "Codeigniter",
            year: "1",
            icon: "/images/icon-codeigniter.png",
          },
          {
            name: "Laravel",
            year: "1",
            icon: "/images/icon-laravel.png",
          },
        ],
      },
      {
        name: "Database",
        skills: [
          { name: "MySQL", year: "2", icon: "/images/icon-mysql.png" },
          {
            name: "MongoDB",
            year: "1",
            icon: "/images/icon-mongodb.png",
          },
          {
            name: "SOQL",
            year: "2",
            icon: "/images/soql-logo.png",
          },
        ],
      },
    ],
  };

  const [selectedCategory, setSelectedCategory] = useState(
    dataSkill.categories[0]
  );

  const handleCategorySelect = (category) => {
    setSelectedCategory(
      dataSkill.categories.find((cat) => cat.name === category)
    );
  };

  return (
    <div {...props} id="skills" className="pt-20">
      <h1 className="text-center pb-10">Skill</h1>
      <div className="flex flex-col">
        <div className="mockup-code">
          <div className="flex overflow-x-auto">
            {dataSkill.categories.map((item) => (
              <SkillCategory
                key={item.name}
                category={item.name}
                onSelect={handleCategorySelect}
                isActive={item.name === selectedCategory.name}
              />
            ))}
          </div>
          <div className="p-3 md:p-5 bg-base-300">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedCategory.name}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="w-full"
              >
                <SkillBox skills={selectedCategory.skills} />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
