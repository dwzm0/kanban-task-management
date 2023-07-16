import {array, boolean, object, string, TypeOf} from "zod";

const payload = {
    body: object({
       title: string({
            required_error: "Title is required"
       }),
       description: string().optional(),
       status: string({
        required_error: "Status is required"
       }),
       subtasks: array(object({title: string(), isComplete: boolean()})).optional()
   })
};

const params = {
    params: object({
         id: string({
             required_error: "id is required",
         }).length(24, { message: "Must be exactly 24 characters long" }),
         colId: string({
             required_error: "colId is required",
         }).length(24, { message: "Must be exactly 24 characters long" }),
         taskId: string({
             required_error: "taskId is required",
         }).length(24, { message: "Must be exactly 24 characters long" }),
    })
};

const paramsCreate = {
    params: object({
         id: string({
             required_error: "id is required",
         }).length(24, { message: "Must be exactly 24 characters long" }),
    })
};

export const createTaskSchema = object({
    ...payload,
    ...paramsCreate
  });

export const getTaskSchema = object({
    ...params
});

export const deleteTaskSchema = object({
    ...params
});

export const updateTaskSchema = object({
    ...params,
    ...payload
});

export type GetTaskInput = TypeOf<typeof getTaskSchema>;
export type CreateTaskInput = TypeOf<typeof createTaskSchema>;
export type DeleteTaskInput = TypeOf<typeof deleteTaskSchema>;
export type UpdateTaskInput = TypeOf<typeof updateTaskSchema>;
