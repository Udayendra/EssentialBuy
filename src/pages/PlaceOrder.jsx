import React, { useContext, useState } from "react";
import Title from "../components/Title";
import CartTotal from "../components/CartTotal";
import { assets } from "../assets/frontend_assets/assets";
import { ShopContext } from "../context/ShopContext";

const PlaceOrder = () => {
  const [method, setMethod] = useState("cash");
  const {navigate} = useContext(ShopContext);

  return (
    <div className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t">
      {/* left side  */}
      <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
        <div className="test-xl sm:text-2xl my-3">
          <Title text1={"DELIVERY"} text2={"INFORMATION"} />
        </div>
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="First name"
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            name=""
            id=""
          />
          <input
            type="text"
            placeholder="Last name"
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            name=""
            id=""
          />
        </div>
        <input
          type="email"
          placeholder="Enter you email"
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          name=""
          id=""
        />
        <input
          type="email"
          placeholder="Enter address"
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          name=""
          id=""
        />
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="Enter city"
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            name=""
            id=""
          />
          <input
            type="text"
            placeholder="Enter state"
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            name=""
            id=""
          />
        </div>
        <div className="flex gap-3">
          <input
            type="number"
            placeholder="Enter Pincode"
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            name=""
            id=""
          />
          <input
            type="text"
            placeholder="Enter country"
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            name=""
            id=""
          />
        </div>
        <input
          type="number"
          placeholder="Enter phone nuber"
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          name=""
          id=""
        />
      </div>

      {/* right side  */}
      <div className="mt-8">
        <div className="mt-8 min-w-80">
          <CartTotal />
        </div>
        <div className="mt-12">
          <Title text1={"PAYMENT"} text2={"METHOD"} />
          <div className="flex gap-3 flex-col xl:flex-row">
            <div
              onClick={() => setMethod("stripe")}
              className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  method === "stripe" ? "bg-green-500" : ""
                } `}
              ></p>
              <img src={assets.stripe_logo} className="h-5 mx-2" alt="" />
            </div>
            <div
              onClick={() => setMethod("razorpay")}
              className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  method === "razorpay" ? "bg-green-500" : ""
                } `}
              ></p>
              <img src={assets.razorpay_logo} className="h-5 mx-2" alt="" />
            </div>
            <div
              onClick={() => setMethod("cash")}
              className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  method === "cash" ? "bg-green-500" : ""
                } `}
              ></p>
              <p className="text-gray-500 text-sm font-medium mx-2">
                CASH ON DELIVERY
              </p>
            </div>
          </div>
          <div className="w-full text-end mt-8">
            <button onClick={()=>navigate("/orders")} className="bg-black text-white px-16 py-3 text-sm">
              PLACE ORDER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
