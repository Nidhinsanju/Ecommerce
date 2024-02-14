import ButtonPress from "@/components/buttonPress";
import { getCart } from "@/utils/Products";
import { useRouter } from "next/navigation";

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
  if (false) {
    return (
      <div className="text-white m-10 flex flex-wrap justify-center">
        {data?.map((products: Cart) => {
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
                  <ButtonPress ProductID={products.ProductID} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  } else {
    return <div className="bg-black text-white">Log-in to See your Cart</div>;
  }

  async function getCardData() {
    const cardData = await getCart();

    if (!cardData.ok) {
      throw new Error("failed to get cart data");
    }
    return cardData.json();
  }
}
