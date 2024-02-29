import { Redis } from "@upstash/redis";

export const redis = new Redis({
  url: "https://us1-fleet-buffalo-37690.upstash.io",
  token: process.env.REDIS_KEY!,
});
