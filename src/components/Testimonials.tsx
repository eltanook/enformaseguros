const testimonials = [
  {
    name: "Dani Romero",
    role: "CHEF",
    text: "\"La asesoría de Ogui me brinda una sensación de seguridad y confianza, ya que siempre está dispuesto a clarificar mis dudas y proporcionar soluciones personalizadas.\"",
  },
  {
    name: "Karla Wasabichi",
    role: "OSTEÓPATA",
    text: "\"Ogui fue amable y paciente desde el inicio, brindándome opciones claras y útiles. Contraté mi seguro 10 días antes de un incidente y gracias a ello todo fue rápido y sencillo.\"",
  },
  {
    name: "Omar Villarreal",
    role: "VETERINARIO",
    text: "\"Ogui, recomendada por mi hija, me dio confianza desde el inicio. Le confié mis seguros y siempre tiene la mejor disposición para ayudar. Muy contento con su atención.\"",
  },
  {
    name: "Cristina Tirado",
    role: "INGENIERA",
    text: "\"Con En Forma encontré el apoyo y guía que necesitaba; tengo la tranquilidad de saber que mi dinero está bien invertido, así como la tranquilidad de tener el futuro de mi hija asegurada y en buenas manos\"",
  },
  {
    name: "Fernando Corral",
    role: "MARKETING DEPORTIVO",
    text: "\"La asesoría gratuita con Ogui me aclaro mis inversiones y nuevas opciones para asegurar mi presente y futuro. Es cercana, atenta y brinda un excelente servicio. ¡Recomendada!\"",
  },
  {
    name: "Katia y Javier",
    role: "ABOGADA E INGENIERO",
    text: "\"Con En Forma Seguros entendimos lo desprotegidos que estábamos. Ahora nos sentimos preparados para imprevistos y aprendimos a mantener unas finanzas saludables a futuro.\"",
  },
];

const Testimonials = () => {
  return (
    <section id="clientes" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
          Testimonios De Clientes
        </h2>
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
          Con En Forma Seguros, nuestros clientes han encontrado la tranquilidad y confianza que necesitan para proteger su bienestar financiero y vivir plenamente cada día.
        </p>

        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.name} className="text-left">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground font-bold text-sm">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-foreground text-sm">{t.name}</p>
                  <p className="text-primary text-xs font-medium">{t.role}</p>
                </div>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed italic">{t.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
