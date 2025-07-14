import React from "react";


import Navbar from "./Navbar";
import Progress from "./Progress";
import eyeofdreamer from "../assets/eyeofdreamer.jpg";
import eyeofdreamermobile from "../assets/eyeofdreamermobile.png";
export default function Relics() {
  return (<>
  <Navbar />
<Progress/>
      <main className="w-full rounded-b-lg shadow-lg p-8">
        {/* Hero Product Section */}
        <section
          className="relative w-full min-h-[600px] bg-cover bg-center md:bg-right lg:bg-center rounded-lg flex items-center p-4 md:p-6 lg:p-8 overflow-hidden"
          style={{ backgroundImage: `url(${eyeofdreamer})` }}
        >
          {/* Dark overlay for better text readability on top of the background image */}
          <div className="absolute inset-0 bg-black/50 md:bg-black/10"></div>

          {/* Content container for text and product image, ensuring proper stacking and responsiveness */}
          <div className="relative z-10 flex flex-col md:flex-row items-left justify-between w-full mx-auto">
            {/* Left side: Text Content */}
            <div className="text-white text-center md:text-left   md:w-1/2 p-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                Introducing the <span className="text-yellow-300">Eye of Dreamers</span>
              </h2>
                <img
                src={eyeofdreamermobile}
                alt={eyeofdreamer}
                className="md:hidden m-auto mb-5 items-center max-w-full h-auto rounded-lg shadow-2xl"
                style={{ maxWidth: '150px' }} 
              />
              <p className="text-md md:text-2xl mb-6 opacity-90">A rare 66 NFTs collection forged for those attuned to secrets, visions, and forgotten truths. 

Not all who see are awake. Not all who sleep are blind
              </p>
              <button className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-yellow-300 transition-colors duration-300 shadow-lg">
               Explore More
              </button>
            </div>

           
          </div>
        </section>

      
      </main>
    </>
  );
}
