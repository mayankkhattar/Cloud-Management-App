import React from "react";

export const About = () => {
  return (
    <div name="about" className="w-full py-32">
      <div className="text-center max-w-[1240px] mx-auto">
        <h2 className="text-4xl font-bold px-2 sm:text-5xl">
          Trusted by developers across the world
        </h2>
        <p className="text-2xl text-gray-500 py-6 px-2 sm:text-3xl">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam quo
          voluptates repellendus earum sequi quis placeat, tempora voluptatum!
          Eaque, autem.
        </p>
        <div className="grid md:grid-cols-3 gap-3 px-2">
          <div className="border py-8 shadow-xl rounded-xl">
            <p className="text-5xl font-bold text-indigo-500 sm:text-6xl">
              100%
            </p>
            <p className="text-gray-400 mt-2">Completion</p>
          </div>
          <div className="border py-8 shadow-xl rounded-xl">
            <p className="text-5xl font-bold text-indigo-500 sm:text-6xl">
              24/7
            </p>
            <p className="text-gray-400 mt-2">Delivery</p>
          </div>
          <div className="border py-8 shadow-xl rounded-xl">
            <p className="text-5xl font-bold text-indigo-500 sm:text-6xl">
              100K
            </p>
            <p className="text-gray-400 mt-2">Transactions</p>
          </div>
        </div>
      </div>
    </div>
  );
};
