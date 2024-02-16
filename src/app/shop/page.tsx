import { getProducts } from "@/utils/Products";

import ButtonPress from "@/components/buttonPress";

interface Products {
  Title: String;
  Description: String;
  Price: Number;
  ProductID: any;
  Imagelink: string;
  Stock: Boolean;
}

async function Shop() {
  const data = await getData();

  return (
    <div className="text-white m-7 flex flex-wrap md:flex-row lg:flex-row  justify-center">
      {data?.map((product: Products) => {
        return (
          <div
            key={product.ProductID.toString()}
            className="w-full  max-w-72 max-h-96  sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-3"
          >
            <img
              className="p-4 rounded-t-lg max-h-48 mx-auto max-w-full"
              src={product.Imagelink}
              alt="product image"
            />
            <div className="px-4 pb-5 h-44 ">
              <div>
                <h3 className="mt-1 text-xl font-semibold tracking-tight text-gray-900 dark:text-white mb-3  max-h-5 min-h-5">
                  {product.Title}
                </h3>
                <h5 className="mt-5 text-xl max-h-9  min-h-9 font-semibold tracking-tight text-gray-900 dark:text-white">
                  {product.Description}
                </h5>
              </div>
              <div className="flex items-center  justify-between  mt-11 max-h-10 min-h-10">
                <main className="text-xl font-serif   font-bold  text-gray-900 dark:text-white max-h-10 min-h-10 mt-3">
                  ₹{product.Price.toString()}/-
                </main>
                <ButtonPress ProductID={product.ProductID} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default Shop;

async function getData() {
  const res = await getProducts();

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
