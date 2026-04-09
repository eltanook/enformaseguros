"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle, ArrowRight } from "lucide-react";

const faqs = [
  {
    num: "01",
    q: "¿Por qué el bienestar financiero es importante para una vida balanceada?",
    a: "El bienestar financiero te da la tranquilidad y libertad de enfocarte en lo que realmente importa, como tu salud, tus pasiones y tus seres queridos. Cuando tus finanzas están en orden, puedes alcanzar una vida más plena y equilibrada, similar a los beneficios de una vida activa y saludable.",
  },
  {
    num: "02",
    q: "¿Qué diferencia a En Forma Seguros de otros servicios de seguros?",
    a: "En En Forma Seguros, no solo te ofrecemos protección financiera, sino que integramos un enfoque de bienestar integral. Creemos en un equilibrio entre salud física, mental y económica. Te acompañamos en el proceso de construir una base financiera sólida, igual que en una rutina de salud o ejercicio. Además, ofrecemos a nuestros clientes eventos de bienestar y talleres o charlas enfocadas en el bienestar, para apoyarlos en alcanzar un estilo de vida equilibrado y saludable.",
  },
  {
    num: "03",
    q: "¿Cómo puedo comenzar a planear mi futuro financiero?",
    a: "Empezar es fácil y accesible. Puedes agendar una asesoría gratuita en la que evaluaremos tus necesidades y objetivos personales. A partir de ahí, trabajaremos juntos en un plan personalizado, tal como en un programa de entrenamiento, adaptado a tus metas y ritmo.",
  },
  {
    num: "04",
    q: "¿Qué beneficios tiene invertir en seguros desde ahora?",
    a: "Invertir en seguros desde temprano te permite proteger tu salud y tu patrimonio, igual que mantener una rutina de ejercicio para cuidar tu cuerpo. Asegurar tu futuro desde ahora te da paz mental y respaldo en caso de emergencias, permitiéndote vivir cada etapa con confianza y estabilidad.",
  },
];

const FAQ = () => {
  return (
    <section id="preguntas" className="pt-24 pb-0 bg-background overflow-hidden">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-xs font-bold mb-6 uppercase tracking-widest">
            <HelpCircle className="h-4 w-4" /> Centro de Ayuda
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Claridad en tu <span className="text-primary">estrategia.</span>
          </h2>
          <p className="mt-6 text-muted-foreground text-lg font-medium">
            Respuestas directas a las inquietudes más comunes de nuestros clientes premium.
          </p>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, scale: 0.98 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           className="bg-card rounded-[2rem] border border-border/50 shadow-sm overflow-hidden p-2 md:p-8"
        >
          <Accordion type="single" collapsible defaultValue="item-0" className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-b border-border/30 last:border-0 px-4 md:px-6">
                <AccordionTrigger className="py-8 hover:no-underline group text-left">
                  <div className="flex items-start gap-6">
                    <span className="text-primary font-bold text-lg opacity-40 group-data-[state=open]:opacity-100 transition-opacity">
                      {faq.num}
                    </span>
                    <span className="text-foreground font-bold text-lg md:text-xl tracking-tight leading-tight group-hover:text-primary transition-colors">
                      {faq.q}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-8 pl-14 md:pl-16 font-medium max-w-2xl">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

      </div>

      <div className="mt-24 w-full bg-muted/50 dark:bg-muted/10 py-20 border-t border-border/50">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-2xl md:text-4xl font-bold mb-2 tracking-tight text-foreground">¿Tienes una duda específica?</h3>
            <p className="text-muted-foreground text-lg font-medium">Nuestro equipo de expertos está listo para brindarte una solución a tu medida.</p>
          </div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a 
              href="#agenda" 
              className="group inline-flex items-center justify-center bg-primary text-white font-extrabold px-10 py-5 rounded-full text-lg shadow-xl shadow-primary/20 hover:bg-primary/90 transition-all tracking-tight"
            >
              Hablemos personalmente
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
