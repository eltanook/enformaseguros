"use client";

import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ShieldCheck, Users, Calendar, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";
import Image from "next/image";
import trustBg from "@/assets/trust-bg.png";

const Counter = ({ value }: { value: string }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const numericValue = parseInt(value.replace("+", ""));
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 40,
    stiffness: 25,
    restDelta: 0.001
  });
  const displayValue = useTransform(springValue, (latest) => Math.floor(latest));

  useEffect(() => {
    if (inView) {
      motionValue.set(numericValue);
    }
  }, [inView, motionValue, numericValue]);

  return (
    <span ref={ref}>
      <motion.span>{displayValue}</motion.span>
      {value.includes("+") && "+"}
    </span>
  );
};

const stats = [
  {
    icon: Users,
    value: "200+",
    label: "Clientes Protegidos",
    desc: "Familias y empresas que confían su legado en nuestra gestión.",
  },
  {
    icon: Calendar,
    value: "20+",
    label: "Años de Experiencia",
    desc: "Trayectoria sólida en el sector asegurador y financiero.",
    hasBg: true,
  },
  {
    icon: ShieldCheck,
    value: "120+",
    label: "Años de Respaldo",
    desc: "Alianza estratégica con GNP, líder en solidez en México.",
  },
];

const Trust = () => {
  return (
    <section id="trust" className="py-24 bg-muted/30 dark:bg-muted/10">
      <div className="container mx-auto px-6 md:px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <span className="text-primary font-bold tracking-widest uppercase text-sm">Nuestro Compromiso</span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-4 mb-8 leading-tight">
              Una estructura de confianza <span className="text-primary">diseñada para durar.</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed font-medium mb-8">
              En En Forma Seguros, entendemos que la previsión es la base de la libertad. No solo ofrecemos pólizas; construimos relaciones basadas en la integridad, la transparencia y resultados tangibles.
            </p>
            
            <div className="space-y-4 mb-10">
              <div className="flex items-center gap-4 p-4 bg-card rounded-2xl border border-border/50 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Award className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-bold text-foreground">Certificación Internacional</p>
                  <p className="text-xs text-muted-foreground font-medium">Avalados por la CNSF y miembros de la MDRT.</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="rounded-full px-8 h-14 text-base font-bold shadow-xl shadow-primary/20" asChild>
                <a href="#agenda">Agendar Consulta Directa</a>
              </Button>
              <Button variant="outline" className="rounded-full px-8 h-14 text-base font-bold border-2" asChild>
                <a href="#servicios">Explorar Servicios</a>
              </Button>
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`group relative p-8 rounded-[2.5rem] overflow-hidden ${
                  index === 0 ? "bg-primary text-white sm:col-span-2" : "bg-card border border-border/50"
                } shadow-xl flex flex-col justify-between min-h-[220px]`}
              >
                {stat.hasBg && (
                  <>
                    <Image 
                      src={trustBg} 
                      alt="Background" 
                      fill 
                      className="object-cover opacity-10 transition-opacity"
                    />
                    <div className="absolute inset-0 bg-primary/5 transition-colors" />
                  </>
                )}

                <div className="relative z-10">
                  <stat.icon className={`h-10 w-10 mb-6 ${index === 0 ? "text-white/80" : "text-primary"}`} />
                  <div>
                    <p className={`text-4xl md:text-5xl font-bold mb-2 tracking-tighter ${index === 0 ? "text-white" : "text-foreground"}`}>
                      <Counter value={stat.value} />
                    </p>
                    <p className={`text-lg font-bold mb-4 uppercase tracking-widest ${index === 0 ? "text-white/90" : "text-primary"}`}>
                      {stat.label}
                    </p>
                    <p className={`text-sm leading-relaxed font-medium ${index === 0 ? "text-white/70" : "text-muted-foreground"}`}>
                      {stat.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trust;
