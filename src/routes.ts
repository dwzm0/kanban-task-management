/* eslint-disable @typescript-eslint/no-misused-promises */
import { Express } from "express";
import {getDashboardHander, 
        createDashboardHandler, 
        deleteDashboardHandler,
        findAndUpdateDashboardHandler,
} from './controller/dashboard.controller';
import validate from "./middleware/validateResource";
import { createDashboardSchema, findAndUpdateDashboardSchema, deleteDashboardSchema } from "./schema/dashboard.schema";

const routes = (app: Express) => {
    app.get('/api/dashboards',  getDashboardHander);
    app.post('/api/dashboards', validate(createDashboardSchema), createDashboardHandler);
    app.delete('/api/dashboards/:id', validate(deleteDashboardSchema), deleteDashboardHandler);
    app.put('/api/dashboards/:id', validate(findAndUpdateDashboardSchema),findAndUpdateDashboardHandler);
};

export default routes;