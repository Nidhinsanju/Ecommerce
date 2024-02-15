"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Options() {
  const router = useRouter();
  useEffect(() => {
    const CustomerID = localStorage.getItem("CustomerID");
    const token = localStorage.getItem("token");
  }, []);

  return (
    <div className="max-w-sm mx-auto mt-52  ">
      <div className="rounded-lg shadow border-grey-200 p-8 ">
        <ul role="list" className="divide-y divide-white">
          <li className="py-4 ">
            <a href="/account/accountdetail">
              <h3 className="text-sm font-medium text-white p-1 truncate hover:bg-white hover:text-black hover:rounded-lg hover:w-36 hover:p-1">
                Password Update
              </h3>
            </a>
          </li>
          <li className="py-4  ">
            <a href="/account/questions" className="mt-3">
              <h3 className="text-sm font-medium p-1 text-white truncate  hover:bg-white hover:text-black hover:rounded-lg hover:w-10 hover:p-1">
                FAQ{" "}
              </h3>
            </a>
          </li>
        </ul>
      </div>
      <button
        onClick={() => {
          localStorage.removeItem("customerID");
          localStorage.removeItem("token");
          router.push("/login/");
        }}
        type="button"
        className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
      >
        Log-out
      </button>
    </div>
  );
}
