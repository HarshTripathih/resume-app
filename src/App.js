import './App.css';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage/Homepage';
import TechStack from './components/TechStack/TechStack';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

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


      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/techstack" element={<TechStack />} />
          <Route path="/experiences" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        <Footer />
      </Router>
    </div>


  );
}

export default App;
