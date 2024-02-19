import Cart from "@/models/Cart";
import connect from "@/libs/db";
import { NextResponse } from "next/server";
import Products from "@/models/Products";

interface Cart {
  _id: string;
  customerID: number;
  products: string[];
}

export async function PUT(request: Request) {
  const res = await request.json();
  const { CustomerID, ProductID } = res;
  if (!CustomerID || !ProductID) {
    return NextResponse.json("Invalid Request", { status: 304 });
  }
  try {
    await connect();
    const cart = await Cart.findOne({ customerID: CustomerID });
    const productObjectIds = await Products.find(
      { ProductID: { $in: ProductID } },
      "_id"
    );
    cart.products.push(...productObjectIds);
    await cart.save();
    return NextResponse.json(cart, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json("Internal server error", { status: 500 });
  }
}

export async function POST(request: Request) {
  const res = await request.json();
  const { CustomerID } = res;
  try {
    await connect();
    const cart = await Cart.findOne({ customerID: CustomerID });
    const productsData = await Products.find({ _id: { $in: cart.products } });
    return NextResponse.json(productsData, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      {
        status: 500,
      }
    );
  }
}
