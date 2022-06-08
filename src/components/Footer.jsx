import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="w-full mt-24 bg-slate-900 text-gray-300 py-1 px-2">
      <div className="max-w-[1240px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-6 py-8 border-b-2 border-gray-600">
          <div>
            <h6 className="font-bold pt-2">SOLUTIONS</h6>
            <ul>
              <li className="py-1">Marketing</li>
              <li className="py-1">Analytics</li>
              <li className="py-1">Commerce</li>
              <li className="py-1">Data</li>
              <li className="py-1">Cloud</li>
            </ul>
          </div>
          <div>
            <h6 className="font-bold pt-2">SUPPORT</h6>
            <ul>
              <li className="py-1">Pricing</li>
              <li className="py-1">Documentation</li>
              <li className="py-1">Commerce</li>
              <li className="py-1">API Status</li>
            </ul>
          </div>
          <div>
            <h6 className="font-bold pt-2">COMPANY</h6>
            <ul>
              <li className="py-1">About</li>
              <li className="py-1">Blog</li>
              <li className="py-1">Jobs</li>
              <li className="py-1">Press</li>
              <li className="py-1">Partners</li>
            </ul>
          </div>
          <div>
            <h6 className="font-bold pt-2">LEGAL</h6>
            <ul>
              <li className="py-1">Privacy</li>
              <li className="py-1">Policies</li>
              <li className="py-1">Terms</li>
            </ul>
          </div>
          <div className="col-span-2 pt-8 md:pt-2">
            <p className="uppercase font-bold">Subscribe to our newsletter</p>
            <p className="py-4">
              The latest news, articles, and resources, sent to your inbox
              weekly.
            </p>
            <form className="flex flex-col sm:flex-row">
              <input
                className="w-full p-2 mr-4  rounded-md mb-4"
                type="email"
                placeholder="Enter email"
              />
              <button className="p-2 mb-4">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-2  p-2 text-gray-500 sm:flex-row sm:justify-between">
          <p>2022 Workflow, LLP. All rights reserved</p>
          <div className="flex justify-between items-center gap-8">
            <FaFacebook />
            <FaInstagram />
            <FaTwitter />
            <FaGithub />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
