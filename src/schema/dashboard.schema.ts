import {array, object, string, TypeOf} from "zod";

const payload = {
    body: object({
       name: string({
            required_error: "Name is required"
       }),
       columns: array(object({name: string()})).optional(),
    })
};

const params = {
    params: object({
        id: string({
            required_error: "id is required"
        })
    })
};

export const createDashboardSchema = object({
  ...payload,
});

export const findAndUpdateDashboardSchema = object({
  ...payload,
  ...params
});

export const deleteDashboardSchema = object({
  ...params,
});

export type CreateDashboardInput = TypeOf<typeof createDashboardSchema>;
export type FindAndUpdateDashboardInput = TypeOf<typeof findAndUpdateDashboardSchema>;
export type DeleteDashboardSchemaInput = TypeOf<typeof deleteDashboardSchema>;