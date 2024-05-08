import './App.css';
import Home from './templates/Home';
import Navbar from './templates/Navbar';
import About from './templates/About';
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
            </Routes>
        </Router>
  );
}

export default App;
