import Header from "./components/Header/Header";
import About from "./components/About/About";
import AditionalInfo from "./components/AditionalInfo/AditionalInfo";
import Projects from "./components/Projects/Projects";
import Certifications from "./components/Certifications/Certifications";
import Contact from "./components/Contact/Contact";

export default function App() {

  return (
    <div>
      <div className="bg-background dark:bg-primary">
        <Header />
        <About />
        <Projects />
        <Certifications/>
        <Contact />
        <AditionalInfo />
      </div>
    </div>
  );
}
