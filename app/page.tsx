import Hero from "@/components/custom/hero";
import About from "@/components/custom/about";
import Work from "@/components/custom/work";
import Contact from "@/components/custom/contact";
import Footer from "@/components/custom/footer";
export default function Home() {
  return (
    <main className="w-full h-full pt-[72px] md:pt-[88px] lg:pt-[96px] bg-black">
      <Hero />
      <About />
      <Work />
      <Contact />
      <Footer />
    </main>
  );
}
