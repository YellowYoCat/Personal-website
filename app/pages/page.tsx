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

      <h1 className={`title ${fromDuck ? "from-duck" : ""}`}>PONDFOLIO</h1>

      <Link href="/about">
        <img className="frog" src="/images/frog.png" alt="About Me" />
      </Link>

      <Link href="/social">
        <img className="koi" src="/images/KoiFish.png" alt="Socials" />
      </Link>

      <Link href="/project">
        <img className="swan" src="/images/swan.png" alt="Projects" />
      </Link>
    </div>
  );
}


