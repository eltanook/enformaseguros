import { ShieldCheck, HeartPulse, PiggyBank } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const services = [
  {
    icon: ShieldCheck,
    title: "Asesoría Financiera",
    desc: "Recibe asesoría clara y práctica para manejar tus finanzas con confianza. Define tus objetivos, prioriza tus metas y asegura tu bienestar y el de quienes te rodean.",
  },
  {
    icon: HeartPulse,
    title: "Protección de Salud",
    desc: "Disfruta la tranquilidad de contar con el respaldo adecuado en momentos críticos. Nuestros seguros de gastos medicos mayores te ofrecen la paz mental que necesitas para concentrarte en lo que importa.",
  },
  {
    icon: PiggyBank,
    title: "Soluciones de Ahorro",
    desc: "Prepárate para un futuro estable y sin preocupaciones. Nuestros planes de ahorro te permiten construir un patrimonio que te dará libertad para disfrutar de tus próximos años.",
  },
];

const Services = () => {
  const ref = useScrollAnimation();

  return (
    <section id="servicios" className="py-20">
      <div ref={ref} className="container mx-auto px-4 text-center animate-on-scroll">
        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
          Beneficios de una Vida<br />Financiera Saludable
        </h2>
        <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
          Cuida de tu bienestar financiero con servicios que te ofrecen respaldo y tranquilidad. En En Forma Seguros, creemos que la salud integral incluye tanto el cuerpo como las finanzas, y estamos aquí para acompañarte en tu camino hacia una vida plena y equilibrada.
        </p>

        <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {services.map((s) => (
            <article
              key={s.title}
              className="bg-secondary rounded-2xl p-6 sm:p-8 text-left hover:shadow-lg transition-shadow"
            >
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <s.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
