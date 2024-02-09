import "./App.css";
import Navbar from "./Components/Navbar/Navbar";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      {/* <header className="header">
        <div className="headerLeft">
          <div className="logo">Your Logo</div>
          <div className="headerText">
            <ul className="listItem">
              <li className="list">Learn</li>
              <li className="list">Teach</li>
              <li className="list">Projects</li>
              <li className="list">Stats</li>
              <li className="list">Help Us</li>
              <li className="list">Incubator</li>
              <li className="list">About</li>
            </ul>
          </div>
        </div>

        <div className="buttons">
          <button className="button create">Create</button>
          <button className="button">Sign In</button>
        </div>
      </header> */}
      <div className="body">
        <section className="topSection">
          <div className="backgroundImage"></div>

          <div className="text">
            <h1 className="headerTopText">Help students become superheroes!</h1>
            <p>
              Join our highly sipportive Professional Learning <br /> Program
              for middle and high school educators.
            </p>
            <button className="button">Click me</button>
          </div>
        </section>
        <section className="middleSection">
          <div className="imageWithText">
            <img src="image1.jpg" alt="Image 1" />
            <div className="imageText">Text for Image 1</div>
          </div>
          {/* Repeat the above structure for the other three images */}
        </section>
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
