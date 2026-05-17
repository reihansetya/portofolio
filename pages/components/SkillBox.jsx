import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const SkillBox = ({ skills }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 justify-items-center">
      {skills.map((skill, index) => (
        <motion.div
          key={index}
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.25 },
          }}
          whileTap={{ scale: 0.95 }}
          style={{ x: 0 }}
          className="card pt-3 bg-base-100 shadow-xl w-full max-w-[10rem] md:max-w-[12rem]"
        >
          <figure>
            <Image
              src={skill.icon}
              width={75}
              height={75}
              alt="stack"
              className="rounded-xl md:w-[75px] md:h-[75px] w-[50px] h-[50px]"
            />
          </figure>
          <div className="card-body p-2 md:p-3 items-center text-center">
            <p className="text-xs md:text-sm text-gray-400">
              {skill.year === "research" ? "Research" : `${skill.year} Year`}
            </p>
            <p className="text-xs md:text-base">{skill.name}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default SkillBox;
