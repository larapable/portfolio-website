import React from "react";
import { motion } from "framer-motion";

// Define types for the props
interface TabButtonProps {
  active: boolean;
  selectTab: () => void;
  children: React.ReactNode;
}

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};

const TabButton: React.FC<TabButtonProps> = ({ active, selectTab, children }) => {
  const buttonClasses = active ? "text-[#118B50] underline decoration-white decoration-2  underline-offset-8" : "text-[#ADB7BE]";

  return (
    <button onClick={selectTab}>
      <p className={`mr-6 font-bold hover:text-[#118B50]  ${buttonClasses}`}>
        {children}
      </p>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className="h-1 bg-primary-500 mt-2 mr-3"
      ></motion.div>
    </button>
  );
};

export default TabButton;
