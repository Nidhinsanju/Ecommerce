"use client";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { customerID } from "@/contents/Url";
import { token } from "@/contents/Url";
import { LoginButton } from "./buttonLogin";

export default function Options() {
  const router = useRouter();
  if (token !== undefined && customerID !== undefined) {
    return (
      <div className="max-w-sm mx-auto mt-52  ">
        <div className="rounded-lg shadow border-grey-200 p-8 ">
          <ul role="list" className="divide-y divide-white">
            <li className="py-4 ">
              <a href="/Account/accountdetail">
                <p className="text-sm font-medium text-white p-1 truncate hover:bg-white hover:text-black hover:rounded-lg hover:w-36 hover:p-1">
                  Password Update
                </p>
              </a>
            </li>
            <li className="py-4  ">
              <a href="/Account/questions" className="mt-3">
                <p className="text-sm font-medium p-1 text-white truncate  hover:bg-white hover:text-black hover:rounded-lg hover:w-10 hover:p-1">
                  FAQ
                </p>
              </a>
            </li>
          </ul>
        </div>
        <button
          onClick={() => {
            typeof window !== "undefined"
              ? localStorage.removeItem("customerID")
              : null;
            typeof window !== "undefined"
              ? localStorage.removeItem("token")
              : null;
            router.push("/login/");
          }}
          type="button"
          className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          Log-out
        </button>
      </div>
    );
  } else {
    return (
      <div className="bg-black  rounded-lg shadow border-grey-200  text-white max-w-sm mx-auto mt-52 p-8">
        <div className="flex-row flex-wrap m-3  ">
          Log-in to See your Account settings
        </div>
        <LoginButton />
      </div>
    );
  }
}
