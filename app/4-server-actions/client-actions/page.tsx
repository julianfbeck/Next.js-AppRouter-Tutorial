import { Comments } from "@/lib/schema";
import ClientCommentCard from "./ClientComment";
import { db } from "@/lib/drizzle";
import { Card, CardContent } from "@/components/ui/card";

export default async function ClientActions() {
  const comments = await db.select().from(Comments).all();
  return (
    <main className="space-y-10">
      <ClientCommentCard />
      {comments.reverse().map((comment) => (
        <Card key={comment.id} className="mt-2">
          <CardContent>
            <p>{comment.text}</p>
          </CardContent>
        </Card>
      ))}
    </main>
  );
}
