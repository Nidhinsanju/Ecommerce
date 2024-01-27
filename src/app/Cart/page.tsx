import ButtonPress from "@/components/buttonPress";
import { getCart } from "@/utils/Products";

interface Cart {
  Title: String;
  Description: String;
  Price: Number;
  ProductID: any;
  Imagelink: string;
  Stock: Boolean;
}

export default async function Cart() {
  const data = await getCardData();

  return (
    <div className="text-white m-10 flex flex-wrap justify-center">
      {data.map((data1: Cart) => {
        return (
          <div
            key={data1.ProductID}
            className="w-3/6 max-w-72 max-h-96  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-3"
          >
            <img
              className="p-4 rounded-t-lg max-h-48 mx-auto max-w-full"
              src={data1.Imagelink}
              alt="product image"
            />
            <div className="px-4 pb-5 h-44 ">
              <div>
                <h3 className="mt-1 text-xl font-semibold tracking-tight text-gray-900 dark:text-white mb-3">
                  {data1.Title}
                </h3>
                <h5 className="mt-5 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  {data1.Description}
                </h5>
              </div>
              <div className="flex items-center justify-between mt-12">
                <span className="text-3xl font-bold text-gray-900 dark:text-white">
                  $599
                </span>
                <ButtonPress ProductID={data1.ProductID} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

async function getCardData() {
  const cardData = await getCart();

  if (!cardData.ok) {
    throw new Error("failed to get cart data");
  }
  return cardData.json();
}
