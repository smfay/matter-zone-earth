import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import NavBar from "./components/NavBar"
import About from "./screens/About"
import Home from './screens/Home'
import Archive from './screens/Archive'
import Post from './screens/Post'
import Footer from './components/Footer';
import Zones from './screens/Zones';
import noise from './assets/images/noisetexture.png'
import CreatePost from './screens/CreatePost';
import BlockTools from './components/content/editor/BlockTools';

function App() {

  return (
    <div className="bg-zinc-500 overflow-hidden h-full w-full font-inter text-black "
    // style={{ backgroundImage: `url(${noise})` }
    // }
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
          <Route path='/editor' element={<CreatePost />} />
        </Routes>
        <Footer />
      </Router>
    </div >
  );
}

export default App;
