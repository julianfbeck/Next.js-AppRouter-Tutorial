import Link from "next/link";

import { cn } from "@/lib/utils";

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      <Link
        href="/"
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        Home
      </Link>
      <Link
        href="/1-app-routing"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        App Routing
      </Link>
      <Link
        href="/2-data-fetching"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Data Fetching
      </Link>
      <Link
        href="/3-caching"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Caching
      </Link>
      <Link
        href="/4-server-actions"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Server actions
      </Link>
    </nav>
  );
}
