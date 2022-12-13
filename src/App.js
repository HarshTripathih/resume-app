import './App.css';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage/Homepage';
import TechStack from './components/TechStack/TechStack';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';
import Contactus from './components/Contactus/Contactus';
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
      <Navbar />
      <Router>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/techstack" element={<TechStack />} />
          <Route path="/experiences" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contactus" element={<Contactus />} />
        </Routes>      
      </Router>
      <Footer/>
    </div>


  );
}

export default App;
