"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import serviceWealth from "@/assets/service-wealth.png";
import serviceHealth from "@/assets/service-health.png";
import serviceRetirement from "@/assets/service-retirement.png";

const services = [
  {
    title: "Asesoría Patrimonial",
    desc: "Estrategias de blindaje financiero diseñadas para proteger tu legado y asegurar una transición patrimonial fluida y eficiente.",
    img: serviceWealth,
  },
  {
    title: "Blindaje de Salud",
    desc: "Planes de Gastos Médicos Mayores con cobertura nacional e internacional, garantizando acceso a la mejor medicina privada sin comprometer tu capital.",
    img: serviceHealth,
  },
  {
    title: "Ahorro y Retiro Estratégico",
    desc: "Optimización de excedentes y planeación fiscal para el retiro, permitiéndote mantener tu estilo de vida durante la etapa de jubilación.",
    img: serviceRetirement,
  },
];

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.23, 1, 0.32, 1] } },
  };

  return (
    <section id="servicios" className="py-24 bg-background">
      <div className="container mx-auto px-6 md:px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-bold tracking-widest uppercase text-sm">Nuestros Pilares</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-4">
            Soluciones financieras <span className="text-primary">de alto impacto.</span>
          </h2>
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed font-medium">
            No vendemos pólizas; diseñamos arquitecturas de protección que se adaptan a tu momento de vida, brindando seguridad tangible y paz mental absoluta.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {services.map((s) => (
            <motion.article
              key={s.title}
              variants={itemVariants}
              className="group relative bg-card rounded-[2.5rem] overflow-hidden border border-border/50 hover:border-primary/30 transition-all duration-500 shadow-sm hover:shadow-xl"
            >
              <div className="pt-6 px-6">
                <div className="relative h-48 w-full overflow-hidden rounded-t-3xl">
                  <Image 
                    src={s.img} 
                    alt={s.title} 
                    className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1F2C] via-[#1A1F2C]/40 to-transparent mix-blend-multiply opacity-60 group-hover:opacity-40 transition-opacity" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#006F4F]/40 to-transparent opacity-0 group-hover:opacity-60 transition-opacity" />
                </div>
              </div>

              <div className="p-10">
                <h3 className="text-2xl font-bold text-foreground mb-4 leading-tight group-hover:text-primary transition-colors duration-500">
                  {s.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-8 font-medium">
                  {s.desc}
                </p>
                
                <a 
                  href="#agenda" 
                  className="inline-flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-primary/5 text-primary text-sm font-bold group-hover:bg-primary group-hover:text-white transition-all duration-500"
                >
                  Saber más <ArrowUpRight className="h-4 w-4 group-hover:rotate-45 transition-transform duration-500" />
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
