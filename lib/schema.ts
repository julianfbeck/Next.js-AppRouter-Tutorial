import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export var Likes = sqliteTable("Likes", {
  id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
});

export var Comments = sqliteTable("comments", {
  id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  text: text("text"),
});
