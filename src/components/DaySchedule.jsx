import React from "react";

function DaySchedule(props) {
  return (
    <div>
      <h2>{props.day}</h2>
      <p>Location: {props.location}</p>
      <p>Hours: {props.hours}</p>
      <p>Booth: {props.booth}</p>
      <hr />
    </div>
  );
}

export default DaySchedule;
