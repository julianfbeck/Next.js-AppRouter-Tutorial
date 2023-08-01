"use server";

import { db } from "@/lib/drizzle";
import { Comments } from "@/lib/schema";
import { revalidatePath } from "next/cache";

export async function SendComment(comment: string) {
  await db.insert(Comments).values({ text: comment }).run();
  revalidatePath("/4-server-actions/client-actions");
}
