import User from "@/models/User";
import connect from "@/libs/db";
import { NextResponse } from "next/server";
import { sign } from "jsonwebtoken";

export async function POST(request: Request) {
  const res = await request.json();
  const { username, password } = res;
  try {
    await connect();
    const user = await User.find({ username: username, password: password });
    const token = await generateToken(username);

    if (!token) {
      return NextResponse.json("Token not found", { status: 500 });
    } 

    if (user?.length !== 0 && token) {
      return NextResponse.json({ user, token }, { status: 200 } as const);
    }

    return NextResponse.json("Invalid username or password", { status: 401 });
  } catch (error) {
    return NextResponse.json("Internal server error", { status: 500 });
  }
}

async function generateToken(username: String) {
  const SERCRET = process.env.BACKEND_SECRET || "hias";
  try {
    const user = {
      Username: username,
      number: 123,
    };
    const token = sign(
      { username: user.Username, number: user.number },
      SERCRET,
      { expiresIn: "1h" }
    );
    return token;
  } catch (error) {
    console.log(error, "internal middleware error");
    return null;
  }
}
