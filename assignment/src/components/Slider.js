import React, { useState } from "react";
import "./styles/Slider.css";

function Slider() {
  const [currentValue, setCurrentValue] = useState(1);

  const percent = [1, 25, 50, 75, 100];

  const handleCurrentValue = (e) => {
    setCurrentValue(e.target.value);
  };

  return (
    <div className="Slider">
      <div className="Slider__contents">
        <h1>Slider</h1>
        <div className="Slider__contents__percentBox">
          <div className="Slider__contents__percentBox__text">
            <h2>{currentValue}</h2>
            <span>%</span>
          </div>
        </div>
        <input
          type="range"
          className="Slider__contents__progressBar"
          min={1}
          max={100}
          step={1}
          value={currentValue}
          onChange={handleCurrentValue}
        />
        <span
          className="Slider__contents__progressBarFilled"
          style={{ width: `${currentValue}%` }}
        ></span>
        <div className="Slider__contents__percentCircle">
          {percent.map((number, i) => (
            <span
              className="Slider__contents__percentCircle__circles"
              style={currentValue >= number ? { background: "#0093ab" } : {}}
              key={i}
            ></span>
          ))}
        </div>
        <div className="Slider__contents__buttonBox">
          {percent.map((number, i) => (
            <button
              className="Slider__contents__buttonBox__progressButton"
              onClick={() => setCurrentValue(number)}
              key={i}
            >
              {number}%
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Slider;
