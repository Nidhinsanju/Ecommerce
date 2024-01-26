import React from "react";
import { navItems } from "../contents/nav";
import Link from "next/link";

export default async function Nav() {
  return (
    <div className="flex flex-row justify-evenly items-center m-7">
      {navItems.map((data) => (
        <Link className="text-white" key={data.link} href={data.link}>
          {data.title}
        </Link>
      ))}
    </div>
  );
}
