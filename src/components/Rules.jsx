import React, { useContext } from "react";
import { Toggle } from "../store/ContextStore";

export default function Rules() {
  const { color } = useContext(Toggle);
  const { inp } = useContext(Toggle);
  const rules = [
    "Atleast one capital Letter",
    "Atleast one small Letter",
    "Atleast one special character",
    "Atleast one number",
    "Atleast 8 words",
  ];
  const method = (item, index) => {
    return (
      <li key={item} className={color[index] == 1 ? "color" : ""}>
        {item}
      </li>
    );
  };
  return (
    <div className="rule-cont">
      <ul>{rules.map((item, index) => method(item, index))}</ul>
    </div>
  );
}
