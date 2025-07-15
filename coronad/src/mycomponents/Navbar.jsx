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
      className={cn("fixed top-7 left-1/2 -translate-x-1/2 w-full max-w-xl z-50 ", className)}>
      <Menu setActive={setActive}>
        <HoveredLink href="/home">Home</HoveredLink>
         <HoveredLink href="/character-showcase">Characters</HoveredLink>
        
            <HoveredLink href="/relics">Relics</HoveredLink>
           <HoveredLink href="/roadmap" >Roadmap</HoveredLink>
            
        
        <HoveredLink href="/socials" >Socials</HoveredLink>
        <HoveredLink href="/comics-faq"  >Comic FAQ</HoveredLink>
       
      </Menu>
       
    </div>
  );
}
