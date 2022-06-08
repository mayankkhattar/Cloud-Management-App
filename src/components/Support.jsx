import { ArrowSmRightIcon, PhoneIcon } from "@heroicons/react/outline";
import { ChipIcon, SupportIcon } from "@heroicons/react/solid";
import React from "react";
import bgImg from "../assests/support.jpg";
const Support = () => {
  return (
    <div name="support" className="w-full mt-24">
      <div className="w-full h-[700px] absolute bg-gray-900/90">
        <img
          className="w-full h-full object-cover mix-blend-overlay"
          src={bgImg}
          alt="/"
        />
      </div>
      <div className="max-w-[1240px] text-white mx-auto relative">
        <div className="py-12 px-4">
          <h2 className="text-2xl text-center text-slate-300 pt-8 sm:text-3xl">
            SUPPORT
          </h2>
          <h3 className="text-center text-3xl font-bold py-6 sm:text-5xl">
            Finding the right team
          </h3>
          <p className="text-slate-300  text-2xl py-4 sm:text-3xl">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam
            nisi earum iste veritatis eos accusantium inventore quisquam sint
            eum similique sit provident recusandae blanditiis ipsa placeat
            voluptate, temporibus quos repellat aliquam, debitis unde quia sunt
            modi. Neque temporibus nesciunt animi.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-16 px-4 text-black pt-32 sm:pt-20">
          <div className="bg-white  border rounded-xl shadow-2xl">
            <div className="p-8">
              <PhoneIcon className="w-16 p-4 bg-indigo-600 text-white rounded-lg -mt-16" />
              <p className="my-6 font-bold text-2xl">Sales</p>
              <p className="text-xl text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi modi odit excepturi mollitia unde. Ad perferendis rem
                vel! Obcaecati, voluptatibus.
              </p>
            </div>
            <div className="bg-slate-100 rounded-b-xl pl-8 py-4">
              <p className="flex items-center text-indigo-600">
                Contact Us <ArrowSmRightIcon className="w-5 ml-2" />
              </p>
            </div>
          </div>
          <div className="bg-white  border rounded-xl shadow-2xl">
            <div className="p-8">
              <SupportIcon className="w-16 p-4 bg-indigo-600 text-white rounded-lg -mt-16" />
              <p className="my-6 font-bold text-2xl">Technical Support</p>
              <p className="text-xl text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi modi odit excepturi mollitia unde. Ad perferendis rem
                vel! Obcaecati, voluptatibus.
              </p>
            </div>
            <div className="bg-slate-100 rounded-b-xl pl-8 py-4">
              <p className="flex items-center text-indigo-600">
                Contact Us <ArrowSmRightIcon className="w-5 ml-2" />
              </p>
            </div>
          </div>
          <div className="bg-white  border rounded-xl shadow-2xl">
            <div className="p-8">
              <ChipIcon className="w-16 p-4 bg-indigo-600 text-white rounded-lg -mt-16" />
              <p className="my-6 font-bold text-2xl">Media Inquires</p>
              <p className="text-xl text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi modi odit excepturi mollitia unde. Ad perferendis rem
                vel! Obcaecati, voluptatibus.
              </p>
            </div>
            <div className="bg-slate-100 rounded-b-xl pl-8 py-4">
              <p className="flex items-center text-indigo-600">
                Contact Us <ArrowSmRightIcon className="w-5 ml-2" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
