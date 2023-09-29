import FeaturedProduct from "@/components/FeaturedProduct";
import ProductsGrid from "@/components/ProductsGrid";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import Setting from "@/models/Setting";
import Link from "next/link";

async function fetchProducts() {
  await mongooseConnect();
  const products = await Product.find({}).limit(6);
  return products;
}

async function fetchFeaturedProduct() {
  await mongooseConnect();
  const featuredProductSetting = await Setting.findOne({
    name: "featuredProductId",
  });
  const featuredProductId = featuredProductSetting.value;
  const featuredProduct = await Product.findById(featuredProductId);
  return featuredProduct;
}

export default async function Home() {
  const products = await fetchProducts();
  const featuredProduct = await fetchFeaturedProduct();

  return (
    <main className="px-[20px] py-[40px]">
      <section>
        <FeaturedProduct product={featuredProduct} />
        <div className="text-center">
          {" "}
          <ProductsGrid products={products} />
          <Link href={"/products"} className="py-5">
            VIEW ALL &rarr;
          </Link>
        </div>
      </section>
    </main>
  );
}
