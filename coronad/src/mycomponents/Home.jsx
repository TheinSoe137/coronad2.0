
import Navbar from './Navbar'



import { Vortex } from '../components/ui/vortex'
import magicshop from "../assets/magicshop.jpg"
import { motion } from 'framer-motion'
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.8,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1 },
  },
};

function Hero() {
  return (
    <>
      <Navbar />
      <section className=" flex flex-col items-center justify-center min-h-screen text-center px-4 max-w-screen mx-auto overflow-x-hidden">
        <Vortex

          rangeY={800}
          particleCount={50}
          baseHue={220}
          className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full overflow-x-hidden"
        >
          <h1 className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
            Welcome to Coronad  </h1>
          <h3 className="text-2xl sm:text-3xl lg:text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-4">
            A New Chapter in Digital Ownership
          </h3>
          <p className="mt-5 text-lg sm:text-xl text-gray-300 max-w-xl">
            A story-driven NFT universe where your assets evolve, unlock powers, and shape the future of a living comic world
          </p></Vortex>
      </section>
      {/* Lore */}
      <motion.div variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="pt-5 flex flex-col items-center justify-center min-h-screen text-center px-4 text-white">
        <motion.h3 variants={childVariants}  className='text-xl sm:text-xl lg:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-4 '>The Hidden Forest: A Legacy Reborn</motion.h3>

        <motion.p variants={childVariants}  className='mb-15 text-sm md:text-md lg:text-lg md:text-md lg:w-300'>In a secluded forest, the once-great Elven monarchy has lived in secrecy, preserving their knowledge and honoring their fallen elders. Their kingdom fell centuries ago, but they still hope to restore their legacy. To do so, they must crown a new ruler who embodies the bravery and wisdom of their ancestors. The coronation process is sacred, but an unexpected outsider—Amroth, a half-blood Elf—has discovered the forest’s location. He is determined to prove his worth and claim his place among them.</ motion.p>

        <motion.h3 variants={childVariants}  className='text-xl sm:text-xl lg:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-4 '>The Coronation of the Brave</motion.h3>

        <motion.p variants={childVariants}  className='mb-15 text-sm md:text-md lg:text-lg md:text-md lg:w-300'>The coronation ceremony is a sacred tradition where the bravest and wisest Elves prove their worth through trials that test both mind and spirit. Amroth, guided by a map he found in the ruins of an ancient kingdom, arrives seeking answers about his heritage and the truth of the Elven legacy. The Elven elders are divided—will they accept Amroth, despite his mixed blood, or will they see him as a threat to their purity?</motion.p>

        <motion.h3 variants={childVariants}  className='text-xl sm:text-xl lg:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-4 '>The Merchant’s Market</motion.h3>

        <motion.p variants={childVariants}  className='mb-15 text-sm md:text-md lg:text-lg md:text-md lg:w-300'>Nearby, a merchant market sells relics from the past: ancient weapons, shields, and wands, some of which hold untold power. While most view these items as curiosities, those who understand the Elven legacy know their true potential. These artifacts could be key in either restoring or destroying the monarchy.</motion.p>

        <motion.h3 variants={childVariants}  className='text-xl sm:text-xl lg:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-4 '>The Hidden Cells</motion.h3>

        <motion.p variants={childVariants}  className='mb-15 text-sm md:text-md lg:text-lg md:text-md lg:w-300'>There are two secret cells, marked on a map, that hold a mystery no one fully understands. The map Amroth found may lead him to these locations, where unimaginable secrets are hidden. What lies within these cells could change the fate of the Elven monarchy—if it is ever uncovered.</ motion.p>

        <motion.h3 variants={childVariants}  className='text-xl sm:text-xl lg:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-4 '>John Eolen’s Magical Shop</motion.h3>

        <motion.p  variants={childVariants} className='mb-15 text-sm md:text-md lg:text-lg md:text-md lg:w-300'>In the heart of the monarchy kingdom lies a mystical shop run by the enigmatic John Eolen. A man of few words and immense knowledge, John is a master craftsman of magical artifacts. His shop is a haven for those seeking powerful magical objects, many of which were once used by the Elven elders. John’s creations are more than just items; they are the keys to the Elves’ power and knowledge. Wands, enchanted capes, shields, helmets, Swords, Scrolls, Cursed Stones and orbs—each object holds a deep, ancient magic that connects the wearer to the spirits of the past.</ motion.p>

        <motion.p  variants={childVariants} className='mb-7 text-sm md:text-md lg:text-lg md:text-md lg:w-300'>What few know, however, is that John is not merely a craftsman; he is a guardian of secrets, tasked with protecting the ancient artifacts of the Elven monarchy. His shop serves as both a haven and a vault, preserving items that could alter the course of history if they were ever misused.</motion.p>

      </motion.div>
      <div className="flex flex-col items-center justify-center md:min-h-screen text-center px-4">
        <img src={magicshop} alt="Magic Shop" className="w-full h-auto object-cover m-10 rounded-lg" />

      </div>
      {/* giveaway link */}

      <section className="w-full py-16 px-4 text-white text-center rounded-2xl shadow-xl">
        <h2 className="text-3xl sm:text-4xl text-xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-4 ">🎁 Daily Giveaway</h2>
        <p className="mb-8 text-lg sm:text-xl">Don't miss your chance to win exciting prizes every day!</p>
        <a
          href="/giveaway"
          className="inline-block bg-white text-purple-700 hover:bg-purple-100 transition-all duration-300 font-semibold px-6 py-3 rounded-full shadow-md"
        >
          Enter Giveaway
        </a>
      </section>


    </>
  )
}

export default Hero