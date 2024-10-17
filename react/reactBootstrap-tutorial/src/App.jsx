import "./App.css";
import { useState, useEffect } from "react";
import NavbarComponent from "./components/navbar/NavbarComponent";
import Home from "./components/home/Home";
import Services from "./components/services/Services";
import Contact from "./components/enquire/Enquire";
import Team from "./components/team/Team";
import Clients from "./components/clients/Clients";

function App() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      console.log(sections);
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach((section) => {
        if (
          scrollPosition >= section.offsetTop &&
          scrollPosition < section.offsetHeight + section.offsetTop
        ) {
          setActiveSection(section.id);
        }
      });
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <section id="background-color-animation"></section>
      <section id="home">
        <NavbarComponent activeSection={activeSection} />
        <Home />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="clients">
        <Clients />
      </section>
      <section id="team">
        <Team />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </>
  );
}

export default App;
