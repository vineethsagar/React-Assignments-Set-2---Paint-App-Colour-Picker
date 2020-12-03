import React, { useState } from "react";
import "../styles/Child.css";
const Selector = (props) => {
  const [SelectionStyle, updateSelectionStyle] = useState({ background: "" });

  return (
    <div
      className="fix-box"
      style={SelectionStyle}
      onClick={() => props.applyColor(updateSelectionStyle)}
    >
      <h2 className="subheading">Selection</h2>
    </div>
  );
};
export default Selector;
