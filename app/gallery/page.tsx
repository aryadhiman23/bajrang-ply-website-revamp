import type { Metadata } from "next";
import GalleryPage from "./gallerypage";

export const metadata: Metadata = {
  title: "Project Gallery",
  description:
    "See real kitchen, wardrobe, living room & office projects completed using Bajrang Plywood materials.",
};

export default function Page() {
  return <GalleryPage />;
}