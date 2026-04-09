"use client";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Play, Instagram, ArrowRight, ChevronDown } from "lucide-react";
import reel1 from "@/assets/instagram_reel_1_1775585006250.png";
import financeBg from "@/assets/reel-bg-finance.png";
import protectionBg from "@/assets/reel-bg-protection.png";
import growthBg from "@/assets/reel-bg-growth.png";

const reels = [
  {
    id: 1,
    title: "Ahorro vs Inversión",
    thumbnail: reel1,
    views: "12.5K",
  },
  {
    id: 2,
    title: "Tu primer Seguro",
    thumbnail: protectionBg,
    views: "8.2K",
  },
  {
    id: 3,
    title: "Plan de Retiro FAQ",
    thumbnail: growthBg,
    views: "15.1K",
  },
  {
    id: 4,
    title: "Gastos Médicos",
    thumbnail: protectionBg,
    views: "9.7K",
  },
  {
    id: 5,
    title: "Inversión Inteligente",
    thumbnail: financeBg,
    views: "11.2K",
  },
  {
    id: 6,
    title: "Protección Familiar",
    thumbnail: protectionBg,
    views: "14.8K",
  },
  {
    id: 7,
    title: "Mitos del Seguro",
    thumbnail: financeBg,
    views: "7.5K",
  },
  {
    id: 8,
    title: "Estrategia Fiscal",
    thumbnail: growthBg,
    views: "10.3K",
  },
  {
    id: 9,
    title: "Blindaje Patrimonial",
    thumbnail: protectionBg,
    views: "13.1K",
  },
  {
    id: 10,
    title: "Finanzas en Pareja",
    thumbnail: financeBg,
    views: "9.2K",
  },
];

const InstagramReels = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["5%", "-140%"]);
  const opacity = useTransform(scrollYProgress, [0.8, 1], [0, 1]);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section id="contenido" ref={targetRef} className="relative h-auto md:h-[350vh] bg-background">
      <div className="relative md:sticky top-0 h-auto md:h-screen flex flex-col justify-center overflow-hidden py-20 md:py-0">
        <div className="container mx-auto px-6 md:px-4 mb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl"
            >
              <div className="flex items-center gap-2 text-primary font-bold mb-4">
                <span className="p-1.5 bg-primary/10 rounded-lg">
                  <Instagram className="h-5 w-5" />
                </span>
                <span className="uppercase tracking-widest text-sm">Contenido Educativo</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground">
                Aprende de finanzas <span className="text-primary">en segundos.</span>
              </h2>
            </motion.div>
            
            <motion.a
              href="https://www.instagram.com/oguienforma/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 text-foreground font-bold hover:text-primary transition-colors group"
            >
              Ver todo en Instagram <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </div>
        </div>

        <div className="mb-0 md:mb-12">
          <motion.div 
            style={isMobile ? {} : { x }} 
            className="flex items-center gap-6 md:gap-8 px-6 md:px-4 overflow-x-auto md:overflow-x-visible pb-8 md:pb-0 scrollbar-hide snap-x"
          >
            {reels.map((reel) => (
              <motion.div
                key={reel.id}
                whileHover={isMobile ? {} : { y: -10 }}
                className="relative shrink-0 w-[280px] md:w-[320px] aspect-[9/16] rounded-[2.5rem] overflow-hidden group cursor-pointer shadow-2xl border border-white/10 snap-center"
              >
                <Image 
                  src={reel.thumbnail} 
                  alt={reel.title} 
                  className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 ${!isMobile ? "group-hover:scale-110" : ""}`}
                />
                
                <div className={`absolute inset-0 bg-black/20 transition-colors ${!isMobile ? "group-hover:bg-black/50" : ""}`} />
                
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="flex items-center gap-2 text-white text-xs font-bold mb-3 shadow-sm">
                    <Play className="h-3 w-3 fill-current" />
                    {reel.views} vistas
                  </div>
                  <h3 className="text-white font-bold text-xl leading-tight uppercase tracking-tight">
                    {reel.title}
                  </h3>
                </div>

                <div className={`absolute top-6 right-6 bg-white/20 backdrop-blur-md p-3 rounded-full opacity-0 transition-opacity ${!isMobile ? "group-hover:opacity-100" : ""}`}>
                  <Instagram className="h-5 w-5 text-white" />
                </div>
              </motion.div>
            ))}

            {/* Final CTA Section (Not a card) */}
            <div className="shrink-0 w-[400px] md:w-[600px] flex flex-col items-center justify-center px-12 text-center ml-12">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="space-y-8"
              >
                <div className="space-y-4">
                  <h3 className="text-4xl md:text-6xl font-bold text-foreground tracking-tighter leading-none">
                    Lleva tu futuro <br />
                    al <span className="text-primary">siguiente nivel.</span>
                  </h3>
                  <p className="text-muted-foreground text-lg md:text-xl font-medium max-w-md mx-auto">
                    Síguenos para más consejos diarios sobre protección patrimonial.
                  </p>
                </div>
                
                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="flex flex-col items-center gap-3 pt-8"
                >
                  <span className="text-xs uppercase tracking-[0.3em] font-black text-primary">Seguir Explorando</span>
                  <ChevronDown className="h-10 w-10 text-primary" />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InstagramReels;
