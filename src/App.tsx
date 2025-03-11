import './App.css';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import AboutUs from './pages/AboutUs';
import OurServices from './pages/OurServices';

// Scroll to top when leaving a page
const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    return () => {
      window.scrollTo(0, 0);  // Scroll to top before navigating
    };
  }, [location.pathname]);

  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />  {/* Ensures smooth navigation */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<OurServices />} />
        <Route path="/insights" element={<div className="mt-32"><h1>Insights</h1></div>} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/careers" element={<div className="mt-32"><h1>Careers</h1></div>} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
