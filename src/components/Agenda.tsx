import logoAzul from "@/assets/logo-azul.png";

const Agenda = () => {
  return (
    <section id="agenda" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
          Agenda Tu Asesoría
        </h2>
        <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
          Reserva una sesión con En Forma Seguros y comienza tu camino hacia la tranquilidad financiera. ¡Estamos aquí para ayudarte!
        </p>

        <div className="mt-12 max-w-3xl mx-auto bg-background rounded-2xl shadow-lg border overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-8 text-left border-r">
              <img src={logoAzul} alt="En Forma Seguros" className="h-10 mb-6" />

              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-sm font-bold text-foreground">O</div>
                <span className="text-muted-foreground text-sm">Ogui Magaña</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mt-2">Asesoría con Ogui</h3>
              <p className="text-muted-foreground text-sm mt-2 flex items-center gap-2">
                🕐 30 min
              </p>
              <p className="text-primary text-sm italic mt-4">
                El primer paso hacia tus finanzas en forma.
              </p>
              <p className="text-muted-foreground text-sm mt-4">
                ✨ Primera cita para conocernos y platicar sobre tu bienestar financiero. En esta charla relajada, descubriremos qué objetivo quieres
              </p>
            </div>

            <div className="p-8">
              <h3 className="font-bold text-foreground mb-4">Selecciona una fecha y hora</h3>
              <div className="bg-muted rounded-xl p-4 h-64 flex items-center justify-center">
                <p className="text-muted-foreground text-sm">Calendario próximamente</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Agenda;
