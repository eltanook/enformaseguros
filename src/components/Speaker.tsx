"use client";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const Speaker = () => {
  return (
    <section id="sobremi" className="py-24 bg-card relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-4 relative group"
          >
            <div className="absolute -inset-4 bg-primary/10 rounded-[3rem] blur-2xl -z-10 rotate-3 opacity-50" />
            
            <div className="relative rounded-[2.5rem] overflow-hidden border-8 border-[#262362]/20 dark:border-[#262362]/40 shadow-2xl skew-y-1 h-[400px] md:h-[550px]">
              {/* Green grid background (Confined within the card) */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#006f4f0d_1px,transparent_1px),linear-gradient(to_bottom,#006f4f0d_1px,transparent_1px)] bg-[size:30px_30px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_100%,transparent_100%)] opacity-60" />
              </div>
              <Image 
                src="/sobremi.jpg" 
                alt="Ogui Magaña - Experta en Consultoría Patrimonial y Bienestar Financiero" 
                width={500}
                height={700}
                className="w-full h-full object-cover transition-all duration-700 hover:scale-110 relative z-10" 
                priority
              />
            </div>
              
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-8"
          >
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-[0.2em] mb-6">Sobre Mí</span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-8 leading-tight">
              Liderazgo, Integridad <br />y <span className="text-primary">Expertiz Financiera.</span>
            </h2>
            
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed font-medium">
              <p>
                Como Consultora Patrimonial certificada ante la <span className="text-foreground font-bold">CNSF</span> y miembro distinguido de la <span className="text-foreground font-bold">MDRT</span>, mi propósito es transformar la complejidad financiera en estrategias accionables de crecimiento y protección.
              </p>
              <p>
                Con una sólida trayectoria en conferencias sobre bienestar financiero, empodero a individuos y empresas a través de la planificación estratégica, asegurando que cada decisión hoy, construye la libertad de mañana.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mt-10 mb-10">
              {[
                "Certificación CNSF Vigente",
                "Miembro Court of the Table",
                "Asesoría Internacional",
                "Planificación Fiscal"
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span className="text-foreground font-bold text-sm tracking-tight">{item}</span>
                </div>
              ))}
            </div>

            <Button className="rounded-full px-10 h-14 text-lg font-bold shadow-premium hover:shadow-premium-lg hover:-translate-y-1 transition-all duration-300" asChild>
              <a href="#agenda">
                Agendar Consulta Directa <ArrowUpRight className="ml-2 h-5 w-5 font-bold" />
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Speaker;
