import LoadingComponent from "@/components/loading-component";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default async function Home() {
  return (
    <main className="space-y-5">
      <LoadingComponent />

      <Link
        href="/1-app-routing/example-page"
        className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm font-medium"
      >
        <span className="inline"> Navigate to Example page</span>
        <ArrowRightIcon className="ml-1 h-4 w-4" />
      </Link>
    </main>
  );
}
