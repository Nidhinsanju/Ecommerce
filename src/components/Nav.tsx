import React from "react";
import { Items } from "../contents/nav";
import Link from "next/link";
import { Url } from "next/dist/shared/lib/router/router";
import classNames from "classnames";

interface Nav {
  title: String;
  link: Url;
  key?: any;
}

export default async function Nav() {
  return (
    <div className="flex md:flex-row justify-evenly items-center m-7 sm:flex-col">
      {Items.map((data: Nav) => (
        <Link
          className="text-white font-extrabold text-lg  tracking-wider	"
          href={data.link}
          key={data.key}
        >
          {data.title}
        </Link>
      ))}
    </div>
  );
}
