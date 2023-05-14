import { User } from "../user/User";
import { Task } from "../task/Task";

export type Project = {
  createdAt: Date;
  description: string;
  dueDate: Date | null;
  id: string;
  name: string;
  owner?: User;
  startDate: Date;
  tasks?: Array<Task>;
  updatedAt: Date;
};
