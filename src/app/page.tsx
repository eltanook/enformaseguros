import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Speaker from "@/components/Speaker";
import ContactMission from "@/components/ContactMission";
import Footer from "@/components/Footer";

// Dynamic imports for improved performance
const Agenda = dynamic(() => import("@/components/Agenda"), { ssr: true });
const Testimonials = dynamic(() => import("@/components/Testimonials"), { ssr: true });
const InstagramReels = dynamic(() => import("@/components/InstagramReels"), { ssr: true });
const FAQ = dynamic(() => import("@/components/FAQ"), { ssr: true });
const Services = dynamic(() => import("@/components/Services"), { ssr: true });

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="relative z-10 bg-background shadow-2xl mb-0 md:mb-[500px] lg:mb-[450px]">
        <Hero />
        <Agenda />
        <Testimonials />
        <Services />
        <InstagramReels />
        <Speaker />
        <ContactMission />
        <FAQ />
      </main>
      <div className="relative md:fixed md:bottom-0 md:left-0 md:w-full md:z-0 h-auto md:h-[500px] lg:h-[450px] bg-[#050A10]">
        <Footer />
      </div>
    </div>
  );
}
