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
    <div className="max-h-screen w-full px-4 py-20 md:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">
            Build Your Perfect Resume
          </h2>
        </motion.div>

        {/* Cards Container */}
        <div ref={cardsRef} className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Card 1 */}
          <motion.div
            variants={cardVariants}
            whileHover="hover"
            className="feature-card rounded-2xl border border-gray-700 bg-gradient-to-br from-gray-900 to-gray-800 p-8 shadow-xl backdrop-blur-sm"
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
            <h3 className="mb-4 text-2xl font-bold text-white">ATS Friendly</h3>
            <p className="mb-6 text-gray-400">
              Our tool ensures your resume is optimized for Applicant Tracking
              Systems (ATS), making it easier for recruiters to find your
              profile.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            variants={cardVariants}
            whileHover="hover"
            className="feature-card rounded-2xl border border-gray-700 bg-gradient-to-br from-gray-900 to-gray-800 p-8 shadow-xl backdrop-blur-sm"
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
            <h3 className="mb-4 text-2xl font-bold text-white">
              Real-Time Editor
            </h3>
            <p className="mb-6 text-gray-400">
              Edit and preview your resume in real-time. Drag-and-drop sections,
              customize styles, and see instant results.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            variants={cardVariants}
            whileHover="hover"
            className="feature-card rounded-2xl border border-gray-700 bg-gradient-to-br from-gray-900 to-gray-800 p-8 shadow-xl backdrop-blur-sm"
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
            <h3 className="mb-4 text-2xl font-bold text-white">
              Export & Print
            </h3>
            <p className="mb-6 text-gray-400">
              Export your resume in the PDF format also print resume directly.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
