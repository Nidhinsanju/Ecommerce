"use client";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "@/contents/Url";
import axios from "axios";

export default function AccoutSettings() {
  const [newpassword, Setnewpassword] = useState("");
  const [conformnewpassword, Setconformnewpassword] = useState("");
  const [name, Setname] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(BACKEND_URL + "/api/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: name,
        }),
      });
      if (!res) {
        return console.log("error");
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
      <form className="max-w-sm mx-auto mt-44 p-1  ">
        <div className="mb-5 text-black">
          <label className="block mb-2 text-sm font-medium text-white dark:text-white">
            Your email
          </label>
          <input
            type="email"
            className="shadow-sm bg-black border  text-white border-red-600  text-sm rounded-lg  block w-full p-2.5 "
            placeholder={name}
            disabled
          />
        </div>
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium  text-white dark:text-white">
            New password
          </label>
          <input
            onChange={(e) => {
              Setnewpassword(e.target.value);
            }}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required
          />
        </div>
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-white dark:text-white">
            Conform New password
          </label>
          <input
            type="password"
            onChange={(e) => {
              Setconformnewpassword(e.target.value);
            }}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required
          />
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
