import type { Metadata } from "next";
import DesignSystemClient from "./DesignSystemClient";

export const metadata: Metadata = {
  title: "Design System | Yamparala Rahul",
  description: "A live catalog of the UI primitives used across the portfolio homepage.",
};

export default function DesignSystemPage() {
  return <DesignSystemClient />;
}
