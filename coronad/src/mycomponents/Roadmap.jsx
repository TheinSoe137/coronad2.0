"use client";
import { motion } from "framer-motion";
import Navbar from "./Navbar";

/**
 * Coronad Roadmap Section
 * ------------------------------------------------------
 * - Dark parchment‑style background
 * - Gold serif headings, off‑white body text
 * - Animated fade‑in for each phase (optional)
 *
 * Tailwind prerequisites:
 * ------------------------------------------------------
 * 1. Add the Google font "Crimson Text" or another serif in index.html or @import.
 * 2. Ensure the following colours exist in your Tailwind config, or replace with your own:
 *    gold:  #d4c18a   (text-gold)
 *    parchment: #1b1b1b (bg-parchment)
 */

const phases = [
  {
    icon: "✅", // Completed icon
    title: "PHASE 1: FOUNDATION",
    status: "Completed",
    tagline: "Building the world in silence.",
    bullets: [
      "Started Coronad over 8 months ago.",
      "Introduced the Coroverse, our original universe – all organic.",
      "Built key relays on test‑net locally.",
      "Fore‑minted 10+ characters (Amroth, Fëanor, Brogni, Morc).",
      "Gave hints of what we're building — no urgent rush.",
      "Seeded key concepts from the lore (Amroth, Fëanor, Bragn).",
    ],
  },
  {
    icon: "🔥", // Ongoing icon
    title: "PHASE 2: THE RISE",
    status: "Ongoing",
    tagline: "The relics activate. The dreamers feel it.",
    bullets: [
      "Eyes of the Dreamer test‑net collection launched (66 supply, free mint).",
      "Secret roles and access: Dreamcaster Council.",
      "Early airdrops and sneak peeks shared with holders.",
      "Unique banners, rune sigils, relic symbols released.",
      "Crown‑mint structure confirmed for exclusive whitelist.",
      "Crown‑mint tiers: Free Mint (1× Sig Stone), Guaranteed Mint (Crown OG).",
      "Soft marketing — loud storytelling: \"The mint price will be affordable for everyone. No stress, no barriers.\"",
    ],
  },
  {
    icon: "🗡️", // Coming soon icon
    title: "PHASE 4: MAINNET LAUNCH",
    status: "Coming Soon",
    tagline: "Your NFT enters the story.",
    bullets: [
      "Chapter‑based comics begin — connect NFT collection.",
      "Short chapters monthly, full volumes every few months.",
      "Holder traits affect what happens next.",
      "Community votes on some story directions.",
      "Secret airdrops reveal lost relics or plot twists.",
    ],
  },
  {
    icon: "🎯", // Future icon
    title: "PHASE 5: EXPANSION",
    status: "Future",
    tagline: "Beyond NFTs – into full storytelling power.",
    bullets: [
      "We didn't rush. We didn't over‑promise.",
      "We built quietly. For 8 months.",
      "Now the Coroverse is ready to open.",
      "Final Word: We didn’t rush. We didn’t over‑promise. We delivered.",
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

export default function Roadmap() {
  return (<>
  <Navbar/>
    <section className="bg-parchment bg-cover bg-center text-gold py-16 px-6 font-serif">
      {/* Heading */}
      <div className="max-w-4xl mx-auto text-center m-12">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-bold tracking-wide uppercase"
        >
          CORONAD ROADMAP
        </motion.h1>
        <p className="text-lg md:text-xl mt-2 text-gray-300">
          8+ Months of Building. Now We Begin.
        </p>
      </div>

      {/* Phases */}
      <div className="max-w-3xl mx-auto space-y-12">
        {phases.map((phase, idx) => (
          <motion.div
            key={phase.title}
            custom={idx}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeVariants}
            className="relative pl-10"
          >
            {/* Icon */}
            <span className="absolute left-0 top-1 text-2xl select-none">
              {phase.icon}
            </span>

            {/* Phase Title */}
            <h2 className="text-xl md:text-2xl font-bold uppercase">
              {phase.title}
              {" "}
              <span className="text-gray-400 capitalize font-normal">({phase.status})</span>
            </h2>
            {/* Tagline */}
            <p className="italic text-gray-400 mb-3">
              {phase.tagline}
            </p>

            {/* Bullets */}
            <ul className="list-disc list-inside space-y-1 text-gray-200 text-sm md:text-base">
              {phase.bullets.map(b => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
    </>
  );
}
