import "./App.css";
import Footer1 from "./components/Footer/Footer1";
import Navbar1 from "./components/Navbar/Navbar1";
import Experience1 from "./components/Sections/Experience/Experience1";
import Hero1 from "./components/Sections/Hero/Hero1";
import Projects1 from "./components/Sections/Projects/Projects1";
import Skills1 from "./components/Sections/Skills/Skills1";

function App() {
  return (
    <div className="bg-[#111] text-white scroll-smooth">
      <Navbar1 />
      <Hero1 />
      <Skills1 />
      <Projects1 />
      <Experience1 />
      <Footer1 />
    </div>
  );
}

export default App;
