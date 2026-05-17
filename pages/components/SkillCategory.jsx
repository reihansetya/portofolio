import React from "react";
import { motion } from "framer-motion";

const SkillCategory = ({ category, onSelect, isActive }) => {
  return (
    <button
      className={`flex-1 text-xs md:text-lg font-bold border-b-2 rounded-none text-center py-2 md:py-3 px-1 truncate ${isActive
        ? "text-base-content border-b-secondary transition-all duration-200"
        : "text-gray-400 border-b-transparent"
        }`}
      onClick={() => onSelect(category)}
    >
      {category}
    </button>
  );
};

export default SkillCategory;
