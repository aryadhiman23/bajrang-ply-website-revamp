import type { Metadata } from "next";
import Home from "./home";

export const metadata: Metadata = {
  title: "Home | Bajrang Plywood - Premium Interior Materials in Lucknow",
  description:
    "Premium plywood, laminates, veneers & hardware in Lucknow. 13+ years, 1000+ variants.",
};

export default function Page() {
  return <Home />;
}