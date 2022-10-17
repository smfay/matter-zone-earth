import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import NavBar from "./components/NavBar"
import About from "./screens/About"
import Home from './screens/Home'
import Archive from './screens/Archive'
import Post from './screens/Post'

function App() {
  return (
    <div class="bg-main bg-zinc-500 bg-fixed w-full h-full font-inter text-black -z-50 ">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path='/archive/:slug' element={<Post />} />
          <Route exact path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/archive' element={<Archive />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
