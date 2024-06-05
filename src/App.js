import "./App.css";
import Navbar from "./component/Navbar";
import Products from "./component/Products";
import MainSection from "./pages/MainSection";

import { Route, Routes } from 'react-router-dom';


function App() {
  return (

    <div className="App">
      <Navbar/>
     
      <Routes>

               <Route path='/' element={<MainSection/>}/>
               <Route path='/products' element={<Products/>}/>
                 
                 
                 
      </Routes>
    </div>
  );
}

export default App;
