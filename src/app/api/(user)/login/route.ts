import User from "@/models/User";
import connect from "@/libs/db";
import { NextResponse } from "next/server";
import { NextApiRequest, NextApiResponse } from "next";
import generateToken from "../../auth/middleware/route";
export async function POST(request: Request) {
  const res = await request.json();
  const { username, password } = res;
  try {
    await connect();
    const user = await User.find({ username: username, password: password });
    if (user.length !== 0) {
      const token = await generateToken(username);
      console.log(token);
      return NextResponse.json({ user, token }, { status: 200 });
    } else {
      return NextResponse.json("Invalid username or password", { status: 401 });
    }
  } catch (error) {
    return NextResponse.json("Internal server error", { status: 500 });
  }
}
