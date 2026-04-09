import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import InstagramReels from "@/components/InstagramReels";
import Services from "@/components/Services";
import Trust from "@/components/Trust";
import FAQ from "@/components/FAQ";
import Agenda from "@/components/Agenda";
import Speaker from "@/components/Speaker";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="relative z-10 bg-background shadow-2xl mb-0 md:mb-[500px] lg:mb-[450px]">
        <Hero />
        <Agenda />
        <Testimonials />
        <Trust />
        <InstagramReels />
        <Services />
        <Speaker />
        <FAQ />
      </main>
      <div className="relative md:fixed md:bottom-0 md:left-0 md:w-full md:z-0 h-auto md:h-[500px] lg:h-[450px] bg-[#050A10]">
        <Footer />
      </div>
    </div>
  );
}
