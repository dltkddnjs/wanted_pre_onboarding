import React from "react";
import "./styles/Toggle.css";

function Toggle() {
  return (
    <div className="Toggle">
      <div className="Toggle__contents">
        <h1>Toggle</h1>
        <label className="Toggle__contents__switch">
          <input type="checkbox" />
          <span className="Toggle__contents__switch__slider"></span>
          <span
            className="Toggle__contents__switch__texts"
            data-default="기본"
            data-det="상세"
          ></span>
        </label>
      </div>
    </div>
  );
}

export default Toggle;
