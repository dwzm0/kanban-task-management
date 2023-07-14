/* eslint-disable @typescript-eslint/no-misused-promises */
import { Express } from "express";
import {getDashboardsHander,
        getSingleDashboardHandler, 
        createDashboardHandler, 
        deleteDashboardHandler,
        findAndUpdateDashboardHandler,
} from './controller/dashboard.controller';
import { getTaskHandler } from "./controller/column.controller";
import validate from "./middleware/validateResource";
import { createDashboardSchema, findAndUpdateDashboardSchema, deleteDashboardSchema, getSingleDashboardSchema } from "./schema/dashboard.schema";
import {getTashSchema} from './schema/column.schema';

const routes = (app: Express) => {
    app.get('/api/dashboards',  getDashboardsHander);
    app.get('/api/dashboards/:id', validate(getSingleDashboardSchema), getSingleDashboardHandler);
    app.post('/api/dashboards', validate(createDashboardSchema), createDashboardHandler);
    app.delete('/api/dashboards/:id', validate(deleteDashboardSchema), deleteDashboardHandler);
    app.put('/api/dashboards/:id', validate(findAndUpdateDashboardSchema),findAndUpdateDashboardHandler);

    app.get('/api/dashboards/:id/columns/:colId/tasks/:taskId', validate(getTashSchema), getTaskHandler);
};

export default routes;