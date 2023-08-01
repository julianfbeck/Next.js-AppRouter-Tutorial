import Link from "next/link";

import { cn } from "@/lib/utils";

export default function CachingNavbar() {
  return (
    <nav className={"flex items-center space-x-4 lg:space-x-6"}>
      <Link
        href="/3-caching/static"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Static
      </Link>
      <Link
        href="/3-caching/no-store"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        No-Store
      </Link>
      <Link
        href="/3-caching/revalidate"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Revalidate
      </Link>
    </nav>
  );
}
