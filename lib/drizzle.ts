import { BetterSQLite3Database, drizzle } from "drizzle-orm/better-sqlite3";
import { InferModel } from "drizzle-orm";
import Database from "better-sqlite3";
import { Likes } from "./schema";

const sqlite = new Database("./sqlite.db");
export const db: BetterSQLite3Database = drizzle(sqlite);

export type Like = InferModel<typeof Likes>;
export type NewLike = InferModel<typeof Likes, "insert">;
