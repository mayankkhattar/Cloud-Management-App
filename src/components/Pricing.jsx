import React from "react";
import PricingBottom from "./PricingBottom";

const Pricing = () => {
  return (
    <div name="pricing" className="w-full py-24 text-white">
      <div className="w-full h-[800px] bg-slate-900 absolute mix-blend-overlay"></div>
      <div className="max-w-[1240px] mx-auto py-12 relative">
        <div className="py-8 text-center text-slate-300">
          <h2 className="text-3xl">PRICING</h2>
          <h3 className="text-5xl text-white font-bold py-8">
            The right price for your research.
          </h3>
          <p className="text-3xl">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores
            consectetur deserunt sapiente repudiandae error. Laudantium.
          </p>
        </div>
        <div className="grid md:grid-cols-2  gap-4">
          <PricingBottom />
          <PricingBottom text="ENTERPRISE" value="$89" />
        </div>
      </div>
    </div>
  );
};

export default Pricing;
