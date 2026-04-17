"use client";

import { Button } from "@/components/ui/button";
import { ShieldCheck, TrendingUp, HeartHandshake, MoveRight, ChevronDown } from "lucide-react";
import { motion, useScroll, useTransform, useInView, useSpring, useMotionValue } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Variants } from "framer-motion";
import Image from "next/image";
import premiumHero from "@/assets/premium_finance_hero_1775584913969.png";

const Counter = ({ value, suffix = "", prefix = "" }: { value: number; suffix?: string; prefix?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
  });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      setDisplayValue(Math.floor(latest));
    });
  }, [springValue]);

  return <span ref={ref}>{prefix}{displayValue}{suffix}</span>;
};

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const stickerY1 = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const stickerY2 = useTransform(scrollYProgress, [0, 1], [0, 60]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section ref={ref} className="relative pt-20 pb-24 md:pt-32 md:pb-40 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute inset-0 bg-background overflow-hidden">
          {/* Green grid (Soft & Premium) */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#006f4f0d_1px,transparent_1px),linear-gradient(to_bottom,#006f4f0d_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)]" />
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-4 relative z-10">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >
            <motion.span 
              variants={itemVariants}
              className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-[0.2em] mb-6"
            >
              Asesoría Certificada CNSF & MDRT
            </motion.span>
            
            <motion.h1 
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1]"
            >
              Construye un futuro <span className="text-primary">financiero sólido.</span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="mt-8 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium"
            >
              Asesoría estratégica en seguros, ahorro y retiro para proteger lo que más valoras. Transformamos incertidumbre en tranquilidad patrimonial.
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5"
            >
              <Button 
                className="group relative rounded-full px-12 h-16 text-lg font-bold shadow-premium hover:shadow-premium-lg hover:-translate-y-1 transition-all duration-300 bg-primary text-white overflow-hidden w-full sm:w-auto" 
                asChild
              >
                <a href="#agenda" className="flex items-center justify-center gap-3">
                  <span>Comenzar mi Asesoría Gratuita</span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    className="transition-transform duration-300 group-hover:translate-x-2"
                  >
                    <MoveRight className="h-6 w-6" />
                  </motion.div>
                </a>
              </Button>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mt-16 flex flex-col items-center lg:items-start gap-4"
            >
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="flex flex-col items-center lg:items-start gap-3"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full border-2 border-primary/30 flex items-center justify-center">
                    <ChevronDown className="h-6 w-6 text-primary animate-pulse" />
                  </div>
                  <span className="text-xs font-black uppercase tracking-[0.3em] text-primary/60">Descubre nuestra estrategia</span>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative flex justify-center lg:justify-end mb-8 lg:mb-0"
          >
            <div className="relative group p-12">
              <motion.div 
                animate={{ 
                  y: [0, -20, 0],
                  rotate: [0, 2, -2, 0]
                }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="relative z-10"
              >
                <Image 
                  src="/hero-image.png" 
                  alt="Asesoría financiera premium - En Forma Seguros" 
                  width={550}
                  height={534}
                  className="w-[450px] sm:w-[550px] lg:w-[600px] h-auto object-contain transform transition-transform duration-700 hover:scale-105 drop-shadow-2xl" 
                  priority
                  fetchPriority="high"
                  sizes="(max-width: 360px) 100vw, (max-width: 480px) 450px, (max-width: 768px) 550px, (max-width: 1200px) 600px, 600px"
                  quality={80}
                />
              </motion.div>
              
              {/* Floating badges (Redesigned & Repositioned to overlap more) */}
              <motion.div 
                style={{ y: stickerY1 }}
                animate={{ 
                  y: [-10, 10, -10],
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                whileHover={{ scale: 1.1 }}
                className="absolute bottom-8 left-8 sm:bottom-16 sm:left-16 z-20 bg-[#262362]/90 text-white p-4 sm:p-6 rounded-[1.5rem] sm:rounded-[2rem] shadow-premium-lg backdrop-blur-xl min-w-[100px] sm:min-w-[140px] will-change-transform scale-90 sm:scale-100"
              >
                <div className="text-center">
                  <p className="text-3xl font-bold tracking-tighter">MDRT</p>
                  <p className="text-[10px] opacity-70 font-black tracking-widest uppercase mt-1">Global Standard</p>
                </div>
              </motion.div>

               <motion.div 
                style={{ y: stickerY2 }}
                whileHover={{ scale: 1.1 }}
                className="absolute top-1/2 right-4 sm:top-1/4 sm:right-8 z-20 bg-primary/60 text-white p-4 sm:p-6 rounded-[1.5rem] sm:rounded-[2rem] shadow-premium-lg backdrop-blur-xl min-w-[100px] sm:min-w-[140px] translate-y-[-50%] sm:translate-y-0 will-change-transform scale-90 sm:scale-100"
              >
                <div className="text-center">
                  <p className="text-4xl font-black tabular-nums tracking-tighter">
                     <Counter value={100} suffix="%" />
                  </p>
                  <p className="text-[10px] opacity-80 font-black tracking-widest uppercase mt-1">Personalizado</p>
                </div>
              </motion.div>

               <motion.div 
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                whileHover={{ scale: 1.1 }}
                className="absolute top-4 left-4 sm:top-4 sm:left-10 z-20 bg-white/60 dark:bg-card/60 p-4 sm:p-6 rounded-[1.5rem] sm:rounded-[2rem] shadow-premium-lg border border-border/50 backdrop-blur-xl min-w-[100px] sm:min-w-[140px] will-change-transform scale-90 sm:scale-100"
              >
                <div className="text-center">
                  <p className="text-4xl font-black text-foreground tabular-nums tracking-tighter">
                    <Counter value={500} prefix="+" />
                  </p>
                  <p className="text-[10px] text-muted-foreground font-black tracking-widest uppercase mt-1">Familias</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
