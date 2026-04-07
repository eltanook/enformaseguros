import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import savingMoneyBadge from "@/assets/saving-money-badge.png";
import libertadFinanciera from "@/assets/libertad-financiera.png";

const Hero = () => {
  return (
    <section className="py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
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

          <div className="relative flex justify-center">
            <img src={savingMoneyBadge} alt="Saving Money is Cool" className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-contain" />
            <div className="absolute -top-2 right-0 md:-right-4 bg-secondary/80 rounded-xl p-2 shadow-lg rotate-6 max-w-[160px]">
              <img src={libertadFinanciera} alt="Libertad Financiera Baby!" className="w-full" />
            </div>
          </div>
        </div>

        <div className="mt-20 text-center">
          <p className="text-muted-foreground text-sm mb-8 italic">Confían en Nosotros:</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60">
            <span className="text-xl font-bold text-muted-foreground">TheCofy</span>
            <span className="text-lg font-semibold text-muted-foreground">GRISELL <span className="text-2xl">GS</span> SORDO</span>
            <span className="text-xl font-bold text-muted-foreground italic" style={{ color: "hsl(var(--destructive))" }}>Luar</span>
            <span className="text-xl font-bold text-muted-foreground">corehaus.</span>
            <span className="text-sm font-semibold text-muted-foreground">TU NUTRIOLOGA<br />PERSONAL</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
