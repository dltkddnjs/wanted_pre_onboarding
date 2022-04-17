import React, { useState } from "react";
import "./styles/Tab.css";

function Tab() {
  const foods = ["감자", "고구마", "카레라이스"];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleIndex = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="Tab">
      <div className="Tab__contents">
        <h1>Tab</h1>

        {foods.map((food, i) => (
          <li
            className={
              currentIndex === i
                ? "Tab__contents__items clicked"
                : "Tab__contents__items"
            }
            key={i}
            onClick={() => handleIndex(i)}
          >
            {food}
          </li>
        ))}
        <span
          className="Tab__contents__underbar"
          style={{
            transform: `translateX(
                ${currentIndex * 180}px)`,
          }}
        ></span>
      </div>
    </div>
  );
}

export default Tab;
