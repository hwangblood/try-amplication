import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { TaskListRelationFilter } from "../task/TaskListRelationFilter";

export type ProjectWhereInput = {
  description?: StringFilter;
  dueDate?: DateTimeNullableFilter;
  id?: StringFilter;
  name?: StringFilter;
  owner?: UserWhereUniqueInput;
  startDate?: DateTimeFilter;
  tasks?: TaskListRelationFilter;
};
