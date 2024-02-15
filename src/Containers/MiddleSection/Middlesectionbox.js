import React from "react";
import "./Middlesectionbox.css";
import images from "../../images";

const MiddleSectionBox = () => {
  return (
    <div className="textWithImage">
      {images.map(({ src, id, title, description }) => {
        return (
          <div key={id} className="boxContainer">
            <img src={src} alt={title} />
            <div className="imageText">
              <p>
                Hour of Code
                <br /> Explore, play, and create!
              </p>
              <p>Try the Hour of Code</p> <p>About the Hour of Code</p>{" "}
              <p>Host an Hour of Code</p>{" "}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MiddleSectionBox;
