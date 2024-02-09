import { createContext, useRef, useState } from "react";
// const [text, setText] = useState("password");
export const Toggle = createContext({
  inp: "",
  color: [],
  checkForColor: () => {},
});

const MainContextProvider = ({ children }) => {
  const [color, setColor] = useState([0, 0, 0, 0, 0]);
  const [enable, setEnable] = useState("true");

  const [inp, setInput] = useState("");

  const regex = [/[A-Z]/, /[a-z]/, /[^A-Za-z0-9\s]/, /[\d]/, /.{8,}/];

  const checkForColor = (val) => {
    if (regex[0].test(val)) {
      let newColor = color;
      newColor[0] = 1;
      setColor(newColor);
    } else {
      let newColor = color;
      newColor[0] = 0;
      setColor(newColor);
    }
    if (regex[1].test(val)) {
      let newColor = color;
      newColor[1] = 1;
      setColor(newColor);
    } else {
      let newColor = color;
      newColor[1] = 0;
      setColor(newColor);
    }
    if (regex[2].test(val)) {
      let newColor = color;
      newColor[2] = 1;
      setColor(newColor);
    } else {
      let newColor = color;
      newColor[2] = 0;
      setColor(newColor);
    }
    if (regex[3].test(val)) {
      let newColor = color;
      newColor[3] = 1;
      setColor(newColor);
    } else {
      let newColor = color;
      newColor[3] = 0;
      setColor(newColor);
    }
    if (regex[4].test(val)) {
      let newColor = color;
      newColor[4] = 1;
      setColor(newColor);
    } else {
      let newColor = color;
      newColor[4] = 0;
      setColor(newColor);
    }
  };
  return (
    <Toggle.Provider
      value={{
        enable,
        inp,
        checkForColor,
        color,
        setEnable,
        setInput,
      }}
    >
      {children}
    </Toggle.Provider>
  );
};

export default MainContextProvider;
