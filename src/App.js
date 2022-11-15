import './App.css';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage/Homepage';
import TechStack from './components/TechStack/TechStack';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';
// Port folio website
// 1.Navbar
// 2.Homepage
// 3.Tech stack
// 4.Experience
// 6.projects
// 7.Footer



function App() {
  return (
    <div className="app">
      <Navbar/>
      <Homepage/>
      <TechStack/>
      <Experience/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
