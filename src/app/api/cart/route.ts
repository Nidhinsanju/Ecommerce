import Cart from "@/models/Cart";
import connect from "@/libs/db";
import { NextResponse } from "next/server";
import { NextApiRequest, NextApiResponse } from "next";
import Products from "@/models/Products";

export async function POST(request: Request) {
  const res = await request.json();
  const { CustomerID, ProductID } = res;

  async function saveCartToDB(newCart: Object) {
    try {
      const savedCart = await Cart.create(newCart);
      return NextResponse.json(savedCart);
    } catch (error) {
      console.log(error);
      return new NextResponse("error", { status: 501 });
    }
  }

  try {
    await connect();
    const cart = await Cart.findOne({ customerID: CustomerID });
    if (cart && ProductID) {
      const productObjectIds = await Products.find(
        { ProductID: { $in: ProductID } },
        "_id"
      );

      cart.products.push(...productObjectIds);
      await cart.save();
      console.log("Products added to the cart successfully");
      return NextResponse.json(cart, { status: 200 });
    }

    if (cart) {
      if (cart.products.length > 0) {
        return NextResponse.json(cart, { status: 200 });
      } else {
        return NextResponse.json("Add items to create Cart", { status: 201 });
      }
    }

    if (!ProductID) {
      return NextResponse.json("No product selected", { status: 400 });
    }

    if (!cart) {
      const newCart = {
        customerID: CustomerID,
        products: [],
      };
      const savedCart = await saveCartToDB(newCart);
      const statusCode: any = savedCart.status;
      return NextResponse.json(statusCode);
    }
  } catch (error) {
    return NextResponse.json("Internal server error", { status: 500 });
  }
}
