import shopData from "@/components/Shop/shopData";
import ShopDetails from "@/components/ShopDetails";
import { notFound } from "next/navigation";

export default async function ProductDetailPage({ params }) {
  const { slug } = await params;
  const product = shopData.find((item) => item.slug === slug);

  if (!product) return notFound();

  return <ShopDetails product={product} />;
}
