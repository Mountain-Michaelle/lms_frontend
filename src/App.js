import Home from './Components/Home';
import Navbar1 from './Components/Navbar1';
import {Routes, Route} from "react-router-dom";
import About from './Components/About';
import Footer from './Components/Footer';
import CourseDetail from './Components/CourseDetail';
import Slider from './Slider/Slider';
import CssTutorial from './css/CSS_Tutorial/CssTutorial';

function App() {
  return (
    <div className="app">
      <Navbar1 />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/css-tutorial" element={<CssTutorial />} /> 
        <Route path="/about" element={<About />} />
        <Route path="/detail/:course_id" element={<CourseDetail />} />
      </Routes>
    </div>
  );
}

export default App;
