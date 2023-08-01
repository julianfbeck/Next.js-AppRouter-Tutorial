interface ReleaseNoteData {
  releaseDate: Date;
  releaseOwners: ConfluenceUser[];
  components: SelectedTickets[];
  changeRequest: ChangeRequest;
  deployment: Deployment[];
}

interface ConfluenceUser {
  name: string;
  userKey: string;
}
interface SelectedTickets {
  type: string;
  name: string;
  impact: string;
  todos: string;
  notes: string;
  links: string[];
}

interface ChangeRequest {
  createdAt: Date;
  link: string;
  deploymentWindow: string;
}

interface Deployment {
  application: string;
  stages: Stage[];
  deploymentTime: Date;
  versionOrReleaseMR: string;
  pipeline: string;
}

interface Stage {
  name: string;
  status: "complete" | "incomplete";
}
