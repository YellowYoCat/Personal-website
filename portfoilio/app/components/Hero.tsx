// src/components/Hero.tsx
"use client";

import { motion } from "framer-motion";
import React, { JSX } from "react";

export default function Hero(): JSX.Element {
  return (
    <motion.h1
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-5xl text-white font-bold drop-shadow"
    >
      {/* My Portfoilio */}
    </motion.h1>
  );
}
