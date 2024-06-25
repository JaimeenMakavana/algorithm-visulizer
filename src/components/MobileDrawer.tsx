"use client";
import React, { useState } from "react";
import { SiThealgorithms } from "react-icons/si";

const MobileDrawer = () => {
  const [DrawerToggle, setDrawerToggle] = useState(false);
  return (
    <>
      <li
        className=" inline-flex justify-end items-center gap-2"
        onClick={() => setDrawerToggle(!DrawerToggle)}
      >
        <SiThealgorithms />
        Algorithms
      </li>

      <div
        className={`${
          !DrawerToggle ? " -translate-x-[110%]" : "translate-x-0"
        } fixed inset-0 bg-black transition-all duration-700 h-dvh z-10`}
      >
        <button onClick={() => setDrawerToggle(!DrawerToggle)}>Close</button>
      </div>
    </>
  );
};

export default MobileDrawer;
