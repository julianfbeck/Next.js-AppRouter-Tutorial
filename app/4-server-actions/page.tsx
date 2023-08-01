import LikesCard from "./Likes";
import CommentsCard from "./Comments";
import Link from "next/link";
import { ArrowRightIcon } from "@radix-ui/react-icons";

export default async function ServerAction() {
  return (
    <main className="space-y-10">
      <LikesCard />
      <CommentsCard />
      <Link
        href="/4-server-actions/client-actions"
        className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm font-medium"
      >
        <span className="inline">Client Actions</span>
        <ArrowRightIcon className="ml-1 h-4 w-4" />
      </Link>
    </main>
  );
}
