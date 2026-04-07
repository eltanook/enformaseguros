import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import oguiSpeaker from "@/assets/ogui-speaker.png";

const Speaker = () => {
  const ref = useScrollAnimation();

  return (
    <section className="bg-secondary py-20 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1 bg-primary" />
      <div ref={ref} className="container mx-auto px-4 animate-on-scroll">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
              Inspirando Bienestar
            </h2>
            <p className="mt-6 text-secondary-foreground/80 leading-relaxed">
              Con una sólida trayectoria como conferencista y asesora financiera, he impactado a audiencias en mi alma mater y diversas empresas, abordando temas como emprendimiento, especialización personal y transición al trabajo independiente. Mis charlas buscan inspirar y empoderar, brindando herramientas prácticas para el éxito financiero. Me enfoco en finanzas inteligentes, finanzas para la mujer, planificación del retiro y estrategias para una vida financiera sólida, motivando a las personas a tomar el control de su vida y sus finanzas.
            </p>
            <Button className="rounded-full px-8 py-6 text-base mt-8 w-full sm:w-auto" asChild>
              <a href="#agenda">
                Agendar Llamada <ArrowUpRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>

          <div className="flex justify-center">
            <img src={oguiSpeaker} alt="Ogui Magaña - Conferencista de bienestar financiero" className="w-52 h-60 sm:w-64 sm:h-72 md:w-72 md:h-80 object-contain" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Speaker;
