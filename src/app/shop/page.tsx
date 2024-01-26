import { fetchData } from "../api/fetchDummpy";
import { getProducts } from "../api/route";
import { NextResponse } from "next/server";
import Add from "@/components/Home1";
import ButtonPress from "@/components/buttonPress";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface Products {
  Title: String;
  Description: String;
  Price: Number;
  ProductID: Number;
  Imagelink: string;
  Stock: Boolean;
}

// type ApiResponse = NextResponse<any[]> | NextResponse<{ error: string }>;
async function Page(ProductID: Number) {
  const data = await getData();

  return (
    <div>
      <main>
        {data?.map((data1: Products) => {
          return (
            <div className="bg-zinc-800			 h-60 w-2/5 flex flex-row justify-evenly mb-40">
              <div className=" h-full w-2/5 ">
                <img
                  src={data1.Imagelink}
                  className=" bg-black rounded-full ml-0 mt-3 size-4/6"
                />
                <div className="flex flex-row text-gray-200 mt-2">
                  Availble:Yes
                </div>
              </div>
              <div className=" h-full w-2/4">
                <div className=" h-1/5  w-full text-black font-serif mt-2">
                  Category: {data1.Title}
                </div>
                <div className=" h-2/5 w-full  flex flex-col">
                  <h1 className="font-extrabold font-serif">
                    {data1.Description}
                  </h1>
                  <h3 className="font-bold size mt-1">Men sneakers</h3>
                  <div className="flex gap-x-5 flex-row mt-3">
                    <h1>Price:{data1.Price.toString()}-/Rs</h1>
                  </div>
                </div>
                <div className=" h-1/5 w-full ">
                  <div className="text-black m"></div>
                  <button className="bg-sky-500 rounded-md p-1 mt-2">
                    Buy now{" "}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </main>
    </div>
  );
}
export default Page;

async function getData() {
  const res = await getProducts();

  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
