import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    num: "01",
    q: "¿Por qué el bienestar financiero es importante para una vida balanceada?",
    a: "El bienestar financiero te da la tranquilidad y libertad de enfocarte en lo que realmente importa, como tu salud, tus pasiones y tus seres queridos. Cuando tus finanzas están en orden, puedes alcanzar una vida más plena y equilibrada, similar a los beneficios de una vida activa y saludable.",
  },
  {
    num: "02",
    q: "¿Qué diferencia a En Forma Seguros de otros servicios de seguros?",
    a: "En En Forma Seguros combinamos una visión integral del bienestar con soluciones financieras personalizadas. No solo protegemos tu patrimonio, sino que te acompañamos como un coach para que tomes las mejores decisiones.",
  },
  {
    num: "03",
    q: "¿Cómo puedo comenzar a planear mi futuro financiero?",
    a: "El primer paso es agendar una llamada gratuita con nosotros. En esta sesión conoceremos tu situación actual y te presentaremos opciones personalizadas para proteger tu futuro.",
  },
  {
    num: "04",
    q: "¿Qué beneficios tiene invertir en seguros desde ahora?",
    a: "Invertir en seguros desde ahora te brinda protección inmediata y te permite construir un patrimonio a largo plazo con mejores condiciones y primas más accesibles.",
  },
];

const FAQ = () => {
  const ref = useScrollAnimation();

  return (
    <section id="preguntas" className="py-20">
      <div ref={ref} className="container mx-auto px-4 max-w-3xl text-center animate-on-scroll">
        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
          Preguntas Frecuentes
        </h2>
        <p className="mt-4 text-muted-foreground">
          Aquí te dejo las más comunes de clientes anteriores, aunque si no encuentras la tuya, estaré encantada de responderte personalmente en una llamada de consulta gratuita.
        </p>

        <Accordion type="single" defaultValue="item-0" collapsible className="mt-12 text-left">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-b">
              <AccordionTrigger className="py-6 hover:no-underline">
                <div className="flex items-center gap-4">
                  <span className="text-primary font-bold text-sm">{faq.num}</span>
                  <span className="text-foreground font-semibold text-left">{faq.q}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-6 pl-10">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
