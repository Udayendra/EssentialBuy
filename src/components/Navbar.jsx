import React, { useContext, useEffect, useState } from "react";
import { assets } from "../assets/frontend_assets/assets";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const menuItem = [
  {
    item: "HOME",
    link: "/",
  },
  {
    item: "COLLECTION",
    link: "/collection",
  },
  {
    item: "ABOUT",
    link: "/about",
  },
  {
    item: "CONTACT",
    link: "/contact",
  },
];

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  const { showSearch, setShowSearch, getCartCount } = useContext(ShopContext);

  const location = useLocation();
  const [underlineStyle, setUnderlineStyle] = useState({
    left: 0,
    width: 0,
  });

  useEffect(() => {
    const activeLink = document.querySelector(".active");
    if (activeLink) {
      const { offsetLeft, offsetWidth } = activeLink;
      setUnderlineStyle({
        left: offsetLeft,
        width: offsetWidth,
      });
    }
  }, [location]);

  return (
    <div className="flex items-center justify-between py-5 lg:my-5 font-medium">
      <Link to={"/"}>
        <img src={assets.logo} alt="" className="w-36" />
      </Link>
      <ul className="hidden sm:flex gap-5 w-auto text-sm font-semibold font-montserrat text-gray-700 relative">
        {menuItem.map((menu, index) => {
          const isActive = location.pathname === menu.link;

          return (
            <NavLink
              key={index}
              to={menu.link}
              className={` ${
                isActive ? "text-gray-900" : ""
              } text-gray-700 hover:text-gray-900 flex flex-col items-center gap-1`}
            >
              <p>{menu.item}</p>
            </NavLink>
          );
        })}
        <span
          className={`absolute -bottom-1 h-[1.7px] rounded-full bg-gray-900 transition-[left,width] duration-300 ease-in-out`}
          style={{
            left: underlineStyle.left,
            width: underlineStyle.width,
          }}
        />
      </ul>
      <div className=" flex items-center gap-6">
        <img
          onClick={() => setShowSearch(true)}
          src={assets.search_icon}
          alt="search"
          className="w-5 cursor-pointer"
        />
        <div className="group relative">
          <Link to={"/login"}>
            <img
              src={assets.profile_icon}
              alt=""
              className="w-5 cursor-pointer"
            />
          </Link>
          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded font-sans">
              <p className="cursor-pointer hover:text-black">My Profile</p>
              <p className="cursor-pointer hover:text-black">Orders</p>
              <p className="cursor-pointer hover:text-black">Logout</p>
            </div>
          </div>
        </div>
        <Link to="/cart" className="relative">
          <img src={assets.cart_icon} alt="cart" className="w-5 min-w-5" />
          <p className="absolute w-4 text-center leading-4 bg-black text-white rounded-full text-[8px] aspect-square right-[-5px] bottom-[-5px]">
            {getCartCount()}
          </p>
        </Link>

        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          className="w-5 cursor-pointer sm:hidden"
          alt=""
        />
      </div>
      {/* Sidebar  */}
      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col text-gray-600 mt-2">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-2 p-3 w-24"
          >
            <img src={assets.dropdown_icon} alt="" className="h-4 rotate-180" />
            <p className="font-sans">Back</p>
          </div>
          {menuItem.map((menu, index) => {
            const isActive = location.pathname === menu.link;
            return (
              <NavLink
                key={index}
                onClick={() => setVisible(false)}
                className={`py-2 pl-10 border font-montserrat ${
                  isActive ? "bg-gray-900 text-white" : ""
                }`}
                to={menu.link}
              >
                {menu.item}
              </NavLink>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
