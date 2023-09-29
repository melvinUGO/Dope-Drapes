import User from "@/models/User";
import { NextResponse } from "next/server";

export async function POST(request) {
  const body = await request.json();
  const { email, password } = body;

  if (!email || !password) {
    return NextResponse("Please provide email and password");
  }

  const user = await User.findOne({ email });
  if (!user) {
    return NextResponse("Invalid Credentials");
  }

  const isPasswordCorrect = await user.comparePassword(password);
  if (!isPasswordCorrect) {
    return NextResponse("Invalid Credentials");
  }

  const token = user.createJWT();

  return NextResponse.json({
    id: user._id,
    email: user.email,
    lastName: user.lastName,
    name: user.name,
    token,
  });
}
