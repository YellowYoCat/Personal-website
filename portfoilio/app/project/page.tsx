"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Home() {
  const containerRef = React.useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    container: containerRef,
  });

  const text1Opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const text2Opacity = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [0, 1, 0]);
  const text3Opacity = useTransform(scrollYProgress, [0.7, 1], [0, 1]);

  return (
    <main className="relative h-screen w-full">
      {/* Background image */}
      <Image
        src="/images/wireframeshowingpage.png"
        alt="Custom art background"
        fill
        className="object-cover opacity-90 -z-10"
        priority
      />

      {/* Clickable content */}
      <div className="absolute top-8 left-8 z-30">
        <h1 className="text-white text-4xl font-bold mb-4">Favorite Projects</h1>
        <p className="text-white mb-8">Highlighting my favorite Personal Projects that I've have done</p>

        <Link href="/" className="inline-block">
          <img
            src="/images/duck.png"
            alt="Go Home"
            className="w-[200px] cursor-pointer hover:scale-105 transition-transform"
          />
        </Link>
      </div>

      {/* Scrollable content area */}
      <div ref={containerRef} className="h-full overflow-y-auto">
        <div className="h-[300vh] relative">
          <div className="sticky top-0 h-screen flex items-center justify-center">
            <div className="relative text-5xl font-bold text-white text-center">
              <motion.div 
                style={{ opacity: text1Opacity }} 
                className="absolute inset-0 flex items-center justify-center"
              >
                Nom Wrangler
              </motion.div>
              <motion.div 
                style={{ opacity: text2Opacity }} 
                className="absolute inset-0 flex items-center justify-center"
              >
                Mite
              </motion.div>
              <motion.div 
                style={{ opacity: text3Opacity }} 
                className="absolute inset-0 flex items-center justify-center"
              >
                Botani Care Taker
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}