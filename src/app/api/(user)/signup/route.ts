import connect from "@/libs/db";
import User from "@/models/User";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import Cart from "@/models/Cart";

export async function POST(request: Request) {
  const res = await request.json();
  const { username, password } = res;
  try {
    await connect();
    const user = await User.find({ username: username });
    if (user.length === 0) {
      const newUser = {
        username: username,
        password: password,
        customerID: Math.floor(Math.random() * 100 + 1),
      };
      const savedUser = await User.create(newUser);
      const newCart = {
        customerID: newUser.customerID,
        products: [],
      };
      await Cart.create(newCart);
      return NextResponse.json(
        { user: savedUser, message: "saved user" },
        { status: 200 }
      );
    }
    return NextResponse.json("User already exisits");
  } catch (error) {
    console.log(error);
    return NextResponse.json("Internal server error", { status: 500 });
  }
}
