import type { Metadata } from "next";
import ContactPage from "./contactpage";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Bajrang Plywood in Lucknow — call, WhatsApp, or visit our showroom.",
};

export default function Page() {
  return <ContactPage />;
}