import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { db } from "@/lib/drizzle";
import { Comments } from "@/lib/schema";
import { revalidatePath } from "next/cache";

export default async function CommentsCard() {
  const comments = await db.select().from(Comments).all();

  async function SendComment(formData: FormData) {
    "use server";
    const comment = formData.get("comment") as string;
    await db.insert(Comments).values({ text: comment }).run();
    revalidatePath("/4-server-actions");
  }

  async function deleteAll() {
    "use server";
    await db.delete(Comments).run();
    revalidatePath("/4-server-actions");
  }

  return (
    <main>
      <Card>
        <CardHeader>
          <h1 className="text-2xl font-bold">Comments</h1>
        </CardHeader>
        <CardContent>
          <form className="flex w-full max-w-sm items-center space-x-2 " action={SendComment}>
            <Input type="text" name="comment" />
            <Button variant="outline" type="submit">
              Send
            </Button>
          </form>
        </CardContent>

        <CardFooter>
          <form className="space-x-5 " action={deleteAll}>
            <Button variant="destructive" type="submit">
              Delete All
            </Button>
          </form>
        </CardFooter>
      </Card>
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
