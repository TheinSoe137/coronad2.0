import React from 'react';
import { motion } from 'framer-motion';
import { FaTwitter, FaDiscord} from 'react-icons/fa';
import Navbar from './Navbar';
import purplebg from '../assets/purplebg.jpg';

const socials = [
  {
    name: 'Coronad',
    id: 1,
    icon: <FaTwitter className="text-blue-400 text-4xl" />,
    followers: '32.4K Followers',
    link: 'https://x.com/coronad_xyz',
   
  },
  {
    name: 'Coronad Discord',
    id: 2,
    icon: <FaDiscord className="text-indigo-500 text-4xl" />,
    followers: '16.7K Members',
    link: 'https://discord.gg/coronad',
   
  },
 
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const Socials = () => {
  return (<>
  <Navbar/>
    <main className="min-h-screen text-white px-6 py-20 flex flex-col items-center justify-center space-y-12">
      <motion.h1
        className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 pb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5}}
      >
      Our Socials & Community      </motion.h1>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full "
        
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {socials.map((social, index) => (
          <motion.a
            key={index}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className={`flex flex-col items-center justify-center border rounded-2xl p-6 shadow-lg transition-colors duration-300 ${social.color}`}
            style={{
              backgroundImage: `url(${purplebg})`,
              backgroundSize: 'cover',
              backgroundPosition: `${social.id === 1 ? 'center' : 'center'}`,
            }}
          >
            {social.icon}
            <span className="mt-4 text-xl font-semibold text-gray-200 tracking-widest">{social.name}</span>
            <span className="mt-1 text-xl text-gray-200 tracking-widest">{social.followers}</span>
          </motion.a>
        ))}
      </motion.div>
    </main>
    </>
  );
};

export default Socials;
