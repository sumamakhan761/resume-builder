"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function FeatureCards() {
  const cardsRef = useRef(null);

  useEffect(() => {
    const cards = gsap.utils.toArray(".feature-card");

    cards.forEach((card: any) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: "top center+=100",
          toggleActions: "play none none reverse",
        },
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });
    });
  }, []);

  const cardVariants = {
    hover: {
      y: -10,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="w-full px-4 py-16 md:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Build Your Perfect Resume
          </h2>
          <p className="text-base text-gray-400 md:text-lg">
            Choose the perfect tool to create your professional story
          </p>
        </motion.div>

        {/* Cards Container */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {/* Card 1 */}
          <motion.div
            variants={cardVariants}
            whileHover="hover"
            className="feature-card rounded-2xl border border-gray-700 bg-gradient-to-br from-gray-900 to-gray-800 p-6 shadow-lg md:p-8"
          >
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-purple-500/10">
              <svg
                className="h-8 w-8 text-purple-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <h3 className="mb-4 text-xl font-bold text-white md:text-2xl">
              AI-Powered Templates
            </h3>
            <p className="mb-6 text-sm text-gray-400 md:text-base">
              Smart templates that adapt to your content and professional level.
              Get personalized suggestions for improvement.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full rounded-lg bg-gradient-to-r from-purple-500 to-purple-600 px-6 py-2 font-medium text-white"
            >
              Explore Templates
            </motion.button>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            variants={cardVariants}
            whileHover="hover"
            className="feature-card rounded-2xl border border-gray-700 bg-gradient-to-br from-gray-900 to-gray-800 p-6 shadow-lg md:p-8"
          >
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-500/10">
              <svg
                className="h-8 w-8 text-blue-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
                />
              </svg>
            </div>
            <h3 className="mb-4 text-xl font-bold text-white md:text-2xl">
              Real-Time Editor
            </h3>
            <p className="mb-6 text-sm text-gray-400 md:text-base">
              Edit and preview your resume in real-time. Drag-and-drop sections,
              customize styles, and see instant results.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 px-6 py-2 font-medium text-white"
            >
              Start Editing
            </motion.button>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            variants={cardVariants}
            whileHover="hover"
            className="feature-card rounded-2xl border border-gray-700 bg-gradient-to-br from-gray-900 to-gray-800 p-6 shadow-lg md:p-8"
          >
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-pink-500/10">
              <svg
                className="h-8 w-8 text-pink-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                />
              </svg>
            </div>
            <h3 className="mb-4 text-xl font-bold text-white md:text-2xl">
              Export & Share
            </h3>
            <p className="mb-6 text-sm text-gray-400 md:text-base">
              Export your resume in multiple formats (PDF, DOCX, HTML) or share
              directly with recruiters via custom link.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full rounded-lg bg-gradient-to-r from-pink-500 to-pink-600 px-6 py-2 font-medium text-white"
            >
              Export Options
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
