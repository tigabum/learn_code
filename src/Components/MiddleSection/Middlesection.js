import React from "react";
import MiddleSectionBox from "../../Containers/MiddleSection/Middlesectionbox";
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
      <MiddleSectionBox />
    </div>
  );
};

export default Middlesection;
