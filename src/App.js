import "./App.css";
import Middlesection from "./Components/MiddleSection/Middlesection";
import Navbar from "./Components/Navbar/Navbar";
import Topsection from "./Components/TopSection/Topsection";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <div className="body">
        <Topsection />
        <Middlesection />
        <section className="bottomSection">
          <div className="bottomText">Text for the bottom section</div>
          <button className="button">Button</button>
        </section>
      </div>
      <footer className="footer">Your Footer Content</footer>
    </div>
  );
};

export default App;
