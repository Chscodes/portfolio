import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import EducationAwards from "./components/EducationAwards";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen relative bg-ink">
      {/* Faint whole-page ledger texture — decorative, sits behind everything */}
      <div
        className="ledger-rules fixed inset-0 opacity-[0.035] pointer-events-none -z-10"
        aria-hidden="true"
      />
      <Nav />
      <main>
        <Hero />
        <Projects />
        <Experience />
        <Skills />
        <EducationAwards />
      </main>
      <Footer />
    </div>
  );
}

export default App;
