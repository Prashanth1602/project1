import './App.css';
import Home from './templates/Home';
import Navbar from './templates/Navbar';
import About from './templates/About';
import Footer from './templates/Footer';
import Contact from './templates/Contact';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
        </Router>
  );
}

export default App;
