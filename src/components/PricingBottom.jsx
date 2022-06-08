import { CheckIcon } from "@heroicons/react/outline";
import React from "react";

const PricingBottom = ({ text = "STANDARD", value = "INR 490" }) => {
  return (
    <div className="bg-white text-slate-900 rounded-2xl shadow-2xl m-4 p-8">
      <span className="px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm">
        {text}
      </span>
      <div>
        <p className="text-6xl font-bold py-4 flex">
          {value}
          <span className="text-xl flex flex-col justify-end">/mo</span>
        </p>
      </div>
      <p className="py-8 text-2xl text-slate-500">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius,
        accusantium.
      </p>
      <div className="text-2xl">
        <p className="flex py-4">
          <CheckIcon className="w-8 mr-5 text-green-600" />
          Lorem ipsum dolor sit amet.
        </p>
        <p className="flex py-4">
          <CheckIcon className="w-8 mr-5 text-green-600" />
          Lorem ipsum dolor sit amet.
        </p>
        <p className="flex py-4">
          <CheckIcon className="w-8 mr-5 text-green-600" />
          Lorem ipsum dolor sit amet.
        </p>
        <p className="flex py-4">
          <CheckIcon className="w-8 mr-5 text-green-600" />
          Lorem ipsum dolor sit amet.
        </p>
        <p className="flex py-4">
          <CheckIcon className="w-8 mr-5 text-green-600" />
          Lorem ipsum dolor sit amet.
        </p>
        <button className="w-full py-4 my-4">Get Started</button>
      </div>
    </div>
  );
};

export default PricingBottom;
