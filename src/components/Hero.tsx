import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-foreground">
              Bienestar Activo<br />de Hoy y Mañana
            </h1>
            <p className="mt-6 text-muted-foreground text-lg max-w-lg">
              Cuidar de tus finanzas es tan importante como cuidar de tu cuerpo. Trabajamos contigo para fortalecer tu tranquilidad económica y proteger lo que más valoras, a través de asesoría personalizada en seguros, ahorro y retiro. Así, como en una vida activa, estarás preparado para cualquier desafío.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button className="rounded-full px-8 py-6 text-base" asChild>
                <a href="#agenda">Llamada Gratuita</a>
              </Button>
              <a href="#servicios" className="inline-flex items-center gap-2 text-foreground font-medium hover:text-primary transition-colors">
                Más Información <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Right - decorative placeholder */}
          <div className="relative flex justify-center">
            <div className="w-72 h-72 md:w-96 md:h-96 rounded-[40%] bg-primary flex items-center justify-center relative">
              <span className="text-6xl md:text-8xl">✌️</span>
              {/* Sticker */}
              <div className="absolute -top-2 -right-2 bg-secondary/80 rounded-xl px-3 py-2 text-xs font-bold text-foreground shadow-lg rotate-6">
                LIBERTAD<br/>FINANCIERA<br/>BABY!
              </div>
              {/* Ring text decoration */}
              <div className="absolute bottom-4 left-4 text-primary-foreground/60 text-[10px] font-bold tracking-widest uppercase rotate-[-20deg]">
                SAVING MONEY IS COOL
              </div>
            </div>
          </div>
        </div>

        {/* Trust bar */}
        <div className="mt-20 text-center">
          <p className="text-muted-foreground text-sm mb-8 italic">Confían en Nosotros:</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60">
            <span className="text-xl font-bold text-muted-foreground">TheCofy</span>
            <span className="text-lg font-semibold text-muted-foreground">GRISELL <span className="text-2xl">GS</span> SORDO</span>
            <span className="text-xl font-bold text-muted-foreground italic" style={{ color: "hsl(var(--destructive))" }}>Luar</span>
            <span className="text-xl font-bold text-muted-foreground">corehaus.</span>
            <span className="text-sm font-semibold text-muted-foreground">TU NUTRIOLOGA<br/>PERSONAL</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
