"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Instagram, Loader2 } from "lucide-react";
import Image from "next/image";

interface ReelCardProps {
  id: string;
  thumbnail: any;
  title: string;
  isMobile: boolean;
}

const ReelCard = ({ id, thumbnail, title, isMobile }: ReelCardProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [iframeLoaded, setIframeLoaded] = useState(false);

  return (
    <motion.div
      whileHover={isMobile || isLoaded ? {} : { y: -10 }}
      className="relative shrink-0 w-[300px] md:w-[350px] h-[550px] md:h-[620px] rounded-[2rem] overflow-hidden shadow-premium-lg border border-white/5 bg-black/5 snap-center group cursor-pointer transition-all duration-300"
      onClick={() => !isLoaded && setIsLoaded(true)}
    >
      <AnimatePresence mode="wait">
        {!isLoaded ? (
          <motion.div
            key="thumbnail"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-10"
          >
            <Image
              src={thumbnail}
              alt={`Miniatura del reel: ${title} - En Forma Seguros`}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/90 transition-colors" />
            
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-20 h-20 rounded-full bg-primary flex items-center justify-center shadow-premium relative z-20 group/play"
              >
                <Play className="h-8 w-8 text-white fill-current ml-1" />
              </motion.div>
            </div>

            {/* Content Info */}
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
              <div className="flex items-center gap-2 text-white/60 mb-2 font-branding">
                 <Instagram className="h-4 w-4" />
                 <span className="text-[10px] uppercase tracking-widest font-black">Instagram Reel</span>
              </div>
              <h3 className="text-white font-bold text-xl leading-tight uppercase tracking-tight drop-shadow-lg">
                {title}
              </h3>
            </div>

            {/* Interaction Glow */}
            <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-500" />
          </motion.div>
        ) : (
          <motion.div
            key="iframe"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 flex items-center justify-center bg-black"
          >
            {!iframeLoaded && (
              <div className="absolute inset-0 flex items-center justify-center z-0 bg-background/10 backdrop-blur-sm">
                <Loader2 className="h-10 w-10 text-primary animate-spin" />
              </div>
            )}
            <iframe
              src={`https://www.instagram.com/reel/${id}/embed?hidecaption=1`}
              className="w-full h-full border-none relative z-10 overflow-hidden"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              allowFullScreen
              scrolling="no"
              onLoad={() => setIframeLoaded(true)}
              title={`Instagram Reel: ${title}`}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ReelCard;
