import { NextResponse, NextRequest } from "next/server";

export default function middleware(req: NextRequest) {
  console.log("now running");
  return NextResponse.next();
}
