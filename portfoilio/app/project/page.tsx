"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import "./project.css"; // Import the CSS file

export default function Home() {
  const containerRef = React.useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    container: containerRef,
  });

  const text1Opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const text2Opacity = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [0, 1, 0]);
  const text3Opacity = useTransform(scrollYProgress, [0.7, 1], [0, 1]);

  const image1Opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const image2Opacity = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [0, 1, 0]);
  const image3Opacity = useTransform(scrollYProgress, [0.7, 1], [0, 1]);

  return (
    <main className="custom-container">
      <Image
        src="/images/wireframeshowingpage.png"
        alt="Custom art background"
        fill
        className="background-image"
        priority
      />

        <h1 className="title">Favorite Projects</h1>


      <div className="duck-container">
        <Link href="/" className="inline-block">
          <img
            src="/images/duck.png"
            alt="Go Home"
            className="duck-image"
          />
        </Link>
      </div>


      <div ref={containerRef} className="scroll-container">
        <div className="scroll-content">
          <div className="sticky-container">
            <div className="content-wrapper">
              {/* Left side image container */}
              <div className="image-column">
                <div className="image-container">
                  <motion.div 
                    style={{ opacity: image1Opacity }} 
                    className="image-wrapper"
                  >
                    <Image
                      src="/images/project1-image.png"
                      alt="Nom Wrangler Project"
                      width={384}
                      height={384}
                      className="project-image"
                    />
                  </motion.div>
                  <motion.div 
                    style={{ opacity: image2Opacity }} 
                    className="image-wrapper"
                  >
                    <Image
                      src="/images/project2-image.png"
                      alt="Mite Project"
                      width={384}
                      height={384}
                      className="project-image"
                    />
                  </motion.div>
                  <motion.div 
                    style={{ opacity: image3Opacity }} 
                    className="image-wrapper"
                  >
                    <Image
                      src="/images/project3-image.png"
                      alt="Botani Care Taker Project"
                      width={384}
                      height={384}
                      className="project-image"
                    />
                  </motion.div>
                </div>
              </div>

              
              <div className="text-column">
                <div className="text-content-container">
                  
                  <motion.div 
                    style={{ opacity: text1Opacity }} 
                    className="project-container"
                  >
                    <h2 className="project-title">Nom Wrangler</h2>
                    <p className="project-description">
                      A food delivery app that connects local chefs with food enthusiasts. 
                      Built with React Native and Firebase, featuring real-time order tracking 
                      and chef profiles.
                    </p>
                  </motion.div>
                  
                  
                  <motion.div 
                    style={{ opacity: text2Opacity }} 
                    className="project-container"
                  >
                    <h2 className="project-title">Mite</h2>
                    <p className="project-description">
                      A minimalist task management tool for developers. Features include 
                      markdown support, GitHub integration, and a clean, distraction-free interface.
                    </p>
                  </motion.div>
                  
                  
                  <motion.div 
                    style={{ opacity: text3Opacity }} 
                    className="project-container"
                  >
                    <h2 className="project-title">Botani Care Taker</h2>
                    <p className="project-description">
                      An IoT plant monitoring system that tracks soil moisture, light levels, 
                      and temperature. Sends automated watering reminders and health alerts.
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}