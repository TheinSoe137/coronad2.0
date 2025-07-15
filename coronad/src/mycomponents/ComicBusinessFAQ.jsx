import { motion } from "framer-motion";

import Navbar from "./Navbar";

import { Timeline } from "../components/ui/timeline";


export default function ComicBusinessFAQ() {
  const data = [
    {
      title: "1. What is the Coronad Comic Business?",
      content: (
        <div>
          <p className="mb-2 text-sm  md:text-base  lg:text-lg font-normal text-neutral-200 ">
            Coronad is creating a new model for comic publishing, one that
            blends traditional storytelling with NFT ownership and
            community-powered story evolution. Our comics live inside the
            Coroverse, a dynamic lore universe where storylines are influenced
            by relics, traits, and character arcs held by our collectors.
          </p>
        </div>
      ),
    },
    {
      title: "2. What makes Coronad’s comics unique?",
      content: (
        <div>
          <h3 className="text-xl font-semibold mb-4">
            NFT-Integrated Storytelling
          </h3>
          <p className="mb-2 text-sm  md:text-base  lg:text-lg font-normal text-neutral-200 ">
            Characters, traits, and items from NFT collections directly affect
            comic plots.
          </p>
          <h3 className="text-xl font-semibold mb-4">
           Living Universe
          </h3>
          <ul className="text-white list-disc pl-4 text-sm md:text-base">
            <li>
              Stories unfold in chapters and arcs that evolve based on relic
              events, trait rarity, or holder interaction.
            </li>
            <li>Airdrop Utility</li>
            <li>
              Certain NFTs unlock narrative upgrades, exclusive side stories, or
              hidden arcs.
            </li>
            
          </ul>
        </div>
      ),
    },
    {
      title: "3. How does Coronad generate revenue through comics?",
      content: (
        <div>
          <h3 className="text-xl font-semibold mb-4">Digital Comic Sales </h3>
          <p className="mb-2 text-sm  md:text-base  lg:text-lg font-normal text-neutral-200 ">
            Comics may be released as collectible NFTs or on Web3-native comic
            platforms
          </p>
          <h3 className="text-xl font-semibold mb-4">
            Future Print Publishing{" "}
          </h3>
          <p className="mb-2 text-sm  md:text-base  lg:text-lg font-normal text-neutral-200 ">
            Select arcs or legendary issues may be published physically as
            collector editions.
          </p>
          <h3 className="text-xl font-semibold mb-4">Merch & Licensing </h3>
          <p className="mb-2 text-sm  md:text-base  lg:text-lg font-normal text-neutral-200 ">
            Characters, storylines, and relics will expand into physical
            merchandise and external IP deals.
          </p>
        </div>
      ),
    },
    {
      title: "4. Who creates the comics?",
      content: (
        <div>
          <p className="mb-2 text-sm  md:text-base  lg:text-lg font-normal text-neutral-200 ">
            The Coronad core team leads production with:
          </p>

          <ul className="text-white list-disc pl-4 text-sm md:text-base">
            <li>Writers crafting long-form arcs tied to relic lore</li>
            <li>Artists designing visual storylines</li>
            <li>
              Lore Architects ensuring continuity and trait accuracy across arcs
            </li>
            <li>
              Guest creators from the Web3 and indie comic world will be
              welcomed in future phases.
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "5. How do NFTs affect the comic storyline?",
      content: (
        <div>
          <h3 className="text-xl font-semibold mb-4">
            PFP Traits = Comic Identity
          </h3>
          <p className="mb-2 text-sm  md:text-base  lg:text-lg font-normal text-neutral-200 ">
            Rare runes, relics, weapons, or sigils on your NFT may appear in
            official comic panels.
          </p>
          <h3 className="text-xl font-semibold mb-4">
            Relic Airdrops = Plot Devices
          </h3>
          <p className="mb-2 text-sm  md:text-base  lg:text-lg font-normal text-neutral-200 ">
            Special NFTs might unlock secret storylines or change outcomes.
          </p>
          <h3 className="text-xl font-semibold mb-4">Holder Influence</h3>
          <p className="mb-2 text-sm  md:text-base  lg:text-lg font-normal text-neutral-200 ">
            Select holders will be able to vote or guide future story arcs
            through council roles or relic systems.
          </p>
        </div>
      ),
    },
    {
      title: "6. Can I publish with Coronad Comics?",
      content: (
        <div>
          <p className="mb-2 text-sm  md:text-base  lg:text-lg font-normal text-neutral-200 ">
            Yes! in the future, creators will be able to submit stories to be
            part of the Coroverse Canon or Legends series:
          </p>

          <p className="mb-2 text-sm  md:text-base  lg:text-lg font-normal text-neutral-200 ">
            Canon Arcs - Reviewed and approved by the Lore Team
          </p>

          <p className="mb-2 text-sm  md:text-base  lg:text-lg font-normal text-neutral-200 ">
            Legends - Non-canon stories created by fans and contributors,
            clearly labeled as side tales.
          </p>
        </div>
      ),
    },
    {
      title: "7. Is Coronad Comics just for Web3 readers?",
      content: (
        <div>
          <p className="mb-2 text-sm  md:text-base  lg:text-lg font-normal text-neutral-200 ">
            No. Coronad is designed to reach:
          </p>

          <p className="mb-2 text-sm  md:text-base  lg:text-lg font-normal text-neutral-200 ">
            Web3 holders - who want ownership, narrative control, and unique
            drops
          </p>

          <p className="mb-2 text-sm  md:text-base  lg:text-lg font-normal text-neutral-200 ">
            Traditional comic fans - via future print editions and public comic
            portals.
          </p>
          <p className="mb-2 text-sm  md:text-base  lg:text-lg font-normal text-neutral-200 ">
            Digital-native readers - via collectible comic NFTs, viewable across
            platforms
          </p>
        </div>
      ),
    },
     {
      title: "8. How can holders benefit from Coronad Comics?",
      content: (
        <div>
          <p className="mb-2 text-sm  md:text-base  lg:text-lg font-normal text-neutral-200 ">
           Exclusive Access to special comic chapters
          </p>

          <p className="mb-2 text-sm  md:text-base  lg:text-lg font-normal text-neutral-200 ">
           Character Cameos - your PFP or relic might appear in official lore
          </p>

          <p className="mb-2 text-sm  md:text-base  lg:text-lg font-normal text-neutral-200 ">
            Permanent Upgrades - owning relics can change how your NFTs evolve

          </p>
          <p className="mb-2 text-sm  md:text-base  lg:text-lg font-normal text-neutral-200 ">
            Creator Credit - long-term holders may be featured in credits or even co-write future arcs
          </p>
        </div>
      ),
    },
     {
      title: "9. How often are comics released?",
      content: (
        <div>
          

          <p className="mb-2 text-sm  md:text-base  lg:text-lg font-normal text-neutral-200 ">
          Short-form comics - Monthly, starting after the mainnet mint
          </p>

          <p className="mb-2 text-sm  md:text-base lg:text-lg font-normal text-neutral-200 ">
            Full arcs / volumes - Every 2–3 months


          </p>
          <p className="mb-2 text-sm  md:text-base  lg:text-lg font-normal text-neutral-200 ">
          Special editions & crossovers - Released as airdrops or seasonal drops
          </p>
        </div>
      ),
    },
  ];
  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto text-center mt-20">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-bold tracking-wide uppercase"
        >
          Coronad Comic Business FAQ
        </motion.h1>
       
      </div>

      <div className="relative w-full overflow-clip">
        <Timeline data={data} />
      </div>
      <p className="text-center text-gray-200 max-w-2xl mx-auto px-4 mb-10">
       The Coroverse is not static. It's alive and your relics will guide where it grows.You don’t just hold NFTs. You hold the keys to a living comic universe.
      </p>
    </>
  );
}
