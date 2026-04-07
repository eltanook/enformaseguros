import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import daniRomero from "@/assets/dani-romero.png";
import karlaWasabichi from "@/assets/karla-wasabichi.png";
import omarVillarreal from "@/assets/omar-villarreal.png";
import cristinaTirado from "@/assets/cristina-tirado.png";
import fernandaCorral from "@/assets/fernanda-corral.png";

const testimonials = [
  {
    name: "Dani Romero",
    role: "CHEF",
    text: "\"La asesoría de Ogui me brinda una sensación de seguridad y confianza, ya que siempre está dispuesto a clarificar mis dudas y proporcionar soluciones personalizadas.\"",
    img: daniRomero,
  },
  {
    name: "Karla Wasabichi",
    role: "OSTEÓPATA",
    text: "\"Ogui fue amable y paciente desde el inicio, brindándome opciones claras y útiles. Contraté mi seguro 10 días antes de un incidente y gracias a ello todo fue rápido y sencillo.\"",
    img: karlaWasabichi,
  },
  {
    name: "Omar Villarreal",
    role: "VETERINARIO",
    text: "\"Ogui, recomendada por mi hija, me dio confianza desde el inicio. Le confié mis seguros y siempre tiene la mejor disposición para ayudar. Muy contento con su atención.\"",
    img: omarVillarreal,
  },
  {
    name: "Cristina Tirado",
    role: "INGENIERA",
    text: "\"Con En Forma encontré el apoyo y guía que necesitaba; tengo la tranquilidad de saber que mi dinero está bien invertido, así como la tranquilidad de tener el futuro de mi hija asegurada y en buenas manos\"",
    img: cristinaTirado,
  },
  {
    name: "Fernando Corral",
    role: "MARKETING DEPORTIVO",
    text: "\"La asesoría gratuita con Ogui me aclaro mis inversiones y nuevas opciones para asegurar mi presente y futuro. Es cercana, atenta y brinda un excelente servicio. ¡Recomendada!\"",
    img: fernandaCorral,
  },
  {
    name: "Katia y Javier",
    role: "ABOGADA E INGENIERO",
    text: "\"Con En Forma Seguros entendimos lo desprotegidos que estábamos. Ahora nos sentimos preparados para imprevistos y aprendimos a mantener unas finanzas saludables a futuro.\"",
    img: null,
  },
];

const Testimonials = () => {
  const ref = useScrollAnimation();

  return (
    <section id="clientes" className="py-20 bg-muted/30">
      <div ref={ref} className="container mx-auto px-4 text-center animate-on-scroll">
        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
          Testimonios De Clientes
        </h2>
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
          Con En Forma Seguros, nuestros clientes han encontrado la tranquilidad y confianza que necesitan para proteger su bienestar financiero y vivir plenamente cada día.
        </p>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <article key={t.name} className="text-left bg-card rounded-2xl p-6 shadow-sm border border-border/50 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                {t.img ? (
                  <img src={t.img} alt={t.name} className="w-12 h-12 rounded-full object-cover" loading="lazy" />
                ) : (
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-foreground font-bold text-sm">
                    {t.name.charAt(0)}
                  </div>
                )}
                <div>
                  <p className="font-bold text-foreground text-sm">{t.name}</p>
                  <p className="text-primary text-xs font-medium">{t.role}</p>
                </div>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed italic">{t.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
