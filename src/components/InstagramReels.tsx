"use client";
import { useRef, useState, useEffect, useCallback } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Instagram, ArrowRight, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import ReelCard from "./ReelCard";

// Real Thumbnail Imports
import thumb1 from "@/assets/reels/DL-9k6mSRuI.jpg";
import thumb2 from "@/assets/reels/DW4SNW1kRhl.jpg";
import thumb3 from "@/assets/reels/DWz8RvWjYEn.jpg";
import thumb4 from "@/assets/reels/DWreQp2Ao8I.jpg";
import thumb5 from "@/assets/reels/DWm8_PEDVPE.jpg";
import thumb6 from "@/assets/reels/DWhiJdZAjUf.jpg";
import thumb7 from "@/assets/reels/DWXefpjDbpt.jpg";
import thumb8 from "@/assets/reels/DVz-utrDfYp.jpg";

const reels = [
  { 
    id: "DL-9k6mSRuI",
    title: "¿No quieres ahorrar?",
    thumbnail: thumb1
  },
  { 
    id: "DW4SNW1kRhl",
    title: "Hazlo con miedo",
    thumbnail: thumb2
  },
  { 
    id: "DWz8RvWjYEn",
    title: "El caso de mi papá",
    thumbnail: thumb3
  },
  { 
    id: "DWreQp2Ao8I",
    title: "No necesitas permiso",
    thumbnail: thumb4
  },
  { 
    id: "DWm8_PEDVPE",
    title: "Tu dinero del Retiro",
    thumbnail: thumb5
  },
  { 
    id: "DWhiJdZAjUf",
    title: "Be THE WOMAN",
    thumbnail: thumb6
  },
  { 
    id: "DWXefpjDbpt",
    title: "Tu 'yo' de 65 años",
    thumbnail: thumb7
  },
  { 
    id: "DVz-utrDfYp",
    title: "Momentos expansivos",
    thumbnail: thumb8
  },
];

const InstagramReels = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["5%", "-122%"]);
  const [isMobile, setIsMobile] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: "center", skipSnaps: false });

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

  return (
    <section id="contenido" ref={targetRef} className="relative h-auto md:h-[350vh] bg-background">
      <div className="relative md:sticky top-0 h-auto md:h-screen flex flex-col justify-center overflow-hidden py-20 md:py-0">
        {/* Green grid background (Fixed within the sticky view) */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#006f4f0d_1px,transparent_1px),linear-gradient(to_bottom,#006f4f0d_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)]" />
        </div>
        <div className="container mx-auto px-6 md:px-4 mb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl"
            >
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-[0.2em] mb-6">
                Contenido Educativo
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground">
                Aprende de finanzas <span className="text-primary">en segundos.</span>
              </h2>
            </motion.div>
            
            <motion.a
              href="https://www.instagram.com/oguienforma/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 text-foreground font-bold hover:text-primary transition-colors group"
            >
              Ver todo en Instagram <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </div>
        </div>

        <div className="mb-0 md:mb-12 px-0 md:px-0">
          {isMobile ? (
            <div className="relative group/carousel">
              <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex">
                  {reels.map((reel) => (
                    <div key={reel.id} className="flex-[0_0_85%] min-w-0 pl-6 pr-6 last:pr-6">
                      <ReelCard 
                        id={reel.id}
                        thumbnail={reel.thumbnail}
                        title={reel.title}
                        isMobile={isMobile}
                      />
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Carousel Indicators & Controls */}
              <div className="flex items-center justify-between px-6 mt-8">
                <div className="flex gap-2">
                  {reels.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => emblaApi?.scrollTo(i)}
                      aria-label={`Ir al reel ${i + 1}`}
                      className="py-6 group/dot"
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
                    aria-label="Anterior reel"
                    className="w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center text-primary group-hover/carousel:bg-primary/10 transition-all hover:scale-110 active:scale-95"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button 
                    onClick={scrollNext}
                    aria-label="Siguiente reel"
                    className="w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center text-primary group-hover/carousel:bg-primary/10 transition-all hover:scale-110 active:scale-95"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <motion.div 
              style={isMobile ? {} : { x }} 
              className="flex items-center gap-6 md:gap-8 px-6 md:px-4 overflow-x-auto md:overflow-x-visible pb-8 md:pb-0 scrollbar-hide snap-x"
            >
              {reels.map((reel) => (
                <ReelCard 
                  key={reel.id}
                  id={reel.id}
                  thumbnail={reel.thumbnail}
                  title={reel.title}
                  isMobile={isMobile}
                />
              ))}

              {/* Final CTA Section (Desktop) */}
              <div className="shrink-0 w-[400px] md:w-[600px] flex flex-col items-center justify-center px-12 text-center ml-12">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  className="space-y-8"
                >
                  <div className="space-y-4">
                    <h3 className="text-4xl md:text-6xl font-bold text-foreground tracking-tighter leading-none">
                      Lleva tu futuro <br />
                      al <span className="text-primary">siguiente nivel.</span>
                    </h3>
                    <p className="text-muted-foreground text-lg md:text-xl font-medium max-w-md mx-auto">
                      Síguenos para más consejos diarios sobre protección patrimonial.
                    </p>
                  </div>
                  
                  <motion.div
                    animate={{ y: [0, 12, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="flex flex-col items-center gap-3 pt-8"
                  >
                    <span className="text-xs uppercase tracking-[0.3em] font-black text-primary">Seguir Explorando</span>
                    <ChevronDown className="h-10 w-10 text-primary" />
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default InstagramReels;
