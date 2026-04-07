import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import logoVerde from "@/assets/logo-verde.png";

const Footer = () => {
  return (
    <footer className="bg-dark-bg text-muted-foreground pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-10">
          <div>
            <img src={logoVerde} alt="En Forma Seguros" className="h-10 mb-4" />
            <p className="text-sm leading-relaxed text-muted-foreground/80">
              Porque el bienestar integral incluye tus finanzas, estamos aquí para ayudarte a construir una vida en equilibrio.
            </p>
          </div>

          <div>
            <h4 className="text-primary font-semibold mb-4">Menú</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Inicio</a></li>
              <li><a href="#clientes" className="hover:text-primary-foreground transition-colors">Clientes</a></li>
              <li><a href="#agenda" className="hover:text-primary-foreground transition-colors">Contacto</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-primary font-semibold mb-4">Info</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#servicios" className="hover:text-primary-foreground transition-colors">Servicios</a></li>
              <li><a href="#nosotros" className="hover:text-primary-foreground transition-colors">Nosotros</a></li>
              <li><a href="#preguntas" className="hover:text-primary-foreground transition-colors">Preguntas</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-primary font-semibold mb-4 italic">Comencemos a Trabajar</h4>
            <ul className="space-y-2 text-sm">
              <li><span className="text-primary font-medium">Wpp:</span> 811 9034948</li>
              <li><span className="text-primary font-medium">Mail:</span> Ogui.magana@gmail.com</li>
            </ul>
            <Button className="rounded-full px-6 mt-6" asChild>
              <a href="#agenda">Agendar Llamada Gratuita</a>
            </Button>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-muted-foreground/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-sm">
            <MapPin className="h-4 w-4 text-primary" />
            <span>San Pedro Garza García. Nuevo León, México</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="w-8 h-8 rounded-full border border-muted-foreground/40 flex items-center justify-center hover:border-primary transition-colors text-xs">IG</a>
            <a href="#" className="w-8 h-8 rounded-full border border-muted-foreground/40 flex items-center justify-center hover:border-primary transition-colors text-xs">WA</a>
            <a href="#" className="w-8 h-8 rounded-full border border-muted-foreground/40 flex items-center justify-center hover:border-primary transition-colors text-xs">FB</a>
            <a href="#" className="w-8 h-8 rounded-full border border-muted-foreground/40 flex items-center justify-center hover:border-primary transition-colors text-xs">IN</a>
          </div>
        </div>
        <p className="text-center text-xs text-muted-foreground/60 mt-6">
          Copyright © 2024 En Forma Seguros. Todos los derechos Reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
