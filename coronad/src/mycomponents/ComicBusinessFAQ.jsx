import { motion } from "framer-motion";

import Navbar from "./Navbar";

const phases = [
  {
    icon: "✅", // Completed icon
    title: "1. What is the Coronad Comic Business?",
    subtitle: [""],
    tagline: "xxxxxxxx",
    bullets: [
      "Coronad is creating a new model for comic publishing, one that blends traditional storytelling with NFT ownership and community-powered story evolution. Our comics live inside the Coroverse, a dynamic lore universe where storylines are influenced by relics, traits, and character arcs held by our collectors."
    ],
  },
  {
    icon: "🔥", // Ongoing icon
    title: "2. What makes Coronad’s comics unique?",
    subtitle: ["NFT-Integrated Storytelling", "Living Universe"],

    tagline: "The relics activate. The dreamers feel it.",
    bullets: [
      "Stories unfold in chapters and arcs that evolve based on relic events, trait rarity, or holder interaction.",
      "Airdrop Utility",
      "Certain NFTs unlock narrative upgrades, exclusive side stories, or hidden arcs.",

    ],
  },
  {
    icon: "🗡️", // Coming soon icon
    title: "3. How does Coronad generate revenue through comics?",
    subtitle: ["Digital Comic Sales", "Future Print Publishing", "Merch & Licensing"],
    tagline: "Your NFT enters the story.",
    bullets: [
      "Comics may be released as collectible NFTs or on Web3-native comic platforms.",
      "Select arcs or legendary issues may be published physically as collector editions.",
      "Characters, storylines, and relics will expand into physical merchandise and external IP deals.",
    ],
  },
  {
    icon: "🎯", // Future icon
    title: "4. Who creates the comics?",
    subtitle: ["The Coronad core team leads production with:"],
    tagline: "Beyond NFTs – into full storytelling power.",
    bullets: [
      "Writers crafting long-form arcs tied to relic lore",
      "Artists designing visual storylines",
      "Lore Architects ensuring continuity and trait accuracy across arcs",
      "Guest creators from the Web3 and indie comic world will be welcomed in future phases.",

    ],
  },
   {
    icon: "🎯", // Future icon
    title: "5. How do NFTs affect the comic storyline?",
    subtitle: ["PFP Traits = Comic Identity","Relic Airdrops = Plot Devices","Holder Influence"],
    tagline: "Beyond NFTs – into full storytelling power.",
    bullets: [
      "Rare runes, relics, weapons, or sigils on your NFT may appear in official comic panels.",
      "Special NFTs might unlock secret storylines or change outcomes.",
      "Select holders will be able to vote or guide future story arcs through council roles or relic systems.",
          ],
  },
  {
    icon: "🎯", // Future icon
    title: "6. Can I publish with Coronad Comics?",
    subtitle: ["Canon Arcs ","Legends"],
    tagline: "Yes! in the future, creators will be able to submit stories to be part of the Coroverse Canon or Legends series:",
    bullets: [
      " Reviewed and approved by the Lore Team",
      "Non-canon stories created by fans and contributors, clearly labeled as side tales.",
      
          ],
  },

  {
    icon: "🎯", // Future icon
    title: "7. Is Coronad Comics just for Web3 readers?",
    subtitle: ["Web3 holders ","Traditional comic fans ","Digital-native readers"],
    tagline: "No. Coronad is designed to reach:",
    bullets: [
      "who want ownership, narrative control, and unique drops",
      "via future print editions and public comic portals",
      "via collectible comic NFTs, viewable across platforms",
      
          ],
  },
  {
    icon: "🎯", // Future icon
    title: "8. How can holders benefit from Coronad Comics?",
    subtitle: ["Character Cameos","Permanent Upgrades","Creator Credit"],
    tagline: "Exclusive Access to special comic chapters",
    bullets: [
      "your PFP or relic might appear in official lore",
      "owning relics can change how your NFTs evolve",
      " long-term holders may be featured in credits or even co-write future arcs",
      
          ],
  },
  {
    icon: "🎯", // Future icon
    title: "9. How often are comics released?",
    subtitle: ["Short-form comics","Full arcs / volumes","Special editions & crossovers"],
    tagline: "Exclusive Access to special comic chapters",
    bullets: [
      " Monthly, starting after the mainnet mint",
      "Every 2–3 months",
      " Released as airdrops or seasonal drops",
      
          ],
  },
];

const fadeVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: i => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6 },
  }),
};

export default function ComicBusinessFAQ() {
  return (<>
    <Navbar/>
    <section className="bg-parchment bg-cover bg-center text-gold py-16 px-6 font-serif">
      {/* Heading */}
      <div className="max-w-4xl mx-auto text-center m-8 md:m-16">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-3xl font-bold tracking-wide uppercase"
        >
          Coronad Comic Business FAQ
        </motion.h1>
       
      </div>

      {/* Phases */}
      <div className="max-w-3xl mx-auto space-y-12">
        {phases.map((phase, idx) => (
          <motion.div
            key={phase.title}
            custom={idx}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={fadeVariants}
            className="relative pl-10"
          >
            {/* Icon */}
            <span className="absolute left-0 top-1 text-2xl select-none">
              {phase.icon}
            </span>

            {/* Phase Title */}
            <h2 className="text-xl md:text-2xl font-bold uppercas mb-1">
              {phase.title}
              {" "}
              
            </h2>
            {/* Tagline */}
            <p className="italic text-gray-200 mb-3">
              {phase.tagline}
            </p>

            {/* Bullets */}
            {phase.subtitle && phase.subtitle.map((line,i)=> (  <div key={i} className="mb-2">
            <h3 key={i} className="text-lg text-white font-semibold">
              {line}</h3>
               <ul className="list-disc list-inside text-gray-200 text-sm md:text-base">
                {console.log(phase.bullets[i])}
                <li key={i} >{phase.bullets[i]}</li>
               </ul></div>
            ))}
            
          </motion.div>
        ))}

        <p>The Coroverse is not static. It's alive and your relics will guide where it grows.You don’t just hold NFTs. You hold the keys to a living comic universe.</p>
      </div>
    </section>
  </>
  );
}
