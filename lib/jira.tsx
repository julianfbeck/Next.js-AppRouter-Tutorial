import { JiraIssueResponse } from "@/types/jira-issue";

const JIRA_URL = "https://jira.inovex.de/rest/api/2";
// get id via https://www.mnet.markant.de/jira/rest/agile/1.0/board/
async function getWebIssuesFromJiraApi(): Promise<JiraIssueResponse | null> {
  try {
    const response = await fetch(
      `${JIRA_URL}/search?jql=project%20%3D%20ST%20AND%20component%20%3D%20"Modern%20Web"`,
      {
        headers: {
          Authorization: `Bearer ${process.env.JIRA_TOKEN}`,
          "Content-Type": "application/json",
        },
      }
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch data from Jira:", error);
    return null;
  }
}

export { getWebIssuesFromJiraApi };
