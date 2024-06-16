import { Route, Routes } from "react-router-dom";
import "./App.css";
import { useState } from "react";
import Navbar from "./component/Navbar";
import Products from "./component/Products";
import About from "./pages/About";
import MainSection from "./pages/MainSection";

function App() {





  return (
    <div className="App overflow-x-hidden">
      <Navbar></Navbar>
      <MainSection />
      <Products  />
      <About/>
      
     
      
     

      {/* <Routes>
        <Route path="/" element={ <MainSection />}/>
        <Route path='/products' element={<Products />}/>
      </Routes> */}


      
    </div>
  );
}

export default App;
