import React from 'react';
import NavBar from './components/NavBar';
import About from './components/About';
import Nil from './components/Nil';

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
    return (
        <Router>
            <NavBar/>
            <Routes>
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<h1>Social Media</h1>} />
                <Route path="/contact" element={<h1>Contact</h1>} />
                <Route path="/nil" element={<Nil/>} />
                <Route path="/programs" element={<h1>Programs</h1>} />
                <Route path="/shop" element={<h1>Shop</h1>} />
                <Route path="/" element={<About />} /> {/* Using About as landing page */}
            </Routes>
        </Router>
    );
}

export default App;
