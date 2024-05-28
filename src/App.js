import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import Product from './component/Products';

function App() {
  return (
   
    <div className="App">
       <Navbar></Navbar>

       <Product></Product>
      
    </div>
  );
}

export default App;
