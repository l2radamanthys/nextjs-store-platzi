import { ProductView } from "app/components/Product/ProductView";
import { getProducts } from "app/services/shopify/products";

interface ProductPageProps {
  params: {
    handle: string;
  };
  searchParams: {
    id: string;
  };
}

export default async function ProductPage({ searchParams }: ProductPageProps) {
  const id = searchParams.id;
  const product = await getProducts(id);
  console.log(product);
  return <ProductView product={product[0]} />;
}
