import React from 'react';
import NavBar from './components/NavBar';
import About from './components/About';
import Nil from './components/Nil';
import Programs from './components/Programs';
import './styles/responsive.css';
import {BrowserRouter as Router, Route, Routes, useLocation} from 'react-router-dom';

function AppWrapper() {
  const location = useLocation();
  const hideNavOnRoutes = ['/programs', '/nil'];

  const shouldHideNav = hideNavOnRoutes.includes(location.pathname);

  return (
    <>
      {!shouldHideNav && <NavBar />}
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<h1>Contact</h1>} />
        <Route path="/nil" element={<Nil />} />
        <Route path="/programs" element={<Programs/>} />
        <Route path="/" element={<About />} /> 
      </Routes>
    </>
  );
}

function App() {
    return (
        <Router>
            <AppWrapper />
        </Router>
    );
}

export default App;
