import React from "react";
import { SkillBox } from "./SkillBox";
import { motion, AnimatePresence } from "framer-motion";
import { SkillCategory } from "./SkillCategory";
import { useState } from "react";

export const Skills = ({ ...props }) => {
  const dataSkill = {
    categories: [
      {
        name: "Front End",
        skills: [
          { name: "Javascript", year: "1", icon: "/images/icon-js.png" },
          { name: "HTML", year: "2", icon: "/images/icon-html.png" },
          { name: "Bootstrap", year: "2", icon: "/images/icon-bootstrap.png" },
          {
            name: "Tailwind",
            year: "research",
            icon: "/images/icon-tailwind.png",
          },
          { name: "React", year: "research", icon: "/images/icon-react.png" },
        ],
      },
      {
        name: "Back End",
        skills: [
          { name: "PHP", year: "1", icon: "/images/icon-php.png" },
          {
            name: "Codeigniter",
            year: "1",
            icon: "/images/icon-codeigniter.png",
          },
          {
            name: "Laravel",
            year: "research",
            icon: "/images/icon-laravel.png",
          },
        ],
      },
      {
        name: "Database",
        skills: [
          { name: "MySQL", year: "1", icon: "/images/icon-mysql.png" },
          {
            name: "MongoDB",
            year: "research",
            icon: "/images/icon-mongodb.png",
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
          <div className="flex">
            {dataSkill.categories.map((item) => (
              <SkillCategory
                key={item.name}
                category={item.name}
                onSelect={handleCategorySelect}
                isActive={item.name === selectedCategory.name}
              />
            ))}
          </div>
          <div className="flex p-5 bg-base-300">
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
