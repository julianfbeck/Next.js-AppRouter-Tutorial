"use client";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useState, useTransition } from "react";
import { SendComment } from "./actions";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function ClientCommentCard() {
  // update state without blocking the ui
  // https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions#usage-with-client-components
  const [isPending, startTransition] = useTransition();
  const [comment, setComment] = useState("");

  return (
    <main>
      <Card>
        <CardHeader>
          <h1 className="text-2xl font-bold">Comments</h1>
        </CardHeader>
        <CardContent>
          <div className="flex w-full max-w-sm items-center space-x-2">
            <Input
              type="text"
              name="comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <Button onClick={() => startTransition(() => SendComment(comment))}>
              Send
            </Button>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
