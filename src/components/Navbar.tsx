"use client";

import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/use-theme";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import logoAzul from "@/assets/logo-azul.png";
import logoVerde from "@/assets/logo-verde.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [mounted, setMounted] = useState(false);
  const { theme, toggle } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const sectionIds = ["agenda", "clientes", "servicios", "contenido", "sobremi", "contacto"];
    
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(`#${entry.target.id}`);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      if (window.scrollY < 100) setActiveSection("");
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const links = [
    { label: "Agenda", href: "#agenda" },
    { label: "Clientes", href: "#clientes" },
    { label: "Servicios", href: "#servicios" },
    { label: "Contenido", href: "#contenido" },
    { label: "Sobre Mí", href: "#sobremi" },
    { label: "Contacto", href: "#contacto" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed md:sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-background/80 backdrop-blur-md border-b shadow-premium py-2" 
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-6 md:px-4 flex items-center justify-between">
        <motion.a 
          href="#" 
          aria-label="Inicio - En Forma Seguros"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Image 
            src={mounted && theme === "dark" ? logoVerde : logoAzul} 
            alt="Logotipo Oficial de En Forma Seguros - Consultoría Patrimonial" 
            className="h-10 md:h-12 w-auto object-contain" 
            width={180}
            height={48}
            quality={75}
          />
        </motion.a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a 
              key={link.label} 
              href={link.href} 
              className={`relative text-sm font-bold tracking-tight transition-colors px-1 py-2 ${
                activeSection === link.href 
                  ? "text-primary"
                  : "text-foreground/70 hover:text-primary"
              }`}
            >
              {link.label}
              {activeSection === link.href && (
                <motion.div
                  layoutId="nav-underline"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <motion.button
            whileHover={{ scale: 1.1, rotate: 15 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggle}
            className="w-10 h-10 rounded-full bg-secondary/50 border border-border/50 flex items-center justify-center hover:bg-secondary transition-colors"
            aria-label={theme === "dark" ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
          >
            {mounted && theme === "dark" ? <Sun className="h-4 w-4 text-yellow-500" /> : <Moon className="h-4 w-4 text-primary" />}
          </motion.button>
          <Button className="rounded-full px-8 h-11 font-bold shadow-premium hover:shadow-premium-lg hover:-translate-y-1 transition-all duration-300" asChild>
            <a href="#agenda">Agendar Asesoría</a>
          </Button>
        </div>

        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={toggle}
            className="w-9 h-9 rounded-full border border-border flex items-center justify-center"
            aria-label={theme === "dark" ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
          >
            {mounted && theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            aria-label="Menú"
            className="p-1"
          >
            {isOpen ? <X className="h-7 w-7 text-primary" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t bg-background/95 backdrop-blur-lg px-6 pb-8 pt-4 overflow-hidden"
          >
            <div className="flex flex-col gap-4">
              {links.map((link) => (
                <motion.a 
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  key={link.label} 
                  href={link.href} 
                  onClick={() => setIsOpen(false)} 
                  className={`text-lg font-bold transition-colors ${
                    activeSection === link.href ? "text-primary" : "text-foreground/80 hover:text-primary"
                  }`}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <Button className="w-full rounded-full h-12 text-base font-bold mt-4" asChild>
                  <a href="#agenda">Agendar Asesoría</a>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
