import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-dark-bg text-muted-foreground pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Logo + tagline */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">⚡</span>
              </div>
              <div className="leading-tight">
                <span className="text-primary-foreground font-extrabold text-xl">EN FORMA</span>
                <br />
                <span className="text-primary text-xs font-semibold tracking-[0.3em]">SEGUROS</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground/80">
              Porque el bienestar integral incluye tus finanzas, estamos aquí para ayudarte a construir una vida en equilibrio.
            </p>
          </div>

          {/* Menú */}
          <div>
            <h4 className="text-primary font-semibold mb-4">Menú</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Inicio</a></li>
              <li><a href="#servicios" className="hover:text-primary-foreground transition-colors">Clientes</a></li>
              <li><a href="#preguntas" className="hover:text-primary-foreground transition-colors">Contacto</a></li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="text-primary font-semibold mb-4">Info</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#servicios" className="hover:text-primary-foreground transition-colors">Servicios</a></li>
              <li><a href="#nosotros" className="hover:text-primary-foreground transition-colors">Nosotros</a></li>
              <li><a href="#preguntas" className="hover:text-primary-foreground transition-colors">Preguntas</a></li>
            </ul>
          </div>

          {/* Contacto */}
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

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-muted-foreground/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-sm">
            <MapPin className="h-4 w-4 text-primary" />
            <span>San Pedro Garza García. Nuevo León, México</span>
          </div>
          <div className="flex items-center gap-4">
            {/* Social icons as text placeholders */}
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
