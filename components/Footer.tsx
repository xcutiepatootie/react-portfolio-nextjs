"use client";
import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

const Footer: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeIn" }}
      className="absolute bottom-0 left-0 z-50 mb-4 flex w-full items-center justify-center bg-transparent"
    >
      <p>© 2024 Mcee - Portfolio. All rights reserved.</p>
    </motion.div>
  );
};

export default Footer;
