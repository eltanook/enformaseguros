import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Mission from "@/components/Mission";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Agenda from "@/components/Agenda";
import Speaker from "@/components/Speaker";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Mission />
      <Testimonials />
      <FAQ />
      <Agenda />
      <Speaker />
      <Footer />
    </div>
  );
};

export default Index;
