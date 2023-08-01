import { columns } from "@/components/columns";
import { IssueTable } from "@/components/issue-table";
import { getCurrentWebIssues } from "@/lib/jira";

// This component is marked as async //
export default async function DataFetching() {
  const response = await getCurrentWebIssues();
  return (
    <main>
      <IssueTable columns={columns} data={response?.issues || []} />
    </main>
  );
}
