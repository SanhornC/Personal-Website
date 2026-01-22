import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { AboutMe } from "./components/AboutMe";
import { Experiences } from "./components/experiences";
import { Projects } from "./components/Projects";
import { Publications } from "./components/publications";
import { Connect } from "./components/Connect";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/connect" element={<Connect />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
