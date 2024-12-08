"use client";

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function FeatureCards() {
  const cardsRef = useRef(null);

  useEffect(() => {
    const cards = gsap.utils.toArray('.feature-card');
    
    cards.forEach((card: any) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: "top center+=100",
          toggleActions: "play none none reverse"
        },
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      });
    });
  }, []);

  const cardVariants = {
    hover: {
      y: -10,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Build Your Perfect Resume
          </h2>
          <p className="text-gray-400 text-lg">
            Choose the perfect tool to create your professional story
          </p>
        </motion.div>

        {/* Cards Container */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <motion.div 
            variants={cardVariants}
            whileHover="hover"
            className="feature-card bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700 shadow-xl backdrop-blur-sm"
          >
            <div className="h-14 w-14 bg-purple-500/10 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">AI-Powered Templates</h3>
            <p className="text-gray-400 mb-6">
              Smart templates that adapt to your content and professional level. Get personalized suggestions for improvement.
            </p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-6 py-2 rounded-lg font-medium"
            >
              Explore Templates
            </motion.button>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            variants={cardVariants}
            whileHover="hover"
            className="feature-card bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700 shadow-xl backdrop-blur-sm"
          >
            <div className="h-14 w-14 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Real-Time Editor</h3>
            <p className="text-gray-400 mb-6">
              Edit and preview your resume in real-time. Drag-and-drop sections, customize styles, and see instant results.
            </p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-2 rounded-lg font-medium"
            >
              Start Editing
            </motion.button>
          </motion.div>

          {/* Card 3 */}
          <motion.div 
            variants={cardVariants}
            whileHover="hover"
            className="feature-card bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700 shadow-xl backdrop-blur-sm"
          >
            <div className="h-14 w-14 bg-pink-500/10 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Export & Share</h3>
            <p className="text-gray-400 mb-6">
              Export your resume in multiple formats (PDF, DOCX, HTML) or share directly with recruiters via custom link.
            </p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-pink-500 to-pink-600 text-white px-6 py-2 rounded-lg font-medium"
            >
              Export Options
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
