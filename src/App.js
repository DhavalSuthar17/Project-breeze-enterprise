import "./App.css";
import Navbar from "./component/Navbar";
import MainSection from "./pages/MainSection";

import productData from "../src/asset/data";

function App() {
  console.log("Product Data", productData);
  return (
    <div className="App">
      <Navbar></Navbar>
      <MainSection />
      <img src={productData[1].image2} alt="ima"></img>
    </div>
  );
}

export default App;
