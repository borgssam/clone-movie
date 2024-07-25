import React from 'react';
// import Home from './routes/Home';
import './App.css';
import {BrowserRouter, HashRouter, Routes, Route} from 'react-router-dom';
import {About} from './routes/About';
import {Home} from './routes/Home';
import { Detail } from './routes/Detail';
import { Detail2 } from './routes/Detail2';
import { Navigation } from './routes/Navigation'; 

function App() {
  return (

  <BrowserRouter>
    <Navigation/>
    <Routes>
      <Route path="/" extract={true} element={<Home />} /> 
      <Route path="/about" element={<About />} />
      <Route path="/movie-detail" element={<Detail />} />
    </Routes>
  </BrowserRouter>

  );
  // return <Home />;
}

export default App;
