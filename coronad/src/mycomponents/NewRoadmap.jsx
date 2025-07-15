import React from "react";
import { Timeline } from "../components/ui/timeline";
import { motion } from "motion/react";
import Navabar from "./Navbar";
export default function NewRoadmap() {
  const data = [
    {
      title: "PHASE 1: FOUNDATION (Completed)",
      content: (
        <div>
          <p
            className="mb-8 italic text-lg font-normal text-neutral-800 dark:text-neutral-200">
            Building the universe in silence.

          </p>
          <ul className="text-white list-disc pl-4 text-sm md:text-base">
            <li>Started Coronad over 8 months ago</li>
            <li>Introduced the Coroverse: our original comic universe</li>
            <li>Built key relics:
              <ul className="list-disc pl-10 italic">
                <li>Scroll of Coronation</li>
                <li>Seal Stones</li>
                <li>Solstrike</li>
                <li>Eyes of the Dreamer</li>
              </ul>
            </li>
            <li>Formed roles like<span className="italic"> Graduated Crown, Crown Nad, Crown Gang, Crown</span></li>
            <li>Grew the community organically, no hype tricks
            </li>
            <li>Dropped early characters from the lore (Amroth, Dagorhir, Brogni, more)</li>
            <li>Collaborated with real builders: HaHa Wallet, Bean Exchange, Flap Exchange, NADSA by DupDupMeUp, Levr ,Poply and more</li>
            <li>Dropped early characters from the lore (Amroth, Dagorhir, Brogni, more)Publishing Coronad official website and Beta testing</li>
            <li>Publishing Coronad official website and Beta testing</li>
            <li>Publishing Drop full map of monarchy kingdom</li>
            <li>Focus on long-term value, not short-term noise</li>
          </ul>

        </div>
      ),
    },
    {
      title: "PHASE 2: THE RISE (Ongoing)",
      content: (
        <div>
          <p className="mb-8 italic text-lg font-normal text-neutral-800 dark:text-neutral-200">The relics activate. The dreamers feel it.</p>
          <ul className="text-white list-disc pl-4 text-sm md:text-base">
            <li>Eyes of the Dreamer testnet collection launched (66 supply, free mint)</li>


            <li>Secret roles and access: Dreamcaster Council</li>


            <li>Early Coronad's concepts and lore peeks shared with holders</li>


            <li>Unique banners, rune sigils, relic symbols released</li>


            <li> Crown Mint structure confirmed:</li>


            <li>Free Mint(Graduated Crown): Scrolls, Solstrike, 3x Seal Stones</li>

            <ul className="list-disc pl-10">
              <li>OG Mint (Crown Nad): 1x Seal Stone</li>


              <li>70% Guaranteed Mint: Crown Gang</li>


              <li>50% Guaranteed Mint: Crown</li>
            </ul>

            <li>Soft marketing — loud storytelling</li>


            <li>Gave this hint:</li>

            <li>“The mint price will be affordable for everyone. No stress, no barriers.”</li>
          </ul>
        </div>
      ),
    },
    {
      title: "PHASE 3: MAINNET LAUNCH (Coming Soon)",
      content: (
        <div>
          <p className="mb-8 italic text-lg font-normal text-neutral-800 dark:text-neutral-200">The PFP collection that brings the Coroverse to life.</p>
          <ul className="text-white list-disc pl-4 text-sm md:text-base">
            <li>Mainnet Coroverse PFP collection launches</li>


            <ul className="list-disc pl-10"> <li>Traits = real influence on the comic</li>


              <li>Your NFT will appear in lore, grow, evolve</li>
            </ul>

            <li>Mint access is based on relics and roles</li>


            <li>Airdrops and relic fusions begin</li>


            <li>Comic visuals, banners, scroll pages, and lore Fragment items start appearing</li>


            <li>Official lore drops become more frequent</li>


            <li>Your NFT becomes your character in the Coroverse</li>

          </ul>
        </div>
      ),
    },
    {
      title: "PHASE 4: COMIC & STORY RELEASE (Post-Mint)",
      content: (
        <div>
          <p className="mb-8 italic text-lg font-normal text-neutral-800 dark:text-neutral-200">Your NFT enters the story.</p>
          <ul className="text-white list-disc pl-4 text-sm md:text-base">
            <li>Chapter-based comics begin, connected to the NFT collection</li>


            <li>Short chapters monthly or one chapter per one month and half</li>


            <li>Traitsfull volumes every 36 months</li>


            <li>Traits, relics, and rare items shown in real comic panels</li>


            <li>Holder traits affect what happens next (rewriteable)</li>


            <li>Community votes on some story directions</li>


            <li>Secret Fragment NFT airdrops reveal lost relics or plot twists</li>


            <li>PFPs with special traits get featured in official comics</li>

          </ul>
        </div>
      ),
    },
    {
      title: "PHASE 5: EXPANSION (Future)",
      content: (
        <div>
          <p className="mb-8 italic text-lg font-normal text-neutral-800 dark:text-neutral-200">Beyond NFTs — into full storytelling power.</p>
          <ul className="text-white list-disc pl-4 text-sm md:text-base">
           <li> Digital Comic Sales and Webtoon platform launches kick off via Web3 platforms or NFT-gated access</li>


<li>Print Publishing of select arcs and collector volumes begins rollout planning</li>


<li>Physical comic books in limited print</li>


<li>Submit your own stories to become canon or side tales</li>


<li>Merch, licensing, and external partnerships</li>


<li>New characters, relics, and seasonal arcs</li>


<li>kick off via Web3 platforms or NFT-gated access</li>


<li>Revenue is reinvested to grow the comic platform and world further</li>

          </ul>
        </div>
      ),
    },
  ];
  return (<>
  <Navabar/>
    <div className="max-w-4xl mx-auto text-center mt-20">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-bold tracking-wide uppercase"
          >
            CORONAD ROADMAP
          </motion.h1>
          <p className="text-lg italic md:text-xl mt-2 text-gray-300">
            8+ Months of Building. Now We Begin.
          </p>
        </div>

    <div className="relative w-full overflow-clip">
      
      <Timeline data={data} />
    </div>
    <p className="text-center text-gray-200 max-w-2xl mx-auto px-4 mb-10">
      We didn’t rush.<br/>
We didn’t overpromise.<br/>
We built. Quietly. For 8 months.<br/>
Now the Coroverse is ready to open.<br/>
And only the crowned will rise.<br/>

    </p>
    </>
  );
}
