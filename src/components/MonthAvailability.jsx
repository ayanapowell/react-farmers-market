import React from "react";
import AvailableProduce from "./AvailableProduce";

const produceList = [
  {
    month: "January",
    selection: [
      "Apples",
      "Hazelnuts",
      "Pears",
      "Garlic",
      "Mushrooms",
      "Onions",
      "Potatoes",
      "Turnips"
    ]
  },
  {
    month: "February",
    selection: [
      "Apples",
      "Hazelnuts",
      "Pears",
      "Garlic",
      "Mushrooms",
      "Onions",
      "Potatoes"
    ]
  },
  {
    month: "March",
    selection: [
      "Apples",
      "Hazelnuts",
      "Pears",
      "Rhubarb",
      "Garlic",
      "Mushrooms",
      "Onions",
      "Potatoes"
    ]
  }
];

function MonthAvailability() {
  return (
    <div>
      {produceList.map((item, index) => (
        <AvailableProduce month={item.month} selection={item.selection} />
      ))}
    </div>
  );
}

export default MonthAvailability;
