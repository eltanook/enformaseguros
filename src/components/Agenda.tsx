"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import agendaBg from "@/assets/agenda-bg.png";
import { useTheme } from "@/hooks/use-theme";

const Agenda = () => {
  const { theme } = useTheme();
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);
  
  // Custom colors for Calendly theme matching
  // Background: #0a0e1a (dark) vs white (light)
  // Text: #ffffff (dark) vs #000000 (light)
  // Primary: #006f4f (green)
  const calendlyBaseUrl = "https://calendly.com/ogui-magana/agenda";
  const calendlyParams = theme === "dark" 
    ? "?hide_landing_page_details=1&hide_gdpr_banner=1&primary_color=006f4f&background_color=0a0e1e&text_color=ffffff"
    : "?hide_landing_page_details=1&hide_gdpr_banner=1&primary_color=006f4f&background_color=ffffff";
  
  const calendlyUrl = `${calendlyBaseUrl}${calendlyParams}`;

  return (
    <section id="agenda" className="relative py-32 overflow-hidden bg-background">
      {/* Background Image with Fixed Attachment */}
      <div className="absolute inset-0 z-0 opacity-20 dark:opacity-10 overflow-hidden">
        <Image 
          src={agendaBg} 
          alt="Abstract background"
          fill
          className="object-cover fixed"
          quality={75}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-background/30" />
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-[0.2em] mb-6">Próximo Paso</span>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mt-4 mb-6 tracking-tighter">
            Comienza a <span className="text-primary">Planificar tu Futuro.</span>
          </h2>
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed font-medium">
            Reserva una sesión estratégica gratuita de 30 minutos para diagnosticar tu situación financiera actual y trazar una hoja de ruta personalizada.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-6xl mx-auto"
        >
          <div 
            ref={containerRef}
            className="w-full h-[750px] relative rounded-3xl overflow-hidden border border-border/50 bg-background/40 backdrop-blur-sm flex items-center justify-center"
          >
            {!isVisible && (
              <div className="flex flex-col items-center gap-4 text-muted-foreground">
                <div className="w-12 h-12 rounded-full border-2 border-primary/20 border-t-primary animate-spin" />
                <p className="text-sm font-medium">Cargando Agenda...</p>
              </div>
            )}
            {isVisible && (
              <iframe
                src={calendlyUrl}
                width="100%"
                height="100%"
                frameBorder="0"
                title="Agendar Asesoría con Ogui Magaña"
                className="opacity-100 transition-opacity duration-300 relative z-10"
              />
            )}
          </div>
        </motion.div>
      </div>

      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  );
};

export default Agenda;
