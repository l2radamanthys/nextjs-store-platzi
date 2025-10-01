"use client";
import { useParams } from "next/navigation";
import { useSearchParams } from "next/navigation";

interface ProductPageProps {
  params: {
    handle: string;
  };
  searchParams: {
    id: string;
  };
}

export default function ProductPage(props: ProductPageProps) {
  const params = useParams();
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  console.log(params.handle, id);
  console.log(props);
  return <h1>Product Page</h1>;
}
