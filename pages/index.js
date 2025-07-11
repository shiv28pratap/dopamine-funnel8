import React from "react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="bg-black min-h-screen text-white font-sans overflow-hidden">
      {/* Meme-Hook Intro */}
      <section className="flex flex-col items-center justify-center h-[90vh] text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-3xl md:text-5xl font-bold text-neon-cyan mb-4"
        >
          🤯 Daily Meme Dose for Your Brain Chemistry
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.9 }}
          className="text-base md:text-lg text-gray-400 max-w-xl"
        >
          Hook your dopamine with memes, reels, and facts you can't stop watching. Updated daily. Tap and lose track of time.
        </motion.p>
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="mt-8"
        >
          <a href="#memes" className="text-neon-magenta text-md font-semibold px-6 py-3 border border-neon-magenta hover:bg-neon-magenta hover:text-black transition-all duration-300">
            Start Scrolling
          </a>
        </motion.div>
      </section>

      {/* Meme Feed */}
      <section id="memes" className="bg-black px-4 py-12">
        <div className="max-w-2xl mx-auto space-y-12">
          {[
            {
              text: "When your brain runs on memes instead of sleep.",
              img: "https://i.imgur.com/nRWdlwU.jpg"
            },
            {
              text: "This is what dopamine withdrawal looks like...",
              img: "https://i.imgur.com/MiT5cLf.jpeg"
            },
            {
              text: "POV: You said just one reel. It's 3:47am.",
              img: "https://i.imgur.com/EeRjZh8.jpeg"
            }
          ].map((meme, idx) => (
            <div key={idx} className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg">
              <img src={meme.img} alt="meme" className="w-full object-cover" />
              <p className="text-white p-4 text-center text-sm">{meme.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-black px-6 py-16 text-center">
        <h4 className="text-2xl md:text-4xl font-bold text-white mb-6">
          That hit different?
        </h4>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-neon-cyan text-md font-semibold px-6 py-3 border border-neon-cyan hover:bg-neon-cyan hover:text-black transition-all duration-300"
        >
          Follow for Daily Mind Melts 💥
        </a>
      </section>
    </div>
  );
}
