// src/components/Hero.jsx
import React from "react";
import { motion } from "framer-motion";
import CodeAnimator from "./CodeAnimator";

export default function Hero() {
  return (
    <section className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-12 md:py-16 px-6 md:px-0">
      {/* Background blob (hidden on very small screens) */}
      <div
        aria-hidden
        className="hidden md:block absolute -left-32 -top-32 w-96 h-96 rounded-full"
        style={{
          background: "var(--primary-grad)",
          filter: "blur(100px)",
          opacity: 0.18,
        }}
      />

      {/* Left content */}
      <div className="relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight"
        >
          Hi, I'm <span className="gradient-text">Sanmeet Singh</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-600 mt-4 text-base sm:text-lg max-w-xl"
        >
          Frontend & Full-stack Developer • AI/IoT Enthusiast
        </motion.p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#contact"
            className="px-5 py-3 rounded-lg font-medium shadow-md transition hover:scale-105"
            style={{ background: "var(--primary-grad)", color: "white" }}
          >
            Hire Me
          </a>
          <a
            href="/Sanmeet_Resume_2025.pdf"
            className="px-5 py-3 rounded-lg font-medium border text-gray-700 hover:bg-gray-50 transition"
          >
            Download Resume
          </a>
        </div>
      </div>

      {/* Right side code animation */}
      <div className="relative z-10 w-full md:w-auto">
        {/* Make the container responsive: full width on small screens, fixed max width on md+ */}
        <div className="w-full max-w-full md:max-w-[520px] h-[220px] sm:h-[260px] md:h-[300px]">
          <CodeAnimator className="w-full h-full" typingSpeed={120} />
        </div>
      </div>
    </section>
  );
}
