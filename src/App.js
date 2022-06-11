import Home from "./Pages/Home";
import Demo from "./Pages/Demo";
import Solutions from './Pages/Solutions'
import Events from "./Pages/Events";
import { ParallaxProvider } from 'react-scroll-parallax';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Pages/About";
import Media from "./Pages/Media";
import IFSO from "./Pages/IFSO";
import Code2Win from "./Pages/Code2Win";
import Curriculum from "./Pages/Curriculum";
import Digital from "./Pages/Digital";

function App() {
  return (
    <div>
      <ParallaxProvider>
        <BrowserRouter>
        <Routes>
        <Route path='/' element={<Home/>} />
        {/* <Route path="/demo" element={<Demo/>}/> */}
        <Route path="/solutions" element={<Solutions/>}/>
        <Route path="/events" element={<Events/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/media" element={<Media/>}/>
        <Route path="/ifso" element={<IFSO/>}/>
        <Route path="/code2win" element={<Code2Win/>}/>
        <Route path="/curriculum" element={<Curriculum/>}/>
        <Route path="/digital" element={<Digital/>}/>
        </Routes>
        </BrowserRouter>
      </ParallaxProvider>
    </div>
  )
}

export default App;
