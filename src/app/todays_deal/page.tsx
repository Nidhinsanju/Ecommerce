import { getDeals } from "@/utils/Products";
import ButtonPress from "@/components/buttonPress";
import Products from "@/models/Products";

interface Products {
  Title: String;
  Price: Number;
  Description: String;
  DealPrice: Number;
  ProductID: Number;
  Imagelink: string;
}

async function Deals() {
  const data = await getItems();
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
                <p className="text-black line-through font-serif text-x">
                  Rs{data1.Price.toString()}/-
                </p>
              </div>
              <div className="flex items-center justify-between mt-5 max-h-10 min-h-8">
                <main className="text-2xl font-bold text-gray-900 dark:text-white">
                  Rs{data1.DealPrice.toString()}/-
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
export default Deals;

async function getItems() {
  const deals = await getDeals();
  if (!deals.ok) {
    throw new Error("Failed to fetch data");
  }
  return deals.json();
}
