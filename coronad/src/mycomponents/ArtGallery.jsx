
// import { useEffect, useState } from "react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { characters } from "../assets/data.js";
import Navbar from "./Navbar.jsx";

const images = characters.map(character => character.image);


const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, scale: 0.9, y: 30 },
  show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ArtGallery() {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const interval = setInterval(
      () => setCurrent((prev) => (prev + 1) % characters.length),
      7500
    );
    return () => clearInterval(interval);
  }, [current]);

  const variants = {
    enter: { opacity: 0, x: 50 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 },
  };
   const variantmobile = {
    enter: { opacity: 0, y: -50 },
    center: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 50 },
  };

  return (<>

    {/* heading */}
    <Navbar />
    <h1 className="font-bold text-4xl mt-20 md:mt-30 md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
      Character Showcase </h1>
    {/* Container gallery + character lore */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Gallery */}
      {/* for desktop and tablet view */}
      <section className="hidden md:block  min-h-screen text-white px-4 py-16 flex items-center justify-center">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className=" grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl w-full"
        >
          {images.map((src, idx) => (
            <motion.div key={idx} variants={item} whileHover={{ scale: 1.05 }} onClick={() => setCurrent(idx)}>
              <img src={src} alt={`Art ${idx + 1}`} className={`rounded-lg shadow-lg w-full h-40 lg:h-48 object-cover border-2 ${current === idx ? "border-purple-500" : "border-transparent"
                }`} />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* for mobile view */}
      <section className="block md:hidden text-white p-4 flex items-center justify-center">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-row flex-nowrap overflow-x-auto scrollbar-hide w-full space-x-4"
        // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
        >
          {images.map((src, idx) => (
            <motion.div
              key={idx}
              variants={item}
              whileHover={{ scale: 1.05 }}
              onClick={() => setCurrent(idx)}
              className="min-w-[8rem]"
            >
              <img
                src={src}
                alt={`Art ${idx + 1}`}
                className={`rounded-lg shadow-lg w-full h-40 object-cover border-2 ${current === idx ? "border-purple-500" : "border-transparent"
                  }`}
              />
            </motion.div>
          ))}
        </motion.div>
      </section>
      {/* Character Lore */}
      <section className="hidden md:flex max-w:1/2 min-h-screen text-white px-4 py-4 md:py-16 ">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.6 }}
            className="space-y-6 align-center sticky top-10 bottom-10 text-center  w-full max-w-md m-auto min-h-[500px]  "
          >
            <img
              src={characters[current].image}
              alt={characters[current].name}
              className="w-[300px] m-auto   object-cover rounded-xl shadow-md "
            />
            <h2 className="text-3xl font-bold text-white ">{characters[current].name}</h2>
            <p className="text-gray-300">{characters[current].lore}</p>
          </motion.div>
        </AnimatePresence> 
        </section>
 {/* Character Lore Mobile*/}
        <section className="flex md:hidden max-w:1/2  text-white px-4 py-4 md:py-16 ">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            variants={variantmobile}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.6 }}
            className="space-y-6 align-center sticky top-10 buttom-10  text-center  w-full max-w-md m-auto min-h-[500px]  "
          >
            <img
              src={characters[current].image}
              alt={characters[current].name}
              className="w-[300px] m-auto   object-cover rounded-xl shadow-md "
            />
            <h2 className="text-3xl font-bold text-white ">{characters[current].name}</h2>
            <p className="text-gray-300">{characters[current].lore}</p>
          </motion.div>
        </AnimatePresence> 
        </section>
    </div>

  </>
  );
}
