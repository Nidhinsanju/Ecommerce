import { NextResponse } from "next/server";
import Product from "@/models/Products";
import Deals from "@/models/Deals";
import connect from "@/libs/db";
import Cart from "@/models/Cart";
import User from "@/models/User";

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

export const getDeals = async () => {
  try {
    await connect();
    const productDeals = await Deals.find();
    return NextResponse.json(productDeals, { status: 200 });
  } catch (error) {
    console.log("error fetch data", error);
    return NextResponse.json(
      { error: "Internal server error" },
      {
        status: 500,
      }
    );
  }
};

export const getCart = async () => {
  try {
    await connect();
    const cart = await Cart.find();
    return NextResponse.json(cart, { status: 200 });
  } catch (error) {
    console.log("error fetch data", error);
    return NextResponse.json(
      { error: "Internal server error" },
      {
        status: 500,
      }
    );
  }
};
