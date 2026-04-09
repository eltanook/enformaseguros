"use client";

import { Button } from "@/components/ui/button";
import { ShieldCheck, TrendingUp, HeartHandshake, MoveRight, ChevronDown } from "lucide-react";
import { motion, useScroll, useTransform, useInView, useSpring, useMotionValue } from "framer-motion";
import { useRef, useEffect, useState } from "react";
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section ref={ref} className="relative pt-20 pb-24 md:pt-32 md:pb-40 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute inset-0 bg-background overflow-hidden">
          {/* Green grid (Soft & Premium) */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#006f4f0d_1px,transparent_1px),linear-gradient(to_bottom,#006f4f0d_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)]" />
          
          {/* Central Glow (Soft) */}
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_-10%,rgba(0,111,79,0.12),transparent_70%)]" />
        </div>
        
        {/* Optimized background effects */}
        <motion.div 
          animate={{ opacity: [0.1, 0.2, 0.1] }} 
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          style={{ willChange: "opacity" }}
          className="absolute top-0 right-0 w-1/2 h-full bg-primary/20 blur-[120px] transform translate-x-1/3" 
        />
        <motion.div 
          animate={{ opacity: [0.1, 0.2, 0.1] }} 
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          style={{ willChange: "opacity" }}
          className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[140px] -translate-x-1/2 translate-y-1/2" 
        />
      </div>

      <div className="container mx-auto px-6 md:px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >
            <motion.div 
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold mb-6"
            >
              Asesoría Certificada CNSF & MDRT
            </motion.div>
            
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
                className="group relative rounded-full px-12 h-16 text-lg font-bold shadow-2xl shadow-primary/20 hover:shadow-primary/40 transition-all hover:-translate-y-1 bg-primary text-white overflow-hidden w-full sm:w-auto" 
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
              className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-8 pt-10 border-t border-border/50 max-w-lg mx-auto lg:mx-0"
            >
              <div className="text-center lg:text-left">
                <p className="text-3xl font-bold text-foreground tabular-nums">
                  <Counter value={100} suffix="%" />
                </p>
                <p className="text-xs text-muted-foreground font-bold tracking-wider mt-1">Personalizado</p>
              </div>
              <div className="text-center lg:text-left border-x border-border/30 px-4">
                <p className="text-3xl font-bold text-foreground tabular-nums">
                  <Counter value={500} prefix="+" />
                </p>
                <p className="text-xs text-muted-foreground font-bold tracking-wider mt-1">Familias</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-3xl font-bold text-primary">MDRT</p>
                <p className="text-xs text-muted-foreground font-bold tracking-wider mt-1">Global Standard</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 100, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative group">
              <motion.div 
                animate={{ 
                  y: [0, -15, 0],
                }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white dark:border-card max-w-[500px]"
              >
                <Image 
                  src={premiumHero} 
                  alt="Asesoría financiera premium - En Forma Seguros" 
                  className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105" 
                  priority
                />
              </motion.div>
              
              {/* Floating badges */}
              <motion.div 
                style={{ y: stickerY1 }}
                whileHover={{ scale: 1.1 }}
                className="absolute -bottom-6 -left-6 z-20 bg-white dark:bg-card p-4 rounded-2xl shadow-xl border border-border/50 hidden sm:block"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <TrendingUp className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-foreground">Crecimiento</p>
                    <p className="text-xs text-muted-foreground">Patrimonial Seguro</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                style={{ y: stickerY2 }}
                whileHover={{ scale: 1.1 }}
                className="absolute top-1/4 -right-8 z-20 bg-white dark:bg-card p-4 rounded-2xl shadow-xl border border-border/50 hidden sm:block"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-secondary/20 rounded-lg">
                    <HeartHandshake className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-foreground">Confianza</p>
                    <p className="text-xs text-muted-foreground">Acompañamiento Real</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-6 w-6 text-primary/40" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
