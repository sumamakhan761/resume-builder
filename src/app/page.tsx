"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import Card from "./FeatureCards";
import { Cover } from "@/components/ui/cover";
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    // GSAP animations
    gsap.from(".hero-text", {
      duration: 1,
      y: 100,
      opacity: 0,
      ease: "power4.out",
    });

    gsap.utils.toArray(".scroll-section").forEach((section: any) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top center",
        animation: gsap.from(section, {
          y: 50,
          opacity: 0,
          duration: 1,
        }),
      });
    });
  }, []);

  return (
    <main
      ref={containerRef}
      className="relative min-h-screen w-full bg-gradient-to-br from-black via-gray-900 to-gray-800"
    >
      {/* Tracking Beam */}
      <div className="fixed left-8 top-0 h-full w-1">
        <motion.div
          className="h-full w-[2px] bg-gradient-to-b from-transparent via-purple-500 to-transparent"
          style={{
            scaleY: scrollYProgress,
            boxShadow: "0 0 20px rgba(168, 85, 247, 0.6)",
          }}
        />
      </div>

      {/* Hero Section */}
      <section className="flex h-screen items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="relative z-20 mx-auto mt-6 max-w-7xl bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 bg-clip-text py-6 text-center text-4xl font-semibold text-transparent dark:from-neutral-800 dark:via-white dark:to-white md:text-4xl lg:text-6xl">
            Build amazing Resumes <br /> at <Cover>warp speed</Cover>
          </h1>

          <Link href="/resumes">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-full bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 px-8 py-3 text-lg font-semibold text-white transition-all hover:shadow-lg"
            >
              Get Started
            </motion.button>
          </Link>
        </motion.div>
      </section>
      <Card />
    </main>
  );
}
