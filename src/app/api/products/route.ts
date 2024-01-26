import { NextResponse } from "next/server";
import User from "@/models/User";
import Product from "@/models/Products";
import connect from "@/libs/db";
    

export const getProducts = async () => {
  try {
    await connect();
    const product = await Product.find();
    return NextResponse.json(product, { status: 200 });
  } catch (error) {
    console.log("error fetching data", error);
    return NextResponse.json(
      { error: "internal server error" },
      { status: 500 }
    );
  }
};
