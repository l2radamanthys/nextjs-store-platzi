import { MainProducts } from "app/components/home/MainProducts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Future Wolrd",
  description:
    "Welcome to Future World an e-commerce platform from on the future",
  keywords: ["ecomerce", "future", "world", "tecnology"],
};

export default function Home() {
  return (
    <main>
      <MainProducts />
    </main>
  );
}
