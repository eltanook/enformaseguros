"use client";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { ArrowUpRight, Award, CheckCircle2, Bookmark } from "lucide-react";
import { motion } from "framer-motion";
import oguiSpeaker from "@/assets/ogui-speaker.png";

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
            className="lg:col-span-6 lg:col-start-1 relative"
          >
            <div className="absolute -inset-4 bg-primary/10 rounded-[3rem] blur-2xl -z-10 rotate-3" />
            <div className="relative rounded-[2.5rem] overflow-hidden border-8 border-white dark:border-background shadow-2xl skew-y-1 h-[400px] md:h-[500px]">
              <Image 
                src={oguiSpeaker} 
                alt="Ogui Magaña - Consultora Patrimonial" 
                className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700 hover:scale-105" 
              />
            </div>
              
              {/* Certification Badges */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded-3xl shadow-xl flex items-center gap-4"
              >
                <Award className="h-8 w-8" />
                <div>
                  <p className="text-xl font-bold leading-tight uppercase tracking-tighter">MDRT</p>
                  <p className="text-[10px] opacity-80 uppercase font-bold tracking-widest leading-none mt-1">Court of the Table</p>
                </div>
              </motion.div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-6"
            >
              <span className="text-primary font-bold tracking-widest uppercase text-sm">Sobre Mí</span>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-8 leading-tight">
                Liderazgo, Integridad <br />y <span className="text-primary">Expertiz Financiera.</span>
              </h2>
              
              <div className="space-y-6 text-muted-foreground text-lg leading-relaxed font-medium">
                <p>
                  Como Consultora Patrimonial certificada ante la <span className="text-foreground font-bold">CNSF</span> y miembro distinguido de la <span className="text-foreground font-bold">MDRT</span>, mi propósito es transformar la complejidad financiera en estrategias accionables de crecimiento y protección.
                </p>
                <p>
                  Con una sólida trayectoria en conferencias sobre bienestar financiero, empodero a individuos y empresas a través de la planificación estratégica, asegurando que cada decisión hoy, construya la libertad de mañana.
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

              <Button className="rounded-full px-10 h-14 text-lg font-bold shadow-xl shadow-primary/20 hover:shadow-primary/30 transition-all" asChild>
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
