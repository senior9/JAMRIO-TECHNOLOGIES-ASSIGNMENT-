import './App.css';
import { Route, Routes } from 'react-router-dom';
import About from './Components/About/About';
import Posts from './Components/Posts/Posts';
import NavbarWeb from './Components/Home/Navbar/NavbarWeb';
import Home from './Components/Home/Home';
import PostDetails from './Components/Posts/PostDetails/PostDetails';


function App() {
  return (
    <div className="App">
      <NavbarWeb></NavbarWeb>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/postDetail/:id" element={<PostDetails />} />
        <Route path="/About" element={<About />} />
      </Routes>

    </div>
  );
}

export default App;
