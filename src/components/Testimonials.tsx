"use client";
import Image from "next/image";
import { useRef, useState, useEffect, useCallback } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import daniImg from "@/assets/testimonial-dani.png";
import karlaImg from "@/assets/testimonial-karla.png";
import omarImg from "@/assets/testimonial-omar.png";
import cristinaImg from "@/assets/testimonial-cristina.png";
import fernandaImg from "@/assets/testimonial-fernanda.png";
import katiaImg from "@/assets/testimonial-katia-javier.png";
import andresImg from "@/assets/testimonial-andres.png";
import luciaImg from "@/assets/testimonial-lucia.png";

const testimonials = [
  {
    name: "Dani Romero",
    role: "CHEF",
    image: daniImg,
    text: '"La asesoría de Ogui me brinda una sensación de seguridad y confianza, ya que siempre está dispuesta a clarificar mis dudas y proporcionar soluciones personalizadas."',
  },
  {
    name: "Karla Wasabichi",
    role: "STUNDUPERA",
    image: karlaImg,
    text: '"Ogui fue amable y paciente desde el inicio, brindándome opciones claras y útiles. Contraté mi seguro 10 días antes de un incidente y gracias a ella todo fue rápido y sencillo."',
  },
  {
    name: "Omar Villarreal",
    role: "VETERINARIO",
    image: omarImg,
    text: '"Ogui, recomendada por mi hija, me dio confianza desde el inicio. Le confié mis seguros y siempre tiene la mejor disposición para ayudar. Muy contento con su atención."',
  },
  {
    name: "Cristina Tirado",
    role: "INGENIERA",
    image: cristinaImg,
    text: '"Con En Forma encontré el apoyo y guía que necesitaba; tengo la tranquilidad de saber que mi dinero está bien invertido, así como la tranquilidad de tener el futuro de mi hija asegurado y en buenas manos"',
  },
  {
    name: "Fernanda Corral",
    role: "MARKETING DEPORTIVO",
    image: fernandaImg,
    text: '"La asesoría gratuita con Ogui me aclaró mis inversiones y nuevas opciones para asegurar mi presente y futuro. Es cercana, atenta y brinda un excelente servicio. ¡Recomendada!"',
  },
  {
    name: "Katia y Javier",
    role: "ABOGADA E INGENIERO",
    image: katiaImg,
    text: '"Con En Forma Seguros entendimos lo desprotegidos que estábamos. Ahora nos sentimos preparados para imprevistos y aprendimos a mantener unas finanzas saludables a futuro."',
  },
  {
    name: "Andrés Reyes",
    role: "ARQUITECTO",
    image: andresImg,
    text: '"Profesionalismo y calidez. Ogui entiende que detrás de cada póliza hay un proyecto de vida. Su asesoría patrimonial fue clave para mi tranquilidad actual."',
  },
  {
    name: "Lucía Méndez",
    role: "EMPRENDEDORA",
    image: luciaImg,
    text: '"No sabía por dónde empezar con mi retiro. Ogui me lo explicó de forma simple y efectiva. Ahora sé que mi futuro está blindado."',
  },
];

const Row = ({ items, direction, x, isMobile, rowType }: { items: typeof testimonials, direction: number, x: any, isMobile?: boolean, rowType: 'top' | 'bottom' }) => (
  <motion.div 
    style={isMobile ? {} : { x }} 
    className={`flex items-stretch gap-4 md:gap-0 ${isMobile ? "overflow-x-auto scrollbar-hide snap-x px-6 pb-4" : "whitespace-nowrap"}`}
  >
    {(isMobile ? items : items.concat(items)).map((t, i) => (
      <article 
        key={`${t.name}-${i}`}
        className={`p-8 md:p-16 border border-primary/40 flex flex-col justify-between ${isMobile ? "min-w-[85vw] snap-center shadow-none" : "min-w-[300px] md:min-w-[500px] shadow-none"} ${rowType === 'top' ? 'md:border-t-0' : 'md:border-b-0'} bg-transparent transition-colors hover:bg-muted/50 rounded-2xl md:rounded-none`}
      >
        <p className="text-muted-foreground text-base md:text-xl leading-relaxed font-medium mb-8 md:mb-12 whitespace-normal">
          {t.text}
        </p>
        
        <div className="flex items-center gap-4">
          <div className="relative w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden border-2 border-primary/20 flex-shrink-0">
            <Image 
              src={t.image} 
              alt={`Testimonio de ${t.name} - Cliente de En Forma Seguros`} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
              sizes="64px"
            />
          </div>
          <div className="flex flex-col">
            <p className="font-bold text-primary text-xl md:text-2xl tracking-tight mb-1">{t.name}</p>
            <p className="text-muted-foreground text-[10px] md:text-xs font-bold uppercase tracking-widest">{t.role}</p>
          </div>
        </div>
      </article>
    ))}
  </motion.div>
);

