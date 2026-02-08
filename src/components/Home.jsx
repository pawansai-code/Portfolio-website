import About from "./About";
import Contact from "./Contact";
import Creative from "./Creative";
import Experience from "./Experience";
import Footer from "./Footer";
import Hero from "./Hero";
import Projects from "./Projects";
import Skills from "./Skills";

const Home = () => {
  return (
    <>
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Creative />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Home;
