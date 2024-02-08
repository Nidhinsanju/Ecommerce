//This should act as a API Which gets the data from the client
//and send the data to the server in the folder

import connect from "@/libs/db";
import Sellitem from "@/models/SellItems";
import { NextResponse } from "next/server";
import User from "@/models/User";

export async function GET() {
  try {
    await connect();

    const item = await Sellitem.find();
    return NextResponse.json(item, { status: 200 });
  } catch (errror) {
    return NextResponse.json(
      { errror: "internal server error" },
      { status: 500 }
    );
  }
}

export async function POST() {
  try {
    await connect();
    const user = await User.find();
    // const cart = await Cart.find();
    return NextResponse.json({ status: 200 });
  } catch (error) {
    return NextResponse.json("Internal server error", { status: 500 });
  }
}
