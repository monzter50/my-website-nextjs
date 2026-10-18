import { notFound } from "next/navigation";

// Unknown paths under a locale render the themed (info)/not-found page.
export default function CatchAll() {
  notFound();
}
