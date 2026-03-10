import { config } from "dotenv";

config({ path: ".env.local" });
config(); // Load .env if it exists

import { defineConfig, env } from "prisma/config";

export default defineConfig({
  schema: "prisma/",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    url: env("DIRECT_URL"),
  },
});
