import type { Metadata } from "next";
import ProductsPage from "./productpage";

export const metadata: Metadata = {
  title: "Our Products",
  description:
    "Shop plywood, laminates, HDHMR, MDF, hardware, locks & edge banding at Bajrang Plywood Lucknow.",
};

export default function Page() {
  return <ProductsPage />;
}