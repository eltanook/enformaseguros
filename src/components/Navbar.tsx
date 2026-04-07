import { useState } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/use-theme";
import logoAzul from "@/assets/logo-azul.png";
import logoVerde from "@/assets/logo-verde.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggle } = useTheme();

  const links = [
    { label: "Servicios", href: "#servicios" },
    { label: "Nosotros", href: "#nosotros" },
    { label: "Clientes", href: "#clientes" },
    { label: "Preguntas", href: "#preguntas" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <a href="#" aria-label="Inicio - En Forma Seguros">
          <img src={theme === "dark" ? logoVerde : logoAzul} alt="En Forma Seguros" className="h-10 md:h-12" />
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a key={link.label} href={link.href} className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={toggle}
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
            aria-label={theme === "dark" ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <Button className="rounded-full px-6" asChild>
            <a href="#agenda">Agendar Llamada</a>
          </Button>
        </div>

        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggle}
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center"
            aria-label={theme === "dark" ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Menú">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden border-t px-4 pb-4 bg-background">
          {links.map((link) => (
            <a key={link.label} href={link.href} onClick={() => setIsOpen(false)} className="block py-3 text-muted-foreground hover:text-foreground transition-colors font-medium">
              {link.label}
            </a>
          ))}
          <Button className="w-full rounded-full mt-2" asChild>
            <a href="#agenda">Agendar Llamada</a>
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
