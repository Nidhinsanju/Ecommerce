"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { BACKEND_URL } from "@/contents/Url";
import { useRouter } from "next/navigation";

export default function Signup() {
  const router = useRouter();
  const [username, Setusernmae] = useState("");
  const [password, Setpassword] = useState("");
  const [repeatpassword, Setrepeatpassword] = useState("");

  return (
    <div className="min-w-2/4 max-w-md mx-auto  mt-28 bg-white border border-gray-200 rounded-lg flex flex-col shadow items-center justify-center  p-12 dark:bg-gray-800 dark:border-gray-700">
      <form
        className="space-y-3 w-full  "
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <h5 className="text-xl font-medium text-gray-900 dark:text-white">
          Sign in to our platform
        </h5>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Your email
          </label>
          <input
            type="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            placeholder="mail@gmail.com"
            required
            onChange={(e) => {
              Setusernmae(e.target.value);
            }}
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Your password
          </label>
          <input
            type="password"
            id="password"
            placeholder="••••••••"
            onChange={(e) => {
              Setpassword(e.target.value);
            }}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            required
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Repeat-password{" "}
          </label>
          <input
            type="password"
            id="password"
            placeholder="••••••••"
            onChange={(e) => {
              Setrepeatpassword(e.target.value);
            }}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            required
          />
        </div>
        <button
          onClick={() => {
            submitData();
          }}
          type="submit"
          className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Sign Up
        </button>
        <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
          Exisiting user?
          <a
            href="login/"
            className="text-blue-700 hover:underline pl-2 dark:text-blue-500"
          >
            Log-in
          </a>
        </div>
      </form>
    </div>
  );

  async function submitData() {
    if (!username && !password) {
      alert("No username or password ");
    } else {
      if (password === repeatpassword) {
        const res = await axios.post(BACKEND_URL + "/api/signup", {
          username: username,
          password: password,
        });
        console.log(res);
        if (res.status !== 200) {
          alert("Something went wrong");
        } else {
          const { customerID: id } = res.data.user;
          localStorage.setItem("CustomerID", id);
          router.push("/shop/");
        }
      } else {
        alert("Mismatch of password");
      }
    }
  }
}
