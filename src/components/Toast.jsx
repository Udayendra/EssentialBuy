// Toast.jsx
import React, { useEffect, useState } from "react";
import { assets } from "../assets/frontend_assets/assets";

const Toast = ({ toast, removeToast }) => {
  const { message, type, id } = toast;
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const timeout = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => removeToast(id), 300);
    }, 3000);
    return () => clearTimeout(timeout);
  }, [id, removeToast]);

  const getStyle = () => {
    switch (type) {
      case "success":
        return "text-green-500 bg-green-50 border-green-500";
      case "error":
        return "text-red-500 bg-red-50 border-red-500";
      default:
        return "text-gray-500 bg-gray-50 border-gray-500";
    }
  };

  return (
    <div
      className={` transform transition-transform duration-300 ease-in-out ${
        isVisible ? "translate-x-0" : "translate-x-full"
      } p-4 mb-4 text-lg rounded-xl border font-normal ${getStyle()}`}
    >
      <div className="flex font-semibold">
        {/* <span className="font-semibold mr-2 capitalize">{type}</span> */}

        {message}
        <button className="pl-5 ml-auto" onClick={() => removeToast(id)}>
          <img src={assets.cross_icon} className="w-3" alt="Close" />
        </button>
      </div>
    </div>
  );
};

export default Toast;
