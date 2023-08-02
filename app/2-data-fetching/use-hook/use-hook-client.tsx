"use client";

import { columns } from "@/components/columns";
import { IssueTable } from "@/components/issue-table";
import { getCurrentWebIssues } from "@/lib/jira";
import { use } from "react";

const getIssues = async () => {
  const response = await getCurrentWebIssues();
  return response?.issues || [];
};

export default function ClientIssueTable() {
  // experimental use hook
  const issues = use(getIssues());

  return <IssueTable columns={columns} data={issues} />;
}
