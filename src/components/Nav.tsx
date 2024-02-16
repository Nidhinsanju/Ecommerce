"use client";
import React, { useState } from "react";
import { Items } from "../contents/nav";
import Link from "next/link";
import { Url } from "next/dist/shared/lib/router/router";

interface Nav {
  title: string;
  link: Url;
  key?: any;
}

const ResponsiveNav: React.FC = () => {
  // State to control the visibility of the dropdown links
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  return (
    <div
      className="flex flex-col md:flex-row flex-wrap
     justify-center  space-evenly items-center m-5 "
    >
      <button
        className="text-white font-extrabold text-lg tracking-wider md:hidden"
        onClick={toggleDropdown}
      >
        Menu
      </button>

      <div
        className={`sm:flex md:flex-col ${
          isDropdownVisible ? "flex" : "hidden"
        }`}
      >
        {Items.map((data: Nav) => (
          <Link
            href={data.link}
            key={data.key}
            className="text-white font-extrabold text-lg tracking-wider  justify-evenly items-center m-2 hover:text-gray-300"
          >
            {data.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ResponsiveNav;
