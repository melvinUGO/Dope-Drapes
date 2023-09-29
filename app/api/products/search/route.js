import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import { NextResponse } from "next/server";

export async function GET(request) {
  await mongooseConnect();
  const { searchParams } = new URL(request.url);
  const phrase = searchParams.get("search");

  const products = await Product.find({
    $or: [
      { title: { $regex: phrase, $options: "i" } },
      { description: { $regex: phrase, $options: "i" } },
    ],
  });

  return NextResponse.json(products);
}