const Testimonials = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["-40%", "0%"]);

  const [isMobile, setIsMobile] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center", skipSnaps: false });

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const mid = Math.ceil(testimonials.length / 2);
  const firstRow = testimonials.slice(0, mid);
  const secondRow = testimonials.slice(mid);

  return (
    <section id="clientes" ref={containerRef} className="relative min-h-[110vh] md:min-h-[130vh] bg-muted/30 dark:bg-muted/10 overflow-hidden pt-24 pb-12">
      <div className="sticky top-20 h-auto min-h-[80vh] flex flex-col justify-center gap-0 overflow-hidden z-10">
        <div className="container mx-auto px-4 mb-8 md:mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-[0.2em] mb-6">
              Testimonios
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-4 md:mb-6 tracking-tighter">
              Testimonios De <span className="text-primary">Clientes</span>
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto text-base md:text-lg leading-relaxed font-medium px-4">
              Voces reales que avalan una trayectoria de compromiso y resultados tangibles.
            </p>
          </motion.div>
        </div>

        <div className="flex flex-col border-y border-border/50">
          {isMobile ? (
            <div className="relative group/carousel">
              <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex">
                  {testimonials.map((t, i) => (
                    <div key={i} className="flex-[0_0_100%] min-w-0 pl-0">
                      <article className="p-8 mx-6 bg-card/30 border border-primary/20 rounded-[2rem] flex flex-col justify-between h-auto min-h-[320px]">
                        <p className="text-muted-foreground text-lg leading-relaxed font-medium mb-8">
                          {t.text}
                        </p>
                        <div className="flex items-center gap-4">
                          <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-primary/20 shrink-0">
                            <Image src={t.image} alt={t.name} className="object-cover fill" sizes="48px" />
                          </div>
                          <div>
                            <p className="font-bold text-primary text-xl tracking-tight">{t.name}</p>
                            <p className="text-muted-foreground text-[10px] font-bold uppercase tracking-widest">{t.role}</p>
                          </div>
                        </div>
                      </article>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Carousel Controls */}
              <div className="flex items-center justify-between px-6 mt-8">
                <div className="flex gap-2">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => emblaApi?.scrollTo(i)}
                      aria-label={`Ir al testimonio ${i + 1}`}
                      className="py-4 group/dot"
                    >
                      <div className={`h-1.5 transition-all duration-300 rounded-full ${
                        selectedIndex === i ? "w-8 bg-primary" : "w-1.5 bg-primary/20"
                      } group-hover/dot:bg-primary/40`} />
                    </button>
                  ))}
                </div>
                <div className="flex gap-3">
                  <button 
                    onClick={scrollPrev}
                    aria-label="Anterior testimonio"
                    className="w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center text-primary hover:bg-primary/10 transition-all hover:scale-110 active:scale-95"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button 
                    onClick={scrollNext}
                    aria-label="Siguiente testimonio"
                    className="w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center text-primary hover:bg-primary/10 transition-all hover:scale-110 active:scale-95"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <>
              <Row items={firstRow} direction={1} x={x1} isMobile={isMobile} rowType="top" />
              <Row items={secondRow} direction={-1} x={x2} rowType="bottom" />
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
