"use client";
import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Send, Quote, Mail, MapPin, Linkedin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import agendaBg from "@/assets/agenda-bg.png";

const TypingText = ({ text, delay = 0.02 }: { text: string; delay?: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    if (isInView) {
      let currentIndex = 0;
      const interval = setInterval(() => {
        if (currentIndex <= text.length) {
          setDisplayedText(text.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(interval);
        }
      }, delay * 1000);
      return () => clearInterval(interval);
    }
  }, [isInView, text, delay]);

  return <span ref={ref}>{displayedText}</span>;
};

const ContactFeature = ({ icon: Icon, label, value, href }: { icon: any, label: string, value: string, href?: string }) => {
  const CardContent = (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ y: -5, borderColor: "#262362" }}
      className="bg-card p-6 rounded-2xl border border-border/60 shadow-premium group cursor-pointer transition-all h-full"
    >
      <div className="p-3 bg-primary/10 rounded-xl w-fit mb-4 group-hover:bg-[#262362] transition-colors">
        <Icon className="h-5 w-5 text-primary group-hover:text-white transition-colors" />
      </div>
      <p className="text-[10px] uppercase tracking-widest font-black text-muted-foreground mb-1">{label}</p>
      <p className="text-sm font-bold text-foreground leading-tight">{value}</p>
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="block h-full">
        {CardContent}
      </a>
    );
  }
  return CardContent;
};

