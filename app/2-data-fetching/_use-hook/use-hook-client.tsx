"use client";

import { columns } from "@/components/columns";
import { IssueTable } from "@/components/issue-table";
import { getWebIssuesFromJiraApi } from "@/lib/jira";
import { use } from "react";

const getIssues = async () => {
  const response = await getWebIssuesFromJiraApi();
  return response?.issues || [];
};

export default function ClientIssueTable() {
  // experimental use hook
  const issues = use(getIssues());

  return <IssueTable columns={columns} data={issues} />;
}
