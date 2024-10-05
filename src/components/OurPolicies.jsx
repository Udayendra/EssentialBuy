import React from "react";
import { assets } from "../assets/frontend_assets/assets";

const policies = [
  {
    image: assets.exchange_icon,
    title: "Easy Exchange Plocy",
    text: "We offer hassle free exchange policy",
  },
  {
    image: assets.quality_icon,
    title: "7 Days Return Plocy",
    text: "We Provide 7 days free return policy",
  },
  {
    image: assets.support_img,
    title: "Best Customer Support",
    text: "We provide 24/7 customer support",
  },
];

const OurPolicies = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700">
      {policies.map((item, index) => (
        <div key={index}>
          <img src={item.image} className="w-12 m-auto mb-5" alt="" />
          <p className="font-semibold">{item.title}</p>
          <p className="text-gray-400">{item.text}</p>
        </div>
      ))}
    </div>
  );
};

export default OurPolicies;
