import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./configs/schema.ts", 
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://neondb_owner:npg_8hGCqnBYm1Hx@ep-young-surf-a10bmapd-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require",
  },
});
