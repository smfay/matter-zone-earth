import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import NavBar from "./components/NavBar"
import About from "./screens/About"
import Home from './screens/Home'
import Archive from './screens/Archive'

function App() {
  return (
    <div class="bg-zinc-800 w-screen h-screen font-willump text-white">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route exact path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/archive' element={<Archive />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
