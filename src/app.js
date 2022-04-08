import Navbar from './components/Navbar';
import React from "react";
import Homepage  from './components/homepage';
import Cv from './components/pages/cv';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Projects from './components/pages/Projects/redux/projects';
import Header from './components/pages/Projects/Containers/Header';
import ProductListing from './components/pages/Projects/Containers/productListing';
import ProductDetail from './components/pages/Projects/Containers/productDetail';


function App(){

return(
  
  

  
  <Router>
 
    <Routes >
    
      <Route path='/' element={<Homepage/>} />
      <Route path='/cv' element={<Cv />} />
      <Route path='/projects' element={<ProductListing />} />
      <Route path='/projects/:productId' element={<ProductDetail />} />
    </Routes>

    <div>
      <Navbar />
    </div>
    

  </Router>
  
  
  )
}
export default App

