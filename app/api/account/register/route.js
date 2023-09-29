import User from "@/models/User";
import { NextResponse } from "next/server";

export async function POST(request) {
  const body = await request.json();

  const user = await User.create(body);
  const token = user.createJWT();

  return NextResponse.json({
    id: user._id,
    email: user.email,
    lastName: user.lastName,
    name: user.name,
    token,
  });
}
