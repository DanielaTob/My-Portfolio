import React from "react";
import AnimationTwo from "../components/AnimationTwo";
import TextAbout from "../components/TextAbout";

export default function About() {
  return (
    <div className="sm:pr-9 pb-30 bg-bgdark grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-flow-col auto-cols-max gap-2">
        <TextAbout />
        <AnimationTwo />
    </div>
  );
}
