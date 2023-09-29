import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import { NextResponse } from "next/server";

export async function GET(request) {
  await mongooseConnect();
  const { searchParams } = new URL(request.url);

  const id = searchParams.get("id");

  const product = await Product.findById(id);

  return NextResponse.json(product);
}
