import { Redis } from "@upstash/redis";
import { NextResponse } from "next/server";

const redis = Redis.fromEnv();

export async function POST() {
  const count = await redis.incr("page_visits");
  return NextResponse.json({ count });
}

export async function GET() {
  const count = (await redis.get<number>("page_visits")) ?? 0;
  return NextResponse.json({ count });
}
