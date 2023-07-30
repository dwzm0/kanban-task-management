import {array, object, string, TypeOf} from "zod";

const createPayload = {
    body: object({
       name: string({
            required_error: "Name is required"
       }).min(3),
       columns: array(object({name: string()})).optional(),
    })
};

const updatePayload = {
  body: object({
     name: string({
          required_error: "Name is required"
     }).min(3).optional(),
     columns: array(object({name: string()})).optional(),
  })
};

const params = {
    params: object({
        id: string({
            required_error: "id is required",
        }).length(24, { message: "Must be exactly 24 characters long" })
    })
};

export const createDashboardSchema = object({
  ...createPayload,
});

export const findAndUpdateDashboardSchema = object({
  ...updatePayload,
  ...params
});

export const getSingleDashboardSchema = object({
  ...params,
});

export const deleteDashboardSchema = object({
  ...params,
});

export type CreateDashboardInput = TypeOf<typeof createDashboardSchema>;
export type FindAndUpdateDashboardInput = TypeOf<typeof findAndUpdateDashboardSchema>;
export type DeleteDashboardSchemaInput = TypeOf<typeof deleteDashboardSchema>;
export type GetSingleDashboardSchemaInput = TypeOf<typeof getSingleDashboardSchema>;