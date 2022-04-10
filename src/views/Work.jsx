import React from "react";
import CardWork from "../components/cards/CardWork";

export default function Work() {
  return (
    <div className="bg-bgdark">
      <div className="font-paragraph text-colortitle font-bold pl-9 pt-16 text-3xl">
        <h1>My Recent Projects</h1>
      </div>
      <CardWork />
    </div>
  );
}
