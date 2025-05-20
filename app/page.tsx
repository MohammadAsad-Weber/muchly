// Components
import Hero from "@/components/Hero";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Categories from "@/components/Categories";
import FeaturedProducts from "@/components/FeaturedProducts";

function Home() {
  return (
    <main>
      <Hero />
      <FeaturedProducts />
      <Categories />
      <About />
      <Contact />
    </main>
  );
}

export default Home;
