"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import "./socials.css";

export default function About() {

  useEffect(() => {
    const timer = setTimeout(() => {
      const duckContainer = document.querySelector('.duck-container');
      if (duckContainer) {
        duckContainer.classList.remove('loading');
      }
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="socials-container">
      <Image
        src="/images/social.png"
        alt="Custom art background"
        fill
        className="background-image"
        priority
      />

      <h1 className="socials-title">Socials</h1>
      <p className="socials-subtitle">Click a link and check me out!</p>

      <div className="social-icons-container">
        <a
          href="https://github.com/YellowYoCat"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <div className="social-icon-wrapper">
            <Image
              src="/images/Github.png"
              alt="GitHub"
              width={80}
              height={80}
              className="social-icon"
            />
          </div>
        </a>

        <a
          href="https://www.linkedin.com/in/johanna-johnson"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <div className="social-icon-wrapper">
            <Image
              src="/images/Linkedin.png"
              alt="LinkedIn"
              width={80}
              height={80}
              className="social-icon"
            />
          </div>
        </a>
      </div>

      <div className="duck-container">
        <Link href="/" className="duck-link">
          <div className="cursor-hover home-cursor">
            <div className="duck-wrapper">
              <Image
                src="/images/duck.png"
                alt="Go Home"
                width={120}
                height={120}
                className="floating-duck"
              />
            </div>
          </div>
        </Link>
      </div>
    </main>
  );
}