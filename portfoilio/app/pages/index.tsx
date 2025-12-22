"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";
import './index.css';

export default function Home() {
  const searchParams = useSearchParams();
  const [fromDuck, setFromDuck] = useState(false);
  
  useEffect(() => {
    const fromParam = searchParams.get('from');
    
    if (fromParam === 'duck') {
      setFromDuck(true);
      
     
      const timer = setTimeout(() => {
        setFromDuck(false);
      }, 1500); 
      
      return () => clearTimeout(timer);
    }
  }, [searchParams]);
  
  return (
    <div className="container">
      <h1 className={`title ${fromDuck ? 'from-duck' : ''}`}>PONDFOLIO</h1>

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