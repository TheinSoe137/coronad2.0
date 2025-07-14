import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import SOCImg from "../assets/soc.png";
import gtdImg from "../assets/swordhd.gif";
import sealstoneImg from "../assets/sealedstone.jpg";

const progressItems = [
  {
    title: "Scroll of Coronation",
    description: "Created by the High Seers of Elarien and blessed by the last flame of the Elder Crown, the scroll contains the true names and hidden fates of those worthy to rule, unworthy to lead, or chosen to guide from the shadows.",
    image: SOCImg,
  },
  {
    title: "Solstrike ",
    description: "When the skies bled gold and the twin suns collapsed into one, a final flare was captured by the ancient mages of Virellion, the high city of mirrors and light. From that dying burst of celestial fire, they forged Solstrike, a relic not of heat or flame, but of radiant judgment.",
    image: gtdImg,
  },
    {
    title: "Seal Stones",
    description: "The shard is not just a fragment of rock, it pulses faintly with earthsong, the raw resonance of the world itself. It remembers. It resists. It grants no direct magic, no flashes of power. But in battle, its bearer stands where others fall. They become a wall between ruin and redemption, forged by Queen Elarians herself.",
    image: sealstoneImg,
  }
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const card = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function ProgressSection() {
  return (
   <section
  
  className="relative min-h-screen w-full  text-white py-24 px-6 overflow-hidden"
>

  <div className="bg-black/50 h-full p-5 backdrop-brightness-75 rounded-xl">
        <h2 className="text-4xl text-center font-bold pb-10">Relics of Monarchy Kingdom</h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col md:flex-row gap-10"
        >
          {progressItems.map((item, idx) => (
            <motion.div
              key={idx}
              variants={card}
              className="bg-gray-800 rounded-xl p-6 mb-5 shadow-lg hover:shadow-purple-500/30 transition text-left"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-150 md:w-50 md:h-50 lg:w-full lg:h-100 object-cover rounded-md mb-4"
              />
              <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
              <p className=" text-sm md:text-md  text-gray-300 ">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>

          
      </div>

    </section>
  );
}
