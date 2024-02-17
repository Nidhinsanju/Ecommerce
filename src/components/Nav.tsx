"use client";
import React from "react";
import { Items } from "../contents/nav";
import { Url } from "next/dist/shared/lib/router/router";
import { useState } from "react";
import Link from "next/link";
interface Nav {
  title: String;
  link: Url;
  key?: any;
}

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="flex items-center text-white justify-between flex-wrap p-6">
      <div className="block lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
        >
          <svg
            className={`fill-current h-3 w-3 ${isOpen ? "hidden" : "block"}`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
          <svg
            className={`fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
          </svg>
        </button>
      </div>
      <div
        className={`w-full block flex-grow  lg:flex lg:items-center lg:w-full ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="text-sm lg:flex-grow">
          <div className="flex md:flex-row justify-evenly flex-wrap items-center mx-7 sm:flex-col">
            {Items.map((data: Nav) => (
              <Link
                className="text-white font-extrabold text-lg  tracking-wider sm:mx-4	"
                href={data.link}
                key={data.key}
              >
                {data.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
