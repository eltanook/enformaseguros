import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Mission = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground italic leading-tight">
              Tu Salud En Forma,<br />Tu Futuro Asegurado.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              En En Forma Seguros, nuestra misión es ayudarte a construir un bienestar integral que abarque tanto tu salud como tus finanzas. Al igual que en una rutina de ejercicio, creemos que la constancia y la planificación son esenciales para alcanzar tus metas de vida. Nos especializamos en crear estrategias personalizadas de seguros y ahorro, para que tengas la tranquilidad y respaldo que necesitas siempre.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button className="rounded-full px-8 py-6 text-base" asChild>
                <a href="#agenda">Agendar Llamada</a>
              </Button>
              <a href="#servicios" className="inline-flex items-center gap-2 text-foreground font-medium hover:text-primary transition-colors">
                Más Información <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Right visual */}
          <div className="flex justify-center relative">
            {/* Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:-top-8 md:right-16 z-10 w-28 h-28 rounded-full bg-primary flex flex-col items-center justify-center text-primary-foreground text-center">
              <span className="text-[10px] font-bold uppercase tracking-wider">Tu Salud En Forma</span>
              <span className="text-xl mt-1">✌️</span>
              <span className="text-[10px] font-bold uppercase tracking-wider">Tu Futuro Asegurado</span>
            </div>
            {/* Logo card */}
            <div className="w-64 h-72 md:w-80 md:h-96 rounded-2xl border-4 border-secondary bg-muted flex items-center justify-center">
              <div className="text-center">
                <span className="text-6xl">⚡</span>
                <p className="mt-2 text-foreground font-extrabold text-lg">EN FORMA</p>
                <p className="text-primary text-xs tracking-[0.3em] font-semibold">SEGUROS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
