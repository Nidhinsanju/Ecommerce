"use client";
import { FormEvent, useState } from "react";

export default function AccoutSettings() {
  const [name, Setname] = useState("");
  const [password, Setpassword] = useState("");
  const [newpassword, Setnewpassword] = useState("");

  return (
    <div>
      <main className="bg-slate-50 ">
        <label className="flex m-7 border-2 border-sky-500 w-2/5">
          Username:
          <input
            onChange={(e) => Setname(e.target.value)}
            className="border-black"
          ></input>
        </label>
        <label className="flex m-7 border-2 border-sky-500 w-2/5">
          Password:
          <input onChange={(e) => Setpassword(e.target.value)}></input>
        </label>
        <label className="flex m-7 border-2 border-sky-500 w-2/5">
          Conform Password:
          <input onChange={(e) => Setpassword(e.target.value)}></input>
        </label>
        <button className="w-4/5">Submit</button>
        <br />
        <button className="w-4/5 ">Logout</button>
      </main>
    </div>
  );
}
