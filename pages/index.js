import React from "react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="bg-black min-h-screen text-white font-sans overflow-hidden">
      <section className="flex flex-col items-center justify-center h-[90vh] text-center px-6 relative">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl md:text-5xl font-bold text-neon-cyan drop-shadow-lg"
        >
          Everything You Know About Success Is Backwards
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-4 text-base md:text-lg text-gray-400"
        >
          Dopamine is the real cheat code — and you’re one tap away from using it.
        </motion.p>
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="mt-8"
        >
          <button className="text-neon-magenta text-md font-semibold px-6 py-3 bg-transparent border border-neon-magenta hover:bg-neon-magenta hover:text-black transition-all duration-300">
            Unlock It. Don’t Think.
          </button>
        </motion.div>
      </section>
      <section className="bg-black px-4 py-14">
        <div className="max-w-md mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-neon-magenta mb-4">
            Here’s how the system hacks your brain (you’ve already felt it)
          </h2>
          <p className="text-gray-400 text-base">
            Every scroll, every flicker, every delay is engineered to trigger your reward center. This isn't UI, it's neural warfare.
          </p>
        </div>
      </section>
      <section className="bg-gradient-to-b from-black to-gray-900 px-4 py-14 text-center">
        <h3 className="text-neon-cyan text-lg font-semibold mb-3">
          92,431 users report losing track of time within 3 minutes
        </h3>
        <p className="text-gray-400 max-w-md mx-auto text-sm">
          Used by CEOs, Gamers, Night Owls, and ADHD Hackers. The longer you wait, the stronger the algorithm gets. Don’t be the last human left.
        </p>
      </section>
      <section className="bg-black px-4 py-16 text-center">
        <h4 className="text-2xl md:text-4xl font-bold text-white mb-6">
          Tap In. Black Out. Repeat.
        </h4>
        <button className="text-neon-cyan text-md font-semibold px-6 py-3 bg-transparent border border-neon-cyan hover:bg-neon-cyan hover:text-black transition-all duration-300">
          Start the Sequence
        </button>
      </section>
    </div>
  );
}
