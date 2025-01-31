import React, { useState } from "react";
import Draggable from "react-draggable";

function Text() {
  const [val, setVal] = useState("Double click to edit.");
  const [editValue, setEditValue] = useState(false);
  return (
    <div className="div">
      <Draggable>
        {editValue ? (
          <input
            onDoubleClick={(e) => setEditValue(false)}
            value={val}
            onChange={(e) => setVal(e.target.value)}
          />
        ) : (
          <h1 onDoubleClick={(e) => setEditValue(true)}>{val}</h1>
        )}
      </Draggable>
    </div>
  );
}

export default Text;
