"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import "./project.css"; 

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

        <h1 className="title">Projects</h1>


       <div className="duck-container">
        <p className="duck-instruction">Click on me to go back home!</p>
        <Link href="/" className="duck-link">
          <div className="cursor-hover home-cursor">
            <Image
              src="/images/duck.png"
              alt="Duck"
              width={220}
              height={220}
              className="duck"
              priority
            />
          </div>
        </Link>
      </div>


      <div ref={containerRef} className="scroll-container">
        <div className="scroll-content">
          <div className="sticky-container">
            <div className="content-wrapper">
              <div className="image-column">
                <div className="image-container">
                  <motion.div 
                    style={{ opacity: image1Opacity }} 
                    className="image-wrapper"
                  >
                    <Image
                      src="/images/Supernom.png"
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
                      src="/images/TuneBreaker.png"
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
                      src="/images/botanicaretaker.png"
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
                     I helped designed and coded a community-driven food finder that highlights local mom-and-pop restaurants, hidden gems, and food trucks. 
                     Built with React and AWS, the platform focuses on a clean, user-friendly interface that allows users to submit, 
                     discover, and review places not easily found on traditional maps.
                    </p>
                  </motion.div>
                  
                  
                  <motion.div 
                    style={{ opacity: text2Opacity }} 
                    className="project-container"
                  >
                    <h2 className="project-title">TuneBreaker</h2>
                    <p className="project-description">
                      I helped designed an intuitive music-learning tool that simplifies notes, chords, and keys. 
                      Guided by user research and iterative wireframing, 
                      the final experience emphasizes clarity, accessibility, 
                      and ease of learning for all skill levels.
                    </p>
                  </motion.div>
                  
                  
                  <motion.div 
                    style={{ opacity: text3Opacity }} 
                    className="project-container"
                  >
                    <h2 className="project-title">Botani CareTaker</h2>
                    <p className="project-description">
                      I designed and coded a plant care experience that helps users maintain healthy plants while they're away. 
                      The interface emphasizes clarity, reassurance, and timely guidance, making plant care feel simple and stress-free.
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