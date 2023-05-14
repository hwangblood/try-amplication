/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Public } from "../../decorators/public.decorator";
import { CreateTaskArgs } from "./CreateTaskArgs";
import { UpdateTaskArgs } from "./UpdateTaskArgs";
import { DeleteTaskArgs } from "./DeleteTaskArgs";
import { TaskFindManyArgs } from "./TaskFindManyArgs";
import { TaskFindUniqueArgs } from "./TaskFindUniqueArgs";
import { Task } from "./Task";
import { User } from "../../user/base/User";
import { Project } from "../../project/base/Project";
import { TaskService } from "../task.service";
@graphql.Resolver(() => Task)
export class TaskResolverBase {
  constructor(protected readonly service: TaskService) {}

  async _tasksMeta(
    @graphql.Args() args: TaskFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @graphql.Query(() => [Task])
  async tasks(@graphql.Args() args: TaskFindManyArgs): Promise<Task[]> {
    return this.service.findMany(args);
  }

  @graphql.Query(() => Task, { nullable: true })
  async task(@graphql.Args() args: TaskFindUniqueArgs): Promise<Task | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Task)
  async createTask(@graphql.Args() args: CreateTaskArgs): Promise<Task> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        assignedTo: args.data.assignedTo
          ? {
              connect: args.data.assignedTo,
            }
          : undefined,

        project: args.data.project
          ? {
              connect: args.data.project,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => Task)
  async updateTask(@graphql.Args() args: UpdateTaskArgs): Promise<Task | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          assignedTo: args.data.assignedTo
            ? {
                connect: args.data.assignedTo,
              }
            : undefined,

          project: args.data.project
            ? {
                connect: args.data.project,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Task)
  async deleteTask(@graphql.Args() args: DeleteTaskArgs): Promise<Task | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @Public()
  @graphql.ResolveField(() => User, {
    nullable: true,
    name: "assignedTo",
  })
  async resolveFieldAssignedTo(
    @graphql.Parent() parent: Task
  ): Promise<User | null> {
    const result = await this.service.getAssignedTo(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @graphql.ResolveField(() => Project, {
    nullable: true,
    name: "project",
  })
  async resolveFieldProject(
    @graphql.Parent() parent: Task
  ): Promise<Project | null> {
    const result = await this.service.getProject(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
