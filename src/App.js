import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from "./components/Banner";
import { Experiences } from "./components/experiences";
import { Publications } from "./components/publications";
import { Connect } from "./components/Connect";
import { Footer } from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Publications />
      <Experiences />
      <Connect />
      <Footer />
    </div>


  );
}

export default App;
