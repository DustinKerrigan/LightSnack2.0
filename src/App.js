import React from 'react';
import NavBar from './components/NavBar';
import Intro from './components/Intro';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
      return  (
            <Router>
                  <NavBar/>
                  <Routes>
                  <Route path="/" element={<Intro/>}/> {'main landing page content'}
                  <Route path ='/about ' component={() => <h1>About</h1>} />
                  <Route path ='/services' component={() => <h1>Social Media</h1>} />
                  <Route path ='/contact' component={() => <h1>Contact</h1>} />
                  <Route path ='/nil' component={() => <h1>NIL</h1>} />
                  <Route path ='/programs' component={() => <h1>Programs</h1>} />
                  <Route path ='/shop' component={() => <h1>Shop</h1>} />
                  </Routes>
            </Router>
      );
}

export default App;