const ContactMission = () => {
  const missionText = "En En Forma Seguros, nuestra misión es ayudarte a construir un bienestar integral que abarque tanto tu salud como tus finanzas. Al igual que en una rutina de ejercicio, creemos que la constancia y la planificación son esenciales para alcanzar tus metas de vida.";

  const [isMapVisible, setIsMapVisible] = useState(false);
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsMapVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "300px" }
    );

    if (mapRef.current) observer.observe(mapRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="contacto" className="py-24 bg-background relative overflow-hidden">
      {/* Background Image with Fixed Attachment */}
      <div className="absolute inset-0 z-0 opacity-20 dark:opacity-10 overflow-hidden">
        <Image 
          src={agendaBg} 
          alt="Abstract background"
          fill
          className="object-cover fixed"
          quality={75}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-background/60" />
      </div>
      
      <div className="container mx-auto px-6 md:px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Contact Form (Col 7) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tighter mb-4">
                Siéntete libre <span className="text-primary">de contactarnos.</span>
              </h2>
            </motion.div>

            <form 
              action="https://formsubmit.co/Ogui.magana@gmail.com" 
              method="POST"
              className="space-y-8"
            >
              <input type="hidden" name="_next" value="https://enformaseguros.com/gracias" />
              <input type="hidden" name="_subject" value="Nuevo contacto desde En Forma Seguros" />
              <input type="hidden" name="_captcha" value="false" />

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-xs font-black uppercase tracking-[0.2em] text-foreground/70 ml-1">Nombre Completo</label>
                  <Input 
                    name="name" 
                    placeholder="Ulises Castillo" 
                    required 
                    className="bg-background border-border border-2 focus:border-primary h-16 rounded-2xl text-lg transition-all focus:ring-4 focus:ring-primary/10"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-black uppercase tracking-[0.2em] text-foreground/70 ml-1">Correo Electrónico</label>
                  <Input 
                    type="email" 
                    name="email" 
                    placeholder="tu@email.com" 
                    required 
                    className="bg-background border-border border-2 focus:border-primary h-16 rounded-2xl text-lg transition-all focus:ring-4 focus:ring-primary/10"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-xs font-black uppercase tracking-[0.2em] text-foreground/70 ml-1">¿Qué tema te interesa?</label>
                <Input 
                  name="subject" 
                  placeholder="Ej: Ahorro para el retiro" 
                  required 
                  className="bg-background border-border border-2 focus:border-primary h-16 rounded-2xl text-lg transition-all focus:ring-4 focus:ring-primary/10"
                />
              </div>

              <div className="space-y-3">
                <label className="text-xs font-black uppercase tracking-[0.2em] text-foreground/70 ml-1">Mensaje</label>
                <Textarea 
                  name="message" 
                  placeholder="Cuéntanos un poco más para prepararnos..." 
                  required 
                  className="bg-background border-border border-2 focus:border-primary min-h-[160px] rounded-2xl text-lg py-5 transition-all focus:ring-4 focus:ring-primary/10"
                />
              </div>

              <Button 
                type="submit" 
                className="w-full md:w-auto rounded-full px-16 h-16 text-lg font-bold shadow-premium hover:shadow-premium-lg hover:-translate-y-1 transition-all duration-300 bg-primary text-white"
              >
                Enviar Mensaje <Send className="ml-2 h-5 w-5" />
              </Button>
            </form>
          </div>

          {/* Right Column (Col 5) */}
          <div className="lg:col-span-5 flex flex-col gap-10">
            
            {/* Consolidated Contact Card */}
            <div className="bg-background p-8 rounded-3xl border border-border shadow-premium space-y-8 relative z-10">
              <a href="https://wa.me/message/HG2NHDTSI3TJE1" target="_blank" rel="noopener noreferrer" className="flex items-center gap-5 group">
                <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-[#262362] transition-colors">
                  <FaWhatsapp className="h-5 w-5 text-primary group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest font-black text-muted-foreground">WhatsApp</p>
                  <p className="text-sm font-bold text-foreground">+52 811 903 4948</p>
                </div>
              </a>
              
              <a href="mailto:Ogui.magana@gmail.com" className="flex items-center gap-5 group">
                <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-[#262362] transition-colors">
                  <Mail className="h-5 w-5 text-primary group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest font-black text-muted-foreground">Email</p>
                  <p className="text-sm font-bold text-foreground">Ogui.magana@gmail.com</p>
                </div>
              </a>

              <a href="https://www.linkedin.com/in/ulises-castillo-sanchez-060a269b/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-5 group">
                <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-[#262362] transition-colors">
                  <Linkedin className="h-5 w-5 text-primary group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest font-black text-muted-foreground">LinkedIn</p>
                  <p className="text-sm font-bold text-foreground">Ulises Castillo</p>
                </div>
              </a>

              <div className="flex items-center gap-5 group">
                <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-[#262362] transition-colors">
                  <MapPin className="h-5 w-5 text-primary group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest font-black text-muted-foreground">Ubicación</p>
                  <p className="text-sm font-bold text-foreground">San Pedro Garza García. NL</p>
                </div>
              </div>
            </div>

            {/* Google Maps Integration */}
            <motion.div
              ref={mapRef}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative h-[300px] w-full rounded-[2rem] overflow-hidden border border-border/50 shadow-premium flex items-center justify-center bg-muted/20"
            >
              {isMapVisible ? (
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3596.1666838323637!2d-100.3546765239578!3d25.649117677423985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8662bdd32598365f%3A0xc3f835f8d975871c!2sAv.%20Ricardo%20Marg%C3%A1in%20Zozaya%20555-Edificio%20B%2C%20Santa%20Engracia%2C%2066279%20San%20Pedro%20Garza%20Garc%C3%ADa%2C%20N.L.%2C%20Mexico!5e0!3m2!1sen!2sus!4v1712851200000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación En Forma Seguros"
                  className="dark:invert dark:hue-rotate-180 dark:brightness-[0.85] dark:contrast-[1.2] transition-all duration-500"
                ></iframe>
              ) : (
                <div className="flex flex-col items-center gap-3 text-muted-foreground/60">
                  <div className="w-8 h-8 rounded-full border-2 border-primary/20 border-t-primary animate-spin" />
                  <span className="text-xs font-bold uppercase tracking-widest">Cargando Mapa...</span>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMission;
