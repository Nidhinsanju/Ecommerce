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
    <div className="text-white m-7 flex flex-wrap justify-center">
      {data?.map((product: Products) => {
        return (
          <div
            key={product.ProductID.toString()}
            className="relative  w-full md:w-3/6 max-w-72 max-h-96 sm:w-1/2  lg:w-1/4 xl:w-1/5 p-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-3"
          >
            <div className="relative h-48 overflow-hidden">
              <img
                className="p-1 rounded-lg max-h-48 absolute inset-0  w-full object-cover"
                src={product.Imagelink}
                alt="product image"
              />
            </div>
            <div className=" min-h-36 max-h-40  flex-wrap  md:h-auto  ">
              <h3 className="mt-2 text-xl font-semibold mb-2 tracking-tight text-gray-900 dark:text-white   max-h-5 min-h-5">
                {product.Title}
              </h3>
              <p className="mt-5  my-7 text-base  flex-wrap  font-semibold tracking-tight text-gray-900 dark:text-white">
                {product.Description}
              </p>
              <p className="text-black line-through font-serif text-x">
                Rs{product.Price.toString()}/-
              </p>
              <div className="flex justify-between items-center ">
                <span className="text-lg font-serif font-bold text-gray-900 dark:text-white max-h-10 min-h-10 mt-3">
                  ₹{product.Price.toString()}/-
                </span>
                <ButtonPress ProductID={product.ProductID} />
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
