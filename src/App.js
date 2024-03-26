import { useRef } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Experiences from "./components/Experiences";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import { useReactToPrint } from "react-to-print";

function App() {
  const headers = [
    { label: "First Name", key: "firstname" },
    { label: "Last Name", key: "lastname" },
    { label: "Email", key: "email" },
  ];

  const data = [
    { firstname: "Ahmed", lastname: "Tomi", email: "ah@smthing.co.com" },
    { firstname: "Raed", lastname: "Labes", email: "rl@smthing.co.com" },
    { firstname: "Yezzi", lastname: "Min l3b", email: "ymin@cocococo.com" },
  ];

  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "emp-data",
    // onAfterPrint: () => alert('Print success')
  });

  return (
    <div className="text-gray-400 bg-gray-700" ref={componentRef}>
      <Navbar handlePrint={handlePrint} data={data} headers={headers}/>
      <About />
      <Experiences />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
