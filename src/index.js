import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Overview from './Components/Overview.jsx';
import Footer from './Components/Footer';
import './App.css';
import Gallery from './Components/Gallery.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Features} from './Components/Features.jsx';
import Specs from './Components/Specs.jsx';
import Offers from './Components/Offers.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <>
       <BrowserRouter>
        <Routes>
            <Route path='/' element={<Overview/>}/>
            <Route path='Gallery' element={<Gallery/>}/>
            <Route path='Features' element={<Features/>}></Route>
            <Route path='Specs' element={<Specs/>} />
            <Route path='Offers' element={<Offers/>}/>
        </Routes>
        <Footer/>
       </BrowserRouter>
      </>
);


