import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { TaskCreateNestedManyWithoutProjectsInput } from "./TaskCreateNestedManyWithoutProjectsInput";

export type ProjectCreateInput = {
  description: string;
  dueDate?: Date | null;
  name: string;
  owner: UserWhereUniqueInput;
  startDate: Date;
  tasks?: TaskCreateNestedManyWithoutProjectsInput;
};
