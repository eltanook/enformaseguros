"use client";

import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa6";

const WhatsAppFloat = () => {
  return (
    <motion.a
      href="https://wa.me/message/HG2NHDTSI3TJE1"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-[60] flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white shadow-2xl shadow-primary/40 hover:bg-primary/90 transition-colors group"
      aria-label="Contactar por WhatsApp"
    >
      <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-20 group-hover:opacity-0 transition-opacity" />
      <FaWhatsapp className="h-9 w-9 relative z-10" />
      
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="absolute right-20 bg-card border border-border px-4 py-2 rounded-xl whitespace-nowrap shadow-xl hidden md:block pointer-events-none"
      >
        <p className="text-sm font-bold text-foreground">¿Hablamos?</p>
      </motion.div>
    </motion.a>
  );
};

export default WhatsAppFloat;
