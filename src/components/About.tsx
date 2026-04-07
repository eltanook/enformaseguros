import { CheckCircle2 } from "lucide-react";

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
          {/* Image placeholder */}
          <div className="relative flex justify-center">
            <div className="w-72 h-80 md:w-80 md:h-96 rounded-2xl border-4 border-primary bg-muted flex items-center justify-center relative">
              <span className="text-6xl">👩‍💼</span>
              {/* Logo overlay */}
              <div className="absolute -top-6 -right-6 w-16 h-16 rounded-full bg-foreground flex items-center justify-center">
                <span className="text-primary-foreground text-2xl">⚡</span>
              </div>
            </div>
          </div>

          {/* Text */}
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
