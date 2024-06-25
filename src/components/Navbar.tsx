import React from "react";
import MobileDrawer from "./MobileDrawer";

const Navbar = () => {
  return (
    <div className=" mx-auto glass fixed inset-x-4 top-3 px-3 py-1">
      <ul className=" flex justify-between items-center  text-sm h-[30px]">
        <li>Profile</li>
        <MobileDrawer />
      </ul>
    </div>
  );
};

export default Navbar;
