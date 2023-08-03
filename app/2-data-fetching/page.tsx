import { columns } from "@/components/columns";
import { IssueTable } from "@/components/issue-table";
import { getWebIssuesFromJiraApi } from "@/lib/jira";

// This component is marked as async //
export default async function DataFetching() {
  const response = await getWebIssuesFromJiraApi();
  return (
    <main>
      <IssueTable columns={columns} data={response?.issues || []} />
    </main>
  );
}
//
//
//
//
//
//
//
//
//

// // // Using the old page router
// //
// export const getServerSideProps = async () => {
//   const response = await getWebIssuesFromJiraApi();
//   return {
//     props: {
//       issues: response?.issues || [],
//     },
//   };
// };

// export default function DataFetching({
//   issues,
// }: InferGetServerSidePropsType<typeof getServerSideProps>) {
//   return (
//     <main>
//       <IssueTable columns={columns} data={issues} />
//     </main>
//   );
// }

//
//
//
//
//
//
//
//
//
//
//
//
//
//

// // Before using Client side only

// export default function DataFetching() {

//   const [issues, setIssues] = useState([]);
//   useEffect(() => {
//     async function getIssues() {
//       const response = await getWebIssuesFromJiraApi();
//       setIssues(response?.issues || []);
//     }
//   }

//   return (
//     <main>
//       <IssueTable columns={columns} data={issues} />
//     </main>
//   )
// }
