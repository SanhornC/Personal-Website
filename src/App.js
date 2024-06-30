import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from "./components/Banner";
import { Research_Experiences } from "./components/experiences";
import { Work_Experiences } from "./components/work_experiences";
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
      <Research_Experiences />
      <Work_Experiences/>
      <Connect />
      <Footer />
    </div>


  );
}

export default App;
