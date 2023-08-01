"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Issue } from "@/types/jira-issue";
import { Checkbox } from "./ui/checkbox";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export const columns: ColumnDef<Issue>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "fields.summary",
    header: "Title",
  },
  {
    accessorKey: "fields.status.name",
    header: "Status",
  },
  {
    header: "Assignee",
    accessorFn: (row) => row.fields.assignee?.displayName || "",
  },

];
