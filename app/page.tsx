import Hero from "@/components/custom/hero";
import About from "@/components/custom/about";
import Work from "@/components/custom/work";
import Contact from "@/components/custom/contact";
import Footer from "@/components/custom/footer";
export default function Home() {
  return (
    <main className="w-full h-full">
      <Hero />
      <About />
      <Work />
      <Contact />
      <Footer />
    </main>
  );
}
