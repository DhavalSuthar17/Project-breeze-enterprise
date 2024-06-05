import "./App.css";
import Navbar from "./component/Navbar";
import Products from "./component/Products";
import About from "./pages/About";
import MainSection from "./pages/MainSection";

function App() {
  // console.log("Product Data", productData);
  return (
    <div className="App">
      <Navbar></Navbar>
      <MainSection />
      <Products />
      <About />
    </div>
  );
}

export default App;
