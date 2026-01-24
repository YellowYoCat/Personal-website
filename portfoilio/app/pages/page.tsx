"use client";

import { Suspense, useState } from "react";
import Link from "next/link";
import "./index.css";
import SearchParamWatcher from "./SearchParamWatcher";

export default function Home() {
  const [fromDuck, setFromDuck] = useState(false);

  const triggerDuck = () => {
    setFromDuck(true);
    setTimeout(() => setFromDuck(false), 1500);
  };

  return (
    <div className="container">
      <Suspense fallback={null}>
        <SearchParamWatcher onDuck={triggerDuck} />
      </Suspense>

      {/* <h1 className={`title ${fromDuck ? "from-duck" : ""}`}>PONDFOLIO</h1>
      <p>Welcome to the pond! click on an animal to get started </p> */}
      <div className="header-section">
        <h1 className={`title ${fromDuck ? "from-duck" : ""}`}>PONDFOLIO</h1>
        <p className="subtitle">Welcome to the pond! click on an animal to get started </p>
      </div>
      <Link href="/about">
        <div className="cursor-hover about-cursor">
          <img className="frog" src="/images/frog.png" alt="About Me" />
        </div>
      </Link>

      <Link href="/social">
        <div className="cursor-hover socials-cursor">
          <img className="koi" src="/images/KoiFish.png" alt="Socials" />
        </div>
      </Link>

      <Link href="/project">
        <div className="cursor-hover projects-cursor">
          <img className="swan" src="/images/swan.png" alt="Projects" />
        </div>
      </Link>
    </div>
  );
}
