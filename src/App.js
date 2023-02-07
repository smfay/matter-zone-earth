import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import NavBar from "./components/NavBar"
import About from "./screens/About"
import Home from './screens/Home'
import Archive from './screens/Archive'
import Post from './screens/Post'
import Footer from './components/Footer';
import Zones from './screens/Zones';
import noise from './assets/images/noisetexture.png'

function App() {
  return (
    <div className="selection:bg-zinc-100 selection:text-zinc-900 bg-zinc-900 bg-fixed w-full h-full font-inter text-zinc-300 -z-50"
      style={
        {
          backgroundImage: `url(${noise})`,
        }
      }
    >
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path='/archive/:slug' element={<Post />} />
          <Route exact path='/home' element={<Home />} />
          <Route exact path='/zones' element={<Zones />} />
          <Route path='/about' element={<About />} />
          <Route path='/archive' element={<Archive />} />
        </Routes>
        <Footer />
      </Router>
    </div >
  );
}

export default App;
