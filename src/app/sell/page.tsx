"use client";

export default async function Sell() {
  const data = await fetch("http://localhost:3000/api/user", {
    cache: "no-store",
  });
  const newData = await data.json();
  console.log(newData);
  // return await data.json();

  return (
    <div>
      <div></div>
    </div>
  );
}
