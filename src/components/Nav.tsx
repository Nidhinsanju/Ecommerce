import React from "react";
import { Items } from "../contents/nav";
import Link from "next/link";
import { Url } from "next/dist/shared/lib/router/router";

interface Nav {
  title: String;
  link: Url;
}

export default async function Nav() {
  return (
    <div className="flex flex-row justify-evenly items-center m-7">
      {Items.map((data: Nav) => (
        <Link
          className="text-white font-extrabold text-lg  tracking-wider	"
          href={data.link}
        >
          {data.title}
        </Link>
      ))}
    </div>
  );
}
