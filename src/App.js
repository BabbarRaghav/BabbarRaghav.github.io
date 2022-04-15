import './App.css';
import Navbar from './Components/Navbar';
// import { Outlet } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Project from './Components/Project';
import Resume from './Components/Resume';
import About from './Components/About';

function App() {
  return (
    <div className="App">
      {/* <Outlet /> */}
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Project />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
