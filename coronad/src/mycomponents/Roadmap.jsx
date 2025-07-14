"use client";
import React from "react";
import {
  TextRevealCard,

  TextRevealCardTitle,
} from "../components/ui/text-reveal-card";
import Navbar from "./Navbar";
export default function Roadmap() {
  return (<>
  <Navbar/>
 
    <div
      className="flex items-center justify-center h-[40rem] rounded-2xl w-full">
      <TextRevealCard text="Prophecy Incomplete" revealText=" Until the right time come" className="text-white">
        {/* <TextRevealCardTitle>
         
         
        </TextRevealCardTitle> */}
      
      </TextRevealCard>
    </div>
    </>
  );
}
