import type { Metadata } from "next";
import AboutPage from "./aboutpage";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Founded in 2013 by Mr. Anmol Agarwal, Bajrang Plywood is North India's trusted supplier of premium interior materials.",
};

export default function Page() {
  return <AboutPage />;
}