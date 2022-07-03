import React from "react";
import AnimationTwo from "../components/AnimationTwo";
import TextAbout from "../components/TextAbout";

export default function About() {
  return (
    <div className="min-h-screen w-full sm:pt-6 md:pt-20 lg:pt-20 xl:pt-20 pb-30 bg-bglight">
        <div className="max-w-screen-2xl mx-auto pt-4">
        <TextAbout />
        <AnimationTwo />
        </div>
    </div>
  );
}
