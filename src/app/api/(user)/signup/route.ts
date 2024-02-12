import connect from "@/libs/db";
import User from "@/models/User";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const res = await request.json();
  const { username, password } = res;

  async function saveUserToDB(newUser: object) {
    try {
      const savedUser = await User.create(newUser);
      console.log(savedUser);
      return NextResponse.json(savedUser);
    } catch (error) {
      console.log(error);
      return new NextResponse("error", { status: 501 });
    }
  }

  try {
    await connect();
    const user = await User.find({ username: username });
    if (user.length !== 0) {
      return NextResponse.json("User already Exists ", { status: 200 });
    }
    if (user.length === 0) {
      const CustomerID = Math.floor(Math.random() * 100 + 1);
      const newUser = {
        username: username,
        password: password,
        customerID: CustomerID,
      };
      const savedUser = await saveUserToDB(newUser);
      const statusCode: any = savedUser.status;

      return NextResponse.json(statusCode);
    }
  } catch (error) {
    return NextResponse.json("Internal server error", { status: 500 });
  }
}
