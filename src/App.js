// import logo from "./logo.svg";
import "./App.css";

// import Counter from "./components/counter/counter.component";
// import Design from "./components/design/design.component";
import Calculator from "./components/calculator/calculator.component";
import "./components/design/design.styles.css";

function App() {
  return (
    <div className="App">
      <Calculator />
      <p className="design-by">
        Desing by: Han Chun Chuang
        <br /> You can find her here:&nbsp;
        <a
          target="_blank"
          rel="noreferrer noopener"
          href="https://dribbble.com/hang_gchuang"
        >
          https://dribbble.com/hang_gchuang
        </a>
      </p>
    </div>
  );
}

export default App;
