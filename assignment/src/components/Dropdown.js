import React, { useState, useEffect, useMemo } from "react";
import { TiArrowSortedDown } from "react-icons/ti";
import { BiSearch } from "react-icons/bi";
import "./styles/Dropdown.css";

function Dropdown() {
  const defaultOption = "All Languages";
  const languages = useMemo(() => {
    return [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Vue",
      "Angular",
      "C",
      "C++",
      "C#",
      "Java",
      "SQL",
    ];
  }, []);
  const [isActive, setIsActive] = useState(false);
  const [selected, setSelected] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [languageList, setLanguageList] = useState(languages);

  const handleActive = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    if (searchTerm.length === 0) {
      setLanguageList(languages);
    } else {
      const choosenTextList = languages.filter((textItem) =>
        textItem.toLowerCase().startsWith(searchTerm.toLowerCase())
      );
      setLanguageList(choosenTextList);
    }
  }, [searchTerm, languages]);

  return (
    <div className="Dropdown">
      <div className="Dropdown__contents">
        <h1>Dropdown</h1>
        <div className="Dropdown__contents__mainBox">
          <div
            className="Dropdown__contents__mainBox--click"
            onClick={handleActive}
          >
            {selected ? selected : defaultOption} <TiArrowSortedDown />
          </div>
          {isActive && (
            <div className="Dropdown__contents__mainBox--options">
              <div className="Dropdown__contents__mainBox--options__search">
                <BiSearch className="Dropdown__contents__mainBox--options__search__icon" />
                <input
                  type="text"
                  placeholder="Search Language"
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                  }}
                  autoFocus
                />
              </div>
              {
                <div
                  className="Dropdown__contents__mainBox--options__option"
                  onClick={() => {
                    setSelected(defaultOption);
                    handleActive();
                  }}
                  key={defaultOption}
                >
                  {defaultOption}
                </div>
              }
              {languageList.map((language) => (
                <div
                  className="Dropdown__contents__mainBox--options__option"
                  onClick={() => {
                    setSelected(language);
                    handleActive();
                  }}
                  key={language}
                >
                  {language}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Dropdown;
