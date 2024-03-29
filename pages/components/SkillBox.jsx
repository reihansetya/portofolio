import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const SkillBox = ({ skills }) => {
  return (
    <div className="flex flex-wrap gap-5 justify-around">
      {skills.map((skill, index) => (
        <motion.div
          key={index}
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.25 },
          }}
          whileTap={{ scale: 1 }}
          style={{ x: 0 }}
          className="card pt-3 bg-base-100 shadow-xl md:w-52 w-32"
        >
          <figure className="">
            <Image
              src={skill.icon}
              width={75}
              height={75}
              alt="stack"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body p-3 items-center text-center">
            <p className="text-sm text-gray-400">
              {skill.year === "research" ? "Research" : `${skill.year} Year`}
            </p>
            <p className="">{skill.name}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default SkillBox;
