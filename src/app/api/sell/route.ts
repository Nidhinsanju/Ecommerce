//This should act as a API Which gets the data from the client
//and send the data to the server in the folder

import connect from "@/libs/db";
import Sellitem from "@/models/SellItems";
import { NextResponse } from "next/server";

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
