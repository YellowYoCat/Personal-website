import Image from "next/image";
import React, { JSX } from "react";
import Hero from "./components/Hero";
import Index from "./pages/index";

export default function HomePage(): JSX.Element {
  return (
    <main className="relative w-full min-h-screen flex items-center justify-center">
      {/* Background Artwork */}
      <Image
        src="/images/homepagestarted.png"  
        alt="Custom art background"
        fill
        className="object-cover opacity-90 -z-10"
        priority
      />

      {/* Foreground Text */}
      <Hero />
      <Index/>
    </main>
  );
}
