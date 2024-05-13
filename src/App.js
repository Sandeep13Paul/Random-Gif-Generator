import React from "react";
import Random from "./components/Random";
import Tags from "./components/Tags";

export default function App() {
  return (
    <div className="w-full h-screen flex flex-col background items-center overflow-x-hidden">
      <h1 className="text-4xl font-bold bg-white rounded-lg w-11/12 mt-[40px] py-2 px-3 text-center">RANDOM GIFS</h1>
      <div className="flex flex-col w-full items-center gap-y-10 mt-[30px]">
        <Random />
        <Tags />
      </div>
    </div>
  );
}
