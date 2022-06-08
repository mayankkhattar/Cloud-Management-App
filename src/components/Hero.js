import {
  CloudUploadIcon,
  DatabaseIcon,
  PaperAirplaneIcon,
  ServerIcon,
} from "@heroicons/react/solid";
import React from "react";
import bgImg from "../assests/cyber-bg.png";

export const Hero = () => {
  return (
    <div
      name="home"
      className="w-full h-screen bg-zinc-200 flex flex-col justify-between"
    >
      <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
        <div className="flex flex-col justify-center md:items-start w-full px-2 py-8">
          <p className="text-2xl">Unique Sequencing & Production</p>
          <h1 className="text-5xl py-3 font-bold md:text-7xl">
            Cloud Management
          </h1>
          <p className="text-2xl">This is our tech brand.</p>
          <button className="py-3 px-6 my-4 sm:w-[60%]">Get Started</button>
        </div>
        <div>
          <img className="h-[70%] md:h-full" src={bgImg} alt="/" />
        </div>
        <div className="absolute flex flex-col py-8 bottom-[3%] mx-2 bg-zinc-200 border border-slate-300 rounded-xl text-center shadow-xl transform md:left-1/2 md:-translate-x-1/2">
          <p>Data Science</p>
          <div className="flex justify-between flex-wrap px-4">
            <p className="flex px-4 py-2 text-slate-500">
              <CloudUploadIcon className="h-6 text-indigo-600" /> App Security
            </p>
            <p className="flex px-4 py-2 text-slate-500">
              <DatabaseIcon className="h-6 text-indigo-600" /> Dashboard Design
            </p>
            <p className="flex px-4 py-2 text-slate-500">
              <ServerIcon className="h-6 text-indigo-600" /> Cloud Data
            </p>
            <p className="flex px-4 py-2 text-slate-500">
              <PaperAirplaneIcon className="h-6 text-indigo-600" /> API Services
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
