"use client";
import { useEffect, useState } from "react";
import Notfound from "@/app/not-found";

export default function AccoutSettings() {
  const [name, Setname] = useState();
  const [password, Setpassword] = useState("");
  const [newpassword, Setnewpassword] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:3000/api/user", {
        cache: "no-store",
      });
      if (!res) {
        return <Notfound />;
      }

      const data = await res.json();
      return data;
    };

    const userdata = async () => {
      const newData = await fetchData();
      if (newData !== null) {
        const username = newData[0];
        Setname(username.username);
      }
    };
    userdata();
  }, []);

  return (
    <div>
      <main className="bg-slate-50 ">
        {/* <label className="flex m-7 border-2 border-sky-500 w-2/5">
          Username:
          <input defaultValue={name ?? name}></input>
        </label>
        <label className="flex m-7 border-2 border-sky-500 w-2/5">
          Password:
          <input onChange={(e) => Setpassword(e.target.value)}></input>
        </label>
        <label className="flex m-7 border-2 border-sky-500 w-2/5">
          Conform Password:
          <input onChange={(e) => Setpassword(e.target.value)}></input>
        </label>
        <button className="w-4/5">Submit</button> */}
      </main>
    </div>
  );
}
