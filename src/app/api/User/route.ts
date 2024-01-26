import User from "@/db/models/User";
import connect from "@/db";
import { NextResponse } from "next/server";

export async function GET(NextApiRequest: any) {
  try {
    await connect();
    const user = await User.find();
    console.log(user,"2");
    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json("Internal server error", { status: 500 });
  }
}
