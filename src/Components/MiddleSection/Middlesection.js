import React from "react";
import "./Middlesection.css";
const Middlesection = () => {
  return (
    <div className="middleSection">
      {/* notice text */}
      {/* 5 statistics data */}
      {/* 4 texts with image  */}
      <p>
        Every student in every school should have the opportunity to learn
        computer science early
      </p>
      <div className="statistics">
        <div className="stat1">
          <p>
            <span className="number">80M</span> <br /> students on Code.org
          </p>
        </div>
        <div className="stat2">
          <p>
            <span className="number">30M</span> <br /> students on Code.org
          </p>
        </div>
        <div className="stat3">
          <p>
            <span className="number">50M</span> <br /> students on Code.org
          </p>
        </div>
        <div className="stat4">
          <p>
            <span className="number">40M</span> <br /> students on Code.org
          </p>
        </div>
        <div className="stat5">
          <p>
            <span className="number">20M</span> <br /> students on Code.org
          </p>
        </div>
      </div>
      <div className="textWithImage">
        <div className="imageWithText">
          <img src="image1.jpg" alt="Image 1" />
          <div className="imageText">Text for Image 1</div>
        </div>
        <div className="imageWithText">
          <img src="image1.jpg" alt="Image 1" />
          <div className="imageText">Text for Image 2</div>
        </div>
        <div className="imageWithText">
          <img src="image1.jpg" alt="Image 1" />
          <div className="imageText">Text for Image 3</div>
        </div>
        <div className="imageWithText">
          <img src="image1.jpg" alt="Image 1" />
          <div className="imageText">Text for Image 4</div>
        </div>
      </div>
    </div>
  );
};

export default Middlesection;
