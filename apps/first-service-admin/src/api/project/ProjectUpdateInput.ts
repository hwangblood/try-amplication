import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { TaskUpdateManyWithoutProjectsInput } from "./TaskUpdateManyWithoutProjectsInput";

export type ProjectUpdateInput = {
  description?: string;
  dueDate?: Date | null;
  name?: string;
  owner?: UserWhereUniqueInput;
  startDate?: Date;
  tasks?: TaskUpdateManyWithoutProjectsInput;
};
