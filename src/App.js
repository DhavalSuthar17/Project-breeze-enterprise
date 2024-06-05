import "./App.css";
import Navbar from "./component/Navbar";
import Products from "./component/Products";
import MainSection from "./pages/MainSection";

function App() {
  console.log("Product Data", productData);
  return (

    <div className="App">
      <Navbar></Navbar>
      <MainSection />
    </div>
  );
}

export default App;
