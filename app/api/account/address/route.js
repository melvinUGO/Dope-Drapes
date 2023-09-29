import { mongooseConnect } from "@/lib/mongoose";
import Address from "@/models/Address";
import { NextResponse } from "next/server";

export async function POST(request) {
  await mongooseConnect();
  const body = await request.json();
  const { userId, name, email, state, number, address } = body;
  const accAddress = await Address.create({
    userId,
    name,
    email,
    state,
    number,
    address,
  });

  return new NextResponse("ok");
}

export async function GET(request) {
  await mongooseConnect();
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  const address = await Address.findOne({ userId: id });

  if (!address) {
    return new NextResponse("no info");
  }

  return NextResponse.json(address);
}

export async function PUT(request) {
  await mongooseConnect();
  console.log("put");

  const body = await request.json();
  const { userId, name, email, state, number, address } = body;

  const userAddress = await Address.findOne({ userId });
  console.log(name);

  const updatedAddress = await Address.findByIdAndUpdate(userAddress._id, {
    name,
    email,
    state,
    number,
    address,
  });

  return NextResponse.json(updatedAddress);
}
