import React from "react";

function AvailableProduce(props) {
  return (
    <div>
      <h1>{props.month}</h1>
      <ul>
        {props.selection.map((item, index) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default AvailableProduce;
