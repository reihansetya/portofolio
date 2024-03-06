import React from "react";
import { motion } from "framer-motion";

export const SkillCategory = ({ category, onSelect, isActive }) => {
  return (
    <button
      className={`w-4/12 md:text-3xl font-bold  border-b-orange-50 border-b-1/2 rounded-xl md:text-center md:px-0 px-3 pb-2 ${
        isActive
          ? "text-base-content transition-all duration-200"
          : "text-gray-400"
      }`}
      onClick={() => onSelect(category)}
    >
      {category}
    </button>
  );
};
