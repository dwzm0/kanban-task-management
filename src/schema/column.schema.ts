import {object, string, TypeOf} from "zod";

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


export const getTashSchema = object({
    ...params
});

export type GeTaskInput = TypeOf<typeof getTashSchema>;
