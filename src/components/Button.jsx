import React, { useContext } from "react";
import { Toggle } from "../store/ContextStore";

export default function Button() {
  const { enable } = useContext(Toggle);
  let disabled = "disabled";
  const { color } = useContext(Toggle);
  let en1 = false;
  let enable2 = () => {
    for (let i = 0; i < color.length; i++) {
      if (color[i] === 0) {
        return;
      }
    }
    en1 = true;
  };
  enable2();

  return (
    <div className="butt-cont">
      <button
        type="submit"
        className="btn btn-primary"
        {...(enable === "true" || !en1 ? { disabled } : "")}
      >
        Reset
      </button>
    </div>
  );
}
