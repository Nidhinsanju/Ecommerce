import User from "@/models/User";
import connect from "@/libs/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connect();
    const user = await User.find();

    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    return NextResponse.json("Internal server error", { status: 500 });
  }
}
