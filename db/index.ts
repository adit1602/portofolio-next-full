import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import * as authSchema from "./schema/auth";
import * as portfolioSchema from "./schema/portfolio";

// Create a PostgreSQL pool
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// Create the Drizzle ORM instance
export const db = drizzle(pool, {
  schema: {
    ...authSchema,
    ...portfolioSchema,
  },
});

export type Database = typeof db;