import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import kettlebellGradient from "@/assets/kettlebell-gradient.png";
import flag from "@/assets/flag.png";

const Mission = () => {
  const ref = useScrollAnimation();

  return (
    <section className="py-20">
      <div ref={ref} className="container mx-auto px-4 animate-on-scroll">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground italic leading-tight">
              Tu Salud En Forma,<br />Tu Futuro Asegurado.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              En En Forma Seguros, nuestra misión es ayudarte a construir un bienestar integral que abarque tanto tu salud como tus finanzas. Al igual que en una rutina de ejercicio, creemos que la constancia y la planificación son esenciales para alcanzar tus metas de vida. Nos especializamos en crear estrategias personalizadas de seguros y ahorro, para que tengas la tranquilidad y respaldo que necesitas siempre.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
              <Button className="rounded-full px-8 py-6 text-base w-full sm:w-auto" asChild>
                <a href="#agenda">Agendar Llamada</a>
              </Button>
              <a href="#servicios" className="inline-flex items-center gap-2 text-foreground font-medium hover:text-primary transition-colors">
                Más Información <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="flex justify-center relative mt-8 md:mt-0">
            {/* Circular badge top-left of the card */}
            <img
              src={flag}
              alt="Tu Salud En Forma, Tu Futuro Asegurado"
              className="absolute -top-6 -left-2 sm:left-4 md:-left-4 z-10 w-24 sm:w-28 h-auto drop-shadow-lg"
              loading="lazy"
            />
            {/* Kettlebell in card */}
            <div className="w-56 h-64 sm:w-64 sm:h-72 md:w-80 md:h-96 rounded-2xl border-4 border-secondary bg-muted flex items-center justify-center p-6 sm:p-8">
              <img src={kettlebellGradient} alt="En Forma Seguros - Kettlebell" className="w-full h-full object-contain" loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
