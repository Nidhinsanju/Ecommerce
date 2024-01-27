import { getProducts } from "@/utils/Products";
import { Button } from "@/components/ui/button";

import ButtonPress from "@/components/buttonPress";

interface Products {
  Title: String;
  Description: String;
  Price: Number;
  ProductID: any;
  Imagelink: string;
  Stock: Boolean;
}

async function Page() {
  const data = await getData();

  return (
    <div className="text-white m-10 flex flex-wrap justify-center">
      {data?.map((data1: Products) => {
        return (
          <div
            key={data1.ProductID.toString()}
            className="w-3/6 max-w-72 max-h-96  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-3"
          >
            <img
              className="p-4 rounded-t-lg max-h-48 mx-auto max-w-full"
              src={data1.Imagelink}
              alt="product image"
            />
            <div className="px-4 pb-5 h-44 ">
              <div>
                <h3 className="mt-1 text-xl font-semibold tracking-tight text-gray-900 dark:text-white mb-3  max-h-5 min-h-5">
                  {data1.Title}
                </h3>
                <h5 className="mt-5 text-xl max-h-9 min-h-9 font-semibold tracking-tight text-gray-900 dark:text-white">
                  {data1.Description}
                </h5>
              </div>
              <div className="flex items-center justify-between mt-11 max-h-10 min-h-10">
                <main className="text-2xl font-bold text-gray-900 dark:text-white max-h-10 min-h-10">
                  Rs{data1.Price.toString()}/-
                </main>
                <ButtonPress ProductID={data1.ProductID} />
              </div>
            </div>
          </div>
        );
      })}
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

// <div>
// <main className="flex flex-wrap flex-row gap-8 items-center justify-center 	 my-10">
//   {data?.map((data1: Products) => {
//     return (
//       <div
//         key={data1.ProductID}
//         className=" h-60 bg-white w-1/5 flex  rounded-xl shadow-gray-400 shadow-sm justify-content "
//       >
//         <div className="h-full w-2/5">
//           <img
//             src={data1.Imagelink}
//             className="rounded-l-xl h-full w-full "
//           />
//         </div>
//         <div className=" h-full w-2/4 flex flex-col pl-5 items-center justify-center ">
//           <div className=" h-3/5 w-full  flex flex-col justify-center">
//             <h1 className="font-extrabold text-lg font-serif">
//               {data1.Title}
//             </h1>
//             <h3 className=" text-sm size ">{data1.Description}</h3>
//             <div className="flex gap-x-5 text-sm  flex-row ">
//               <h1>₹ {data1.Price.toString()}-/Rs</h1>
//             </div>
//           </div>
//           <div className=" h-1/5 w-full  ">
//             <ButtonPress ProductID={data1.ProductID} />
//           </div>
//         </div>
//       </div>
//     );
//   })}
// </main>
// </div>
// );
