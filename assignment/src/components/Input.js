import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { ImEye, ImEyeBlocked } from "react-icons/im";
import "./styles/Input.css";

function Input() {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false);
  const [invalidEmail, setInvalidEmail] = useState(true);
  const [email, setEmail] = useState("");

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const invalidEmailMessage = () => {
    if (error === true || email === "") {
      setInvalidEmail(true);
    } else if (error === false) {
      setInvalidEmail(false);
    }
  };

  const handleOnChange = (e) => {
    const regx =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
    setEmail(e.target.value);
    const result = regx.test(email);
    if (result === true) {
      setError(true);
      setInvalidEmail(true);
    } else if (result === false) {
      setError(false);
    }
    return result;
  };

  return (
    <div className="Input">
      <div className="Input__contents">
        <h1>Input</h1>
        <div className="Input__contents__box">
          <label
            className="Input__contents__box__userInputLabel"
            htmlFor="emailInput"
          >
            E-mail
          </label>
          <input
            type="email"
            name="email"
            id="emailInput"
            value={email}
            onChange={handleOnChange}
            onBlur={invalidEmailMessage}
            placeholder="E-mail"
            className="Input__contents__box__userInput"
            autoComplete="off"
          />
          <FaCheckCircle
            className="Input__contents__box__checkIcon"
            color={error ? "#0093ab" : "#b2b1b9"}
          />
          <p
            className="Input__contents__box__errorMessage"
            style={invalidEmail ? { visibility: "hidden" } : {}}
          >
            invalid e-mail address
          </p>
        </div>
        <div className="Input__contents__box">
          <label
            className="Input__contents__box__userInputLabel"
            htmlFor="passwordInput"
          >
            Password
          </label>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            id="passwordInput"
            placeholder="Password"
            className="Input__contents__box__userInput"
            autoComplete="off"
          />
          {showPassword ? (
            <ImEye
              className="Input__contents__box__eyeIcon"
              size={20}
              color="#0093ab"
              onClick={togglePassword}
            />
          ) : (
            <ImEyeBlocked
              className="Input__contents__box__eyeBlockedIcon"
              color="#b2b1b9"
              size={20}
              onClick={togglePassword}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Input;
