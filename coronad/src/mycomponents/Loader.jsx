import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Home from "./Home";
import loaderImg from '../assets/gatedesktop.png';
import gatemobileImg from '../assets/gatemobile.png';
export default function Loader() {
  const navigate = useNavigate();
  const [animateOut, setAnimateOut] = useState(false);

  const handleEnterClick = () => {
    setAnimateOut(true);

    // Delay navigation until animation finishes
    setTimeout(() => {
      navigate("/home");
    }, 3000); // match this with animation duration
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black overflow-none">
      <AnimatePresence className="hidden md:block">
        {!animateOut && (
          <motion.img
            key="logo"
            src={loaderImg}
            alt="Loader-image"
            initial={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0.5, scale: 1.5}}
            transition={{ duration: 3 }}
            className="hidden md:block w-[100%] max-w-[100vw] h-auto max-h-[100vh]"

          />
        )}
      </AnimatePresence>
       <AnimatePresence className="md:hidden">
        {!animateOut && (
          <motion.img
            key="logo"
            src={gatemobileImg}
            alt="Loader-image"
            initial={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0.5, scale: 1.5}}
            transition={{ duration: 3 }}
            className="md:hidden w-[100%] max-w-[100vw] h-auto max-h-[100vh]"

          />
        )}
      </AnimatePresence>

      {!animateOut && (
        <motion.button
          onClick={handleEnterClick}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 px-6 py-3 bg-black text-white rounded-full text-lg font-semibold hover:scale-105 transition-transform z-20"
        >
          Enter the Realm
        </motion.button>
      )}
    </div>
  );
}