import React, { useContext, useRef, useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Toggle } from "../store/ContextStore";

export default function InputFirst() {
  //   const { text, setPassword } = useContext(Toggle);
  const { inp } = useContext(Toggle);
  const { setInput } = useContext(Toggle);
  
  const [text, setText] = useState("password");
  const { checkForColor } = useContext(Toggle);
  
  const { setEnable } = useContext(Toggle);

  const handleInput = (event) => {
    setInput(event.target.value);
    checkForColor(event.target.value);
  };
  const handleInput2 = (event) => {
    if (event.target.value === inp) {
      setEnable("false");
    } else {
      setEnable("true");
    }
  };

  return (
    <div className="form-cont">
      <div className="form-floating inp-cont">
        <input
          type={text}
          className="form-control"
          id="floatingPassword1"
          placeholder="Password"
          onKeyUp={handleInput}
        ></input>

        <label htmlFor="floatingPassword1">Password</label>
      </div>
      <span
        className="eye"
        onClick={() => {
          text == "password" ? setText("text") : setText("password");
        }}
      >
        {text == "password" ? <FaEyeSlash /> : <FaEye />}
      </span>

      <div className="form-floating inp-cont">
        <input
          type="password"
          className="form-control"
          id="floatingPassword"
          placeholder="Password"
          onKeyUp={handleInput2}
        />
        <label htmlFor="floatingPassword">Re-enter Password</label>
      </div>
    </div>
  );
}
