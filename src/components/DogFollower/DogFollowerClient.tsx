"use client";

import dynamic from "next/dynamic";

const DogFollower = dynamic(() => import("./DogFollower"), { ssr: false });

export default function DogFollowerClient() {
  return <DogFollower />;
}
