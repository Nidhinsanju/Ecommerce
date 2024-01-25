import { fetchData } from "../../api/fetchDummpy";
import { getProducts } from "../../api/route";
import { NextResponse } from "next/server";


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
        {data.map((data1: Products) => {
          return (
            <div className="m-5">
              <h3 className="italic">{data1.Title} </h3>
              <h4 className="italic	">{data1.Description}</h4>
              <h5>
                <img className="w-36 h-40 " src={data1.Imagelink} />
              </h5>
             
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
