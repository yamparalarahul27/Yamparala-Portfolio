import type { Metadata } from "next";
import WorkModeClient from "./WorkModeClient";

export const metadata: Metadata = {
  title: "Work Mode | Yamparala Rahul",
  robots: { index: false, follow: false },
};

export default function WorkModePage() {
  return <WorkModeClient />;
}
