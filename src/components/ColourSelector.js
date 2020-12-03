import React from "react";
import "../styles/Child.css";

const ColourSelector = (props) => {
  const { config, selectNextBackground } = props;
  const { background, classname, label } = config;
  return (
    <button
      className={classname}
      onClick={() => selectNextBackground({ background: background })}
    >
      {label}
    </button>
  );
};
export default ColourSelector;
