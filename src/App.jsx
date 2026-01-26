import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import CCTV from './pages/CCTV';
import Cybersecurity from './pages/Cybersecurity';
import DeviceRepairs from './pages/DeviceRepairs';
import EndUserComputing from './pages/EndUserComputing';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-primary-50/30 via-white to-primary-50/30">
        <Navigation />
        <main className="pt-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/cctv" element={<CCTV />} />
            <Route path="/cybersecurity" element={<Cybersecurity />} />
            <Route path="/device-repairs" element={<DeviceRepairs />} />
            <Route path="/end-user-computing" element={<EndUserComputing />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;