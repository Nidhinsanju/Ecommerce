"use client";
import ButtonPress from "@/components/buttonPress";
import { LoginButton } from "@/components/buttonLogin";
import Cookies from "js-cookie";
import { BACKEND_URL } from "@/contents/Url";
import axios from "axios";
import { useEffect } from "react";

interface Cart {
  Title: String;
  Description: String;
  Price: Number;
  ProductID: any;
  Imagelink: string;
  Stock: Boolean;
}

export default async function Cart() {
  const id = Cookies.get("customerID");
  if (id !== undefined) {
    const cartItems = await getCardData(id);
    if (cartItems?.length > 0) {
      return (
        <div className="text-white m-10 flex flex-wrap justify-center">
          {cartItems?.map((products: Cart) => {
            return (
              <div
                key={products.ProductID.toString()}
                className="w-3/6 max-w-72 max-h-96  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-3"
              >
                <img
                  className="p-4 rounded-t-lg max-h-48 mx-auto max-w-full"
                  src={products.Imagelink}
                  alt="product image"
                />
                <div className="px-4 pb-5 h-44 ">
                  <div>
                    <h3 className="mt-1 text-xl font-semibold tracking-tight text-gray-900 dark:text-white mb-3  max-h-5 min-h-5">
                      {products.Title}
                    </h3>
                    <h5 className="mt-5 text-xl max-h-9 min-h-9 font-semibold tracking-tight text-gray-900 dark:text-white">
                      {products.Description}
                    </h5>
                  </div>
                  <div className="flex items-center justify-between mt-11 max-h-10 min-h-10">
                    <main className="text-xl font-bold font-serif text-gray-900 dark:text-white max-h-10 min-h-10">
                      ₹{products.Price.toString()}/-
                    </main>
                    <button
                      type="button"
                      className="text-white bg-blue-700 hover:bg-blue-800 max-h-12 min-h-7  min-w-10  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center me-2 flex-wrap"
                    >
                      <svg
                        className="w-3.5 h-3.5 me-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 18 21"
                      >
                        <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
                      </svg>
                      Buy now
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      );
    } else {
      return (
        <div className="bg-black  rounded-lg shadow border-grey-200 p-8  text-white max-w-sm mx-auto mt-52">
          <div className="flex-row flex-wrap m-3  ">
            Cart is Empty, Add items
            <img
              className="p-1  rounded-lg  rounded-t-lg max-h-48 mx-auto max-w-full"
              src="https://assets.materialup.com/uploads/16e7d0ed-140b-4f86-9b7e-d9d1c04edb2b/preview.png"
              alt="product image"
            />
          </div>
        </div>
      );
    }
  } else {
    return (
      <div className="bg-black  rounded-lg shadow border-grey-200 p-8  text-white max-w-sm mx-auto mt-52">
        <div className="flex-row flex-wrap m-3  ">Log-in to View Your Cart</div>
        <LoginButton />
      </div>
    );
  }
}

async function getCardData(id: Object) {
  const cartData = await axios.post(BACKEND_URL + "/api/cart", {
    CustomerID: id,
  });
  if (!cartData) {
    alert("Somethng went wrong");
  }

  return cartData.data;
}
