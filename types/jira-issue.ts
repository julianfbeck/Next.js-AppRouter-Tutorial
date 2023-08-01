// To parse this data:
//
//   import { Convert, JiraIssue } from "./file";
//
//   const jiraIssue = Convert.toJiraIssue(json);

export interface JiraIssueResponse {
  expand:     string;
  startAt:    number;
  maxResults: number;
  total:      number;
  issues:     Issue[];
}

export interface Issue {
  expand: string;
  id:     string;
  self:   string;
  key:    string;
  fields: IssueFields;
}

export interface IssueFields {
  issuetype:                     Issuetype;
  components:                    Priority[];
  timespent:                     null;
  timeoriginalestimate:          null;
  description:                   null | string;
  project:                       Project;
  customfield_11000:             string;
  fixVersions:                   FixVersion[];
  customfield_11100:             Creator[] | null;
  aggregatetimespent:            null;
  resolution:                    Priority | null;
  customfield_11300:             null;
  customfield_11301:             null;
  customfield_11302:             null;
  customfield_10005:             null;
  aggregatetimeestimate:         null;
  resolutiondate:                null | string;
  workratio:                     number;
  summary:                       string;
  lastViewed:                    null | string;
  watches:                       Watches;
  creator:                       Creator;
  subtasks:                      Parent[];
  created:                       string;
  reporter:                      Creator;
  customfield_10000:             string;
  aggregateprogress:             Progress;
  customfield_10001:             Customfield10001 | null;
  priority:                      Priority;
  customfield_10100:             null;
  customfield_10400:             null;
  labels:                        string[];
  customfield_11303:             null;
  customfield_11304:             null;
  environment:                   null;
  timeestimate:                  null;
  aggregatetimeoriginalestimate: null;
  versions:                      any[];
  duedate:                       null;
  progress:                      Progress;
  issuelinks:                    Issuelink[];
  votes:                         Votes;
  assignee:                      Creator | null;
  updated:                       string;
  status:                        Status;
  customfield_10006?:            null;
  parent?:                       Parent;
  customfield_10002?:            Customfield10002;
  customfield_10003?:            string;
  customfield_10004?:            string;
}

export interface Progress {
  progress: number;
  total:    number;
}

export interface Creator {
  self:         string;
  name:         string;
  key:          string;
  emailAddress: string;
  avatarUrls:   AvatarUrls;
  displayName:  string;
  active:       boolean;
  timeZone:     TimeZone;
}

export interface AvatarUrls {
  "48x48": string;
  "24x24": string;
  "16x16": string;
  "32x32": string;
}

export enum TimeZone {
  EuropeBerlin = "Europe/Berlin",
}

export interface Priority {
  self:         string;
  id:           string;
  name:         PriorityName;
  description?: Description;
  iconUrl?:     string;
}

export enum Description {
  Apps = "Apps",
  ModernWeb = "Modern Web",
  ThisIssueWonTBeActioned = "This issue won't be actioned.",
  WorkHasBeenCompletedOnThisIssue = "Work has been completed on this issue.",
}

export enum PriorityName {
  Apps = "Apps",
  Done = "Done",
  Medium = "Medium",
  ModernWeb = "Modern Web",
  Security = "Security",
  WonTDo = "Won't Do",
}

export enum Customfield10001 {
  St1349 = "ST-1349",
  St1353 = "ST-1353",
  St857 = "ST-857",
}

export interface Customfield10002 {
  self:     string;
  value:    Value;
  id:       string;
  disabled: boolean;
}

export enum Value {
  Backlog = "Backlog",
  Done = "Done",
  Idea = "Idea",
  InProgress = "In Progress",
  Rejected = "Rejected",
  ToDo = "To Do",
}

export interface FixVersion {
  self:         string;
  id:           string;
  description?: string;
  name:         string;
  archived:     boolean;
  released:     boolean;
  releaseDate:  Date;
}

export interface Issuelink {
  id:            string;
  self:          string;
  type:          Type;
  outwardIssue?: Parent;
  inwardIssue?:  Parent;
}

export interface Parent {
  id:     string;
  key:    string;
  self:   string;
  fields: ParentFields;
}

export interface ParentFields {
  summary:   string;
  status:    Status;
  priority:  Priority;
  issuetype: Issuetype;
}

export interface Issuetype {
  self:        string;
  id:          string;
  description: string;
  iconUrl:     string;
  name:        IssuetypeName;
  subtask:     boolean;
  avatarId?:   number;
}

export enum IssuetypeName {
  Epic = "Epic",
  Story = "Story",
  SubTask = "Sub-task",
  Task = "Task",
}

export interface Status {
  self:           string;
  description:    string;
  iconUrl:        string;
  name:           Value;
  id:             string;
  statusCategory: StatusCategory;
}

export interface StatusCategory {
  self:      string;
  id:        number;
  key:       StatusCategoryKey;
  colorName: ColorName;
  name:      Value;
}

export enum ColorName {
  Default = "default",
  Inprogress = "inprogress",
  Success = "success",
}

export enum StatusCategoryKey {
  Done = "done",
  Indeterminate = "indeterminate",
  New = "new",
}

export interface Type {
  id:      string;
  name:    string;
  inward:  string;
  outward: string;
  self:    string;
}

export interface Project {
  self:           string;
  id:             string;
  key:            ProjectKey;
  name:           ProjectName;
  projectTypeKey: ProjectTypeKey;
  avatarUrls:     AvatarUrls;
}

export enum ProjectKey {
  St = "ST",
}

export enum ProjectName {
  InnovationCircles = "Innovation Circles",
}

export enum ProjectTypeKey {
  Software = "software",
}

export interface Votes {
  self:     string;
  votes:    number;
  hasVoted: boolean;
}

export interface Watches {
  self:       string;
  watchCount: number;
  isWatching: boolean;
}
