"use client";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { MapPin, Instagram, Facebook, Linkedin, Mail, Phone, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa6";
import logoVerde from "@/assets/logo-verde.png";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#050A10] text-[#E2E8F0] pt-24 pb-12 overflow-visible relative h-full">

      
      {/* Decorative background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="container mx-auto px-6 md:px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-8 text-center md:text-left">
          <div className="md:col-span-1 lg:col-span-1">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mb-8 flex flex-col items-center md:items-start"
            >
              <Image src={logoVerde} alt="En Forma Seguros" className="h-12 w-auto object-contain mb-8" width={180} height={48} />
              <p className="text-muted-foreground font-medium leading-relaxed max-w-xs">
                Transformando la complejidad financiera en seguridad patrimonial. Consultoría experta con el respaldo de las mejores instituciones globales.
              </p>
            </motion.div>
            
            <div className="flex items-center justify-center md:justify-start gap-4">
              {[
                { icon: Instagram, href: "https://www.instagram.com/oguienforma/", label: "Instagram" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/ulises-castillo-sanchez-060a269b/", label: "LinkedIn" },
                { icon: Facebook, href: "https://www.facebook.com/enformaseguros?_rdr", label: "Facebook" }
              ].map((social) => (
                <motion.a 
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.1)" }}
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center transition-colors hover:text-primary"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-8 tracking-widest">Servicios</h4>
            <ul className="space-y-4">
              {["Salud", "Retiro", "Vida & Patrimonio", "Gastos Médicos"].map((item) => (
                <li key={item}>
                  <a href="#servicios" className="text-muted-foreground hover:text-primary transition-colors font-medium flex items-center justify-center md:justify-start group">
                    <span className="hidden md:block w-0 group-hover:w-4 transition-all duration-300 h-[2px] bg-primary mr-0 group-hover:mr-2" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-8 tracking-widest">Compañía</h4>
            <ul className="space-y-4">
              {["Sobre Mí", "Agenda de Citas", "Contenido", "Contacto"].map((item) => (
                <li key={item}>
                  <a href={`#${item === "Agenda de Citas" ? "agenda" : item === "Sobre Mí" ? "sobremi" : item === "Contenido" ? "contenido" : "contacto"}`} className="text-muted-foreground hover:text-primary transition-colors font-medium flex items-center justify-center md:justify-start group">
                    <span className="hidden md:block w-0 group-hover:w-4 transition-all duration-300 h-[2px] bg-primary mr-0 group-hover:mr-2" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-8 tracking-widest">Contacto</h4>
            <div className="space-y-4 mb-8 flex flex-col items-center md:items-start text-center md:text-left">
              <a href="mailto:Ogui.magana@gmail.com" className="flex items-center gap-3 text-muted-foreground hover:text-white transition-colors group">
                <Mail className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium">Ogui.magana@gmail.com</span>
              </a>
              <a href="https://wa.me/message/HG2NHDTSI3TJE1" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-white transition-colors group">
                <FaWhatsapp className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium">+52 811 903 4948 (WhatsApp)</span>
              </a>
              <div className="flex items-start gap-3 text-muted-foreground group mt-2 pt-4 border-t border-white/5">
                <MapPin className="h-5 w-5 text-primary shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium leading-relaxed max-w-[240px]">Av. Ricardo Margain Zozaya 555-Edificio B, Santa Engracia, 66279 San Pedro Garza García, N.L. México</span>
              </div>
            </div>
            <Button className="rounded-full px-8 h-12 w-full font-bold shadow-lg shadow-primary/20" asChild>
              <a href="#agenda">Planificar mi Futuro</a>
            </Button>
          </div>
        </div>

        <div className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3 text-muted-foreground/60 text-sm font-medium">
            <span>En Forma Seguros</span>
          </div>
          
          <p className="text-xs text-muted-foreground/40 font-bold tracking-widest">
            © 2026 En Forma Seguros. Todos los derechos reservados.
          </p>
          
          <motion.button 
            onClick={scrollToTop}
            whileHover={{ y: -5 }}
            className="hidden md:flex w-12 h-12 bg-white/5 rounded-full items-center justify-center border border-white/10 hover:bg-white/10 transition-all shadow-xl group"
            aria-label="Volver arriba"
          >
            <ArrowUp className="h-5 w-5 text-primary group-hover:animate-bounce" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
