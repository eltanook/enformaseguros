"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowRight } from "lucide-react";

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
    <section id="preguntas" className="pt-0 pb-0 bg-background overflow-hidden border-t border-border/10">
      {/* 
        FAQ Content Hidden Temporarily 
        <div className="container mx-auto px-4 max-w-4xl">
          ...
        </div> 
      */}

      <div className="w-full bg-muted/50 dark:bg-muted/10 py-20">
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
              className="group inline-flex items-center justify-center bg-primary text-white font-extrabold px-10 py-5 rounded-full text-lg shadow-premium hover:bg-primary/90 hover:-translate-y-1 transition-all duration-300 tracking-tight"
            >
              Hablemos personalmente
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Double branded border at the very bottom */}
      <div className="w-full h-1.5 bg-[#69bf8d]" />
      <div className="w-full h-1.5 bg-primary" />
    </section>
  );
};

export default FAQ;
