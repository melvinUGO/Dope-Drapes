import ProductsGrid from "@/components/ProductsGrid";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import React from "react";

async function fetchProducts() {
  await mongooseConnect();
  const products = await Product.find({});
  return products;
}

const AllProductsPage = async () => {
  const products = await fetchProducts();

  return (
    <section className="text-center p-[20px] py-[40px]">
      <ProductsGrid products={products} />
    </section>
  );
};

export default AllProductsPage;
