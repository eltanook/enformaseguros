import { CheckCircle2 } from "lucide-react";
import oguiCoach from "@/assets/ogui-coach.png";
import logoVertical from "@/assets/logo-vertical.png";

const bullets = [
  "Representamos a más de 200 clientes en México.",
  "Nuestro equipo cuenta con 20+ años de experiencia.",
  "Respaldo de GNP con +120 años de solidez financiera.",
];

const About = () => {
  return (
    <section id="nosotros" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative flex justify-center">
            <div className="w-72 h-80 md:w-80 md:h-[420px] rounded-2xl border-4 border-primary bg-muted overflow-hidden relative">
              <img src={oguiCoach} alt="Ogui Magaña" className="w-full h-full object-cover object-top" />
            </div>
            <div className="absolute -top-4 -right-2 md:right-8 w-20 h-20">
              <img src={logoVertical} alt="En Forma Seguros" className="w-full h-full object-contain" />
            </div>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground italic">
              Hola, Soy Tu Coach
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Soy Ogui Magaña, tu coach apasionada por el bienestar y especialista en seguros-ahorro-retiro. Avalada por la CNSF y reconocida por un alto desempeño y ética por la MDRT.
            </p>
            <div className="mt-8 space-y-4">
              {bullets.map((b) => (
                <div key={b} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-foreground font-medium">{b}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
