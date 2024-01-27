import { getProducts } from "@/utils/Products";
import { Button } from "@/components/ui/button";

import ButtonPress from "@/components/buttonPress";

interface Products {
  Title: String;
  Description: String;
  Price: Number;
  ProductID: Number;
  Imagelink: string;
  Stock: Boolean;
}

async function Page() {
  const data = await getData();

  return (
    <div>
      <main className="flex flex-wrap flex-row gap-8 items-center justify-center 	 my-10">
        {data?.map((data1: Products) => {
          return (
            <div
              key={data1.Imagelink}
              className=" h-60 bg-white w-1/5 flex  rounded-xl shadow-gray-400 shadow-sm justify-content "
            >
              <div className="h-full w-2/5">
                <img
                  src={data1.Imagelink}
                  className="rounded-l-xl h-full w-full "
                />
              </div>
              <div className=" h-full w-2/4 flex flex-col pl-5 items-center justify-center ">
                <div className=" h-3/5 w-full  flex flex-col justify-center">
                  <h1 className="font-extrabold text-lg font-serif">
                    {data1.Title}
                  </h1>
                  <h3 className=" text-sm size ">{data1.Description}</h3>
                  <div className="flex gap-x-5 text-sm  flex-row ">
                    <h1>₹ {data1.Price.toString()}-/Rs</h1>
                  </div>
                </div>
                <div className=" h-1/5 w-full  ">
                  <ButtonPress ProductID={data1.ProductID} />
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

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
