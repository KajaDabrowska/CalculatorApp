// import logo from "./logo.svg";
import "./App.css";

// import Counter from "./components/counter/counter.component";
// import Design from "./components/design/design.component";
import Calculator from "./components/calculator/calculator.component";
import Footer from "./components/footer/footer.component";
import "./components/design/design.styles.css";

function App() {
  return (
    <div className="App">
      <main>
        <Calculator />
      </main>
      <Footer />
    </div>
  );
}

export default App;
