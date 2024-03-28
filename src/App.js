import About from "./components/About";
import Contact from "./components/Contact";
import Experiences from "./components/Experiences";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="text-gray-400 bg-gray-700">
      <Navbar />
      <About />
      <Experiences />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
