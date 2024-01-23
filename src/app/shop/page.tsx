import { fetchData } from "../../api/fetchDummpy";
import { getUsers } from "../../api/route";
import { NextResponse } from "next/server";

// type ApiResponse = NextResponse<any[]> | NextResponse<{ error: string }>;
async function Page() {
  const data = await getData();
  console.log(data);
  return <div>hello</div>;
}
export default Page;

async function getData() {
  const res = await getUsers();
  console.log(res);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
