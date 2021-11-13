import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import ProductList from "./components/productList/ProductList";

function App() {
  return (
    <div
      className="App"
      style={{ backgroundColor: "#00203FFF", color: "#ADEFD1FF" }}
    >
      <Intro />
      <About />
      <ProductList />
      <Contact />
    </div>
  );
}

export default App;
