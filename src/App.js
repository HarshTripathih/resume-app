import './App.css';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage/Homepage';
import TechStack from './components/TechStack/TechStack';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';

// Port folio website
// 1.Navbar
// 2.Homepage
// 3.Tech stack
// 4.Experience
// 6.projects



function App() {
  return (
    <div className="app">
      <Navbar/>
      <Homepage/>
      <TechStack/>
      <Experience/>
      <Projects/>
    </div>
  );
}

export default App;
