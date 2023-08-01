import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";
import { db } from "@/lib/drizzle";
import { Likes } from "@/lib/schema";
import { sql } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export default async function LikesCard() {
  const likes = (
    await db
      .select({ count: sql<number>`count(*)` })
      .from(Likes)
      .all()
  )[0].count;

  async function likePost() {
    "use server";
    await db.insert(Likes).values({ id: undefined }).run();

    revalidatePath("/4-server-actions");
  }

  return (
    <main>
      <Card>
        <CardHeader>
          <h1 className="text-2xl font-bold">Likes</h1>
        </CardHeader>
        <CardContent>
          <form className="space-x-5 " action={likePost}>
            <span className="text-xl">{likes}</span>
            <Button variant="outline" type="submit">
              Like
            </Button>
          </form>
        </CardContent>
      </Card>
    </main>
  );
}
