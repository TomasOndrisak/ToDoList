import React, { useState } from "react";
import "./ToDo.css";
function ToDo(props) {
  let [value, setValue] = useState(false);

  function switchValue() {
    setValue((value = !value));
  }
  const strikeThrough = { textDecoration: "line-through" };
  return (
    <div>
    <hr/>
      <input
        className="to-do-checkbox"
        onChange={switchValue}
        type="checkbox"
      />
      <p className="to-do-text" style={value ? strikeThrough : null}>
        {props.text}
      </p>
      <hr/>
    </div>
  );
}

export default ToDo;
