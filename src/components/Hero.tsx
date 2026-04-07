import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import savingMoneyBadge from "@/assets/saving-money-badge.png";
import libertadFinanciera from "@/assets/libertad-financiera.png";

const Hero = () => {
  return (
    <section className="py-12 sm:py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-foreground">
              Bienestar Activo<br />de Hoy y Mañana
            </h1>
            <p className="mt-4 sm:mt-6 text-muted-foreground text-base sm:text-lg max-w-lg mx-auto md:mx-0">
              Cuidar de tus finanzas es tan importante como cuidar de tu cuerpo. Trabajamos contigo para fortalecer tu tranquilidad económica y proteger lo que más valoras, a través de asesoría personalizada en seguros, ahorro y retiro. Así, como en una vida activa, estarás preparado para cualquier desafío.
            </p>
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
              <Button className="rounded-full px-8 py-6 text-base w-full sm:w-auto" asChild>
                <a href="#agenda">Llamada Gratuita</a>
              </Button>
              <a href="#servicios" className="inline-flex items-center gap-2 text-foreground font-medium hover:text-primary transition-colors">
                Más Información <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="relative flex justify-center mt-8 md:mt-0">
            <img src={savingMoneyBadge} alt="Ahorro inteligente - En Forma Seguros" className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-contain" />
            <img
              src={libertadFinanciera}
              alt="Libertad Financiera Baby!"
              className="absolute -top-4 -right-2 sm:right-4 md:-right-4 w-28 sm:w-36 md:w-40 rotate-6 drop-shadow-lg"
            />
          </div>
        </div>

        <div className="mt-16 md:mt-20 text-center">
          <p className="text-muted-foreground text-sm mb-6 sm:mb-8 italic">Confían en Nosotros:</p>
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 md:gap-12 opacity-60">
            <span className="text-lg sm:text-xl font-bold text-muted-foreground">TheCofy</span>
            <span className="text-base sm:text-lg font-semibold text-muted-foreground">GRISELL <span className="text-xl sm:text-2xl">GS</span> SORDO</span>
            <span className="text-lg sm:text-xl font-bold text-muted-foreground italic text-destructive">Luar</span>
            <span className="text-lg sm:text-xl font-bold text-muted-foreground">corehaus.</span>
            <span className="text-xs sm:text-sm font-semibold text-muted-foreground">TU NUTRIOLOGA<br />PERSONAL</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
