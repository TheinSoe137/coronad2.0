// LoreSection.jsx
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { characters } from "../assets/data.js";

export default function LoreSection() {
  const [index, setIndex] = useState(0);

  // Rotate every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % characters.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const current = characters[index];

  return (
    <section className="min-h-screen text-white flex items-center justify-center px-4">
      <div className="max-w-4xl w-full grid md:grid-cols-2 gap-6 items-center">

        {/* Image */}
        <AnimatePresence mode="wait">
          <motion.img
            key={current.image}
            src={`${current.image}`}
            alt={current.name}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.5 }}
            className="rounded-xl shadow-lg w-full max-h-[400px] object-contain"
          />
         
        </AnimatePresence>

        {/* Text */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.name}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h2 className="text-3xl sm:text-4xl font-bold">{current.name}</h2>
            <p className="text-gray-300 text-lg">{current.lore}</p>
          </motion.div>
        </AnimatePresence>
        
      </div>
    </section>
  );
}
