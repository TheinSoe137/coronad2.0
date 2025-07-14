"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../components/ui/navbar-menu";
import { cn } from "../lib/utils";



export default function Navbar({
  className
}) {
  const [active, setActive] = useState(null);
  return (
    <div
      className={cn("fixed top-7 inset-x-0 max-w-xl mx-auto z-50", className)}>
      <Menu setActive={setActive}>
        <HoveredLink href="/home">Home</HoveredLink>
         <HoveredLink href="/character-showcase">Character Showcase</HoveredLink>
        
            <HoveredLink href="/relics">Relics</HoveredLink>
           <HoveredLink href="/roadmap">Roadmap</HoveredLink>
            
        
        <HoveredLink href="/socials">Socials</HoveredLink>
        <HoveredLink href="/comics-faq">Comic Business FAQ</HoveredLink>
      </Menu>
    </div>
  );
}
