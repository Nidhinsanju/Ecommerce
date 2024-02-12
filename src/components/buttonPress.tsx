"use client";

import axios from "axios";
import { BACKEND_URL } from "@/contents/Url";
import { useEffect, useState } from "react";

export default function ButtonPress({ ProductID }: { ProductID: Number }) {
  const [customerID, setcustomerID] = useState(Number);
  useEffect(() => {
    const customerID = localStorage.getItem("CustomerID");
    setcustomerID(Number(customerID));
  }, []);

  return (
    <div className="mt-1">
      <button
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 max-h-12 min-h-7  min-w-10  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 flex-wrap"
        onClick={() => addToCart(ProductID, customerID)}
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
  );
}

async function addToCart(productID: Number, customerID: any) {
  const res = await axios.post(BACKEND_URL + "/api/cart", {
    ProductID: productID,
    Customerid: customerID,
  });
  if (res) {
    console.log(res);
  }
}
