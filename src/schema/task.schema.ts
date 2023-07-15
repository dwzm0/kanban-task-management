import {array, object, string, TypeOf} from "zod";

const createPayload = {
    body: object({
       title: string({
            required_error: "Title is required"
       }),
       description: string().optional(),
       status: string({
        required_error: "Status is required"
       }),
       subtasks: array(object({title: string()})).optional()
   })
};

const params = {
    params: object({
         id: string({
             required_error: "id is required",
         }).length(24, { message: "Must be exactly 24 characters long" }),
         colId: string({
             required_error: "id is required",
         }).length(24, { message: "Must be exactly 24 characters long" }),
         taskId: string({
             required_error: "id is required",
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
    ...createPayload,
    ...paramsCreate
  });

export const getTaskSchema = object({
    ...params
});

export const deleteTaskSchema = object({
    ...params
});

export type GetTaskInput = TypeOf<typeof getTaskSchema>;
export type CreateTaskInput = TypeOf<typeof createTaskSchema>;
export type DeleteTaskInput = TypeOf<typeof deleteTaskSchema>;
