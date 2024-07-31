import Cart from "@/models/Cart";
import connect from "@/libs/db";
import { NextResponse } from "next/server";
import Products from "@/models/Products";
import { customerID } from "@/contents/Url";

interface Cart {
  _id: string;
  customerID: any;
  products: string[];
  error?: object;
}

export async function PUT(request: Request) {
  const res = await request.json();
  const { CustomerID, ProductID } = res;
  if (!CustomerID || !ProductID) {
    return NextResponse.json("Invalid Request", { status: 404 });
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
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json(
      { message: "Internal server error", error: errorMessage },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  const res = await request.json();
  const { CustomerID } = res;
  try {
    if (CustomerID === null || undefined) {
      return NextResponse.json({ "Invalid Request": res }, { status: 404 });
    } else {
      await connect();
      const cart = await Cart.findOne({ customerID: CustomerID });
      if (cart) {
        const productsData = await Products.find({
          _id: { $in: cart.products },
        });
        return NextResponse.json(productsData, { status: 200 });
      }
      return NextResponse.json("cart not found", { status: 404 });
    }
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json(
      { messsage: "Internal server error", error: errorMessage, CustomerID },
      {
        status: 500,
      }
    );
  }
}
