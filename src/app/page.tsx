"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import Card from "./FeatureCards";
import { Cover } from "@/components/ui/cover";
import Image from "next/image";
import icon from "@/assets/form.png";
import color from "@/assets/color.png";
import dnd from "@/assets/dnd.png";

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
      className="relative min-h-screen w-full overflow-x-hidden bg-gradient-to-br from-black via-gray-900 to-gray-800"
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

      <section className="scroll-section flex flex-col items-center px-4 py-20 md:flex-row-reverse md:px-20">
        <motion.div
          className="mb-10 md:mb-0 md:w-1/2"
          whileInView={{ x: [100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src={icon}
            alt="Export Options"
            width={500}
            height={450}
            className="rounded-3xl shadow-2xl"
          />
        </motion.div>
        <div className="md:w-1/2 md:pr-20">
          <h2 className="mb-6 text-4xl font-bold text-white">
            Easy Customization
          </h2>
          <p className="text-lg text-gray-300">
            Customize every aspect of your resume with our intuitive editor
          </p>
        </div>
      </section>

      <section className="scroll-section flex flex-col items-center px-4 py-20 md:flex-row md:px-20">
        <motion.div
          className="mb-10 md:mb-0 md:w-1/2"
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src={dnd}
            alt="Export Options"
            width={600}
            height={400}
            className="rounded-3xl shadow-2xl"
          />
        </motion.div>
        <div className="md:w-1/2 md:pr-20">
          <h2 className="mb-6 text-4xl font-bold text-white">
            Design Your Resume with Ease
          </h2>
          <p className="text-lg text-gray-300">
            Effortlessly design your resume with drag-and-drop functionality.
            Adjust sections, add a profile picture, and reshape your resume to
            perfectly fit your style and needs.
          </p>
        </div>
      </section>

      <section className="scroll-section flex flex-col items-center px-4 py-20 md:flex-row-reverse md:px-20">
        <motion.div
          className="mb-10 md:mb-0 md:w-1/2"
          whileInView={{ x: [100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src={color}
            alt="Export Options"
            width={600}
            height={400}
            className="rounded-3xl shadow-2xl"
          />
        </motion.div>
        <div className="md:w-1/2 md:pr-20">
          <h2 className="mb-6 text-4xl font-bold text-white">
            Personalize Your Resume
          </h2>
          <p className="text-lg text-gray-300">
            Choose from a variety of color palettes and styles to make your
            resume truly yours. Customize every detail and create a professional
            look that stands out.
          </p>
        </div>
      </section>

      <Card />
    </main>
  );
}
