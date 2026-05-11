import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import FilterTabs from "./components/FilterTabs";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <section className="projects-header">
          <h2>Meine Projekte</h2>
          <p>Entdecke alle aktuellen und zukünftigen Projekte</p>
        </section>
        <FilterTabs />
      </main>
      <Footer />
    </>
  );
}
