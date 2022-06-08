import React from "react";
import AllInOneBottom from "./AllInOneBottom";

const AllInOne = () => {
  return (
    <div name="platform" className="w-full my-32">
      <div className="max-w-[1240px] mx-auto px-2">
        <h2 className="text-center text-5xl font-bold ">All-In-One-Platform</h2>
        <p className="text-center text-2xl py-8  text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
          sapiente molestiae quasi labore. Qui deleniti laudantium, optio
          obcaecati quis laboriosam.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
          <AllInOneBottom />
          <AllInOneBottom />
          <AllInOneBottom />
          <AllInOneBottom />
          <AllInOneBottom />
          <AllInOneBottom />
          <AllInOneBottom />
          <AllInOneBottom />
        </div>
      </div>
    </div>
  );
};

export default AllInOne;
