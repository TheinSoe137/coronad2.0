"use client";
import React from "react";
import { motion } from "motion/react";



const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children
}) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative ">
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer text-white hover:opacity-[0.9] dark:text-white">
        {item}
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 0.85, y: 0 }}
          transition={transition}>
          {active === item && (
            <div
              className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4">
              <motion.div
                transition={transition}
               
                layoutId="active"
                className="bg-black backdrop-blur-sm rounded md:rounded-2xl overflow-hidden border border-white/[0.2] shadow-xl">
                <motion.div
                  
                  layout
                  className=" p-4">
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children
}) => {
  return (
    <nav
      // resets the state
      onMouseLeave={() => setActive(null)}
      className="text-xs md:text-base
        relative rounded-lg md:rounded-full border border-transparent bg-black/70 border-white/[0.2]
        backdrop-blur-md shadow-input
        flex justify-center text-center
        items-center 
       
        overflow-x-auto scrollbar-hide
      
      "
      style={{ WebkitOverflowScrolling: "touch" }} >
          {children}
    </nav>
  );
};

export const ProductItem = ({
  title,
  description,
  href,
  src
}) => {
  return (
    <a href={href} className="flex space-x-2">
      <img
        src={src}
        width={140}
        height={70}
        alt={title}
        className="shrink-0 rounded-md shadow-2xl" />
      <div>
        <h4 className="text-xl font-bold mb-1 text-black dark:text-white">
          {title}
        </h4>
        <p className="text-neutral-700 text-sm max-w-[10rem] dark:text-neutral-300">
          {description}
        </p>
      </div>
    </a>
  );
};

export const HoveredLink = ({
  children,
  ...rest
}) => {
  return (
    <a
      {...rest}
      className="py-2 flex-1 md:p-2 text-xs md:text-sm text-neutral-200  hover:text-neutral-500 ">
      {children}
    </a>
  );
};
