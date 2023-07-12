/* eslint-disable @typescript-eslint/no-misused-promises */
import { Express } from "express";
import {getDashboardHander, 
        createDashboardHandler, 
        deleteDashboardHandler,
        findAndUpdateDashboardHandler,
} from './controller/dashboard.controller';

const routes = (app: Express) => {
    app.get('/api/dashboards', getDashboardHander);
    app.post('/api/dashboards', createDashboardHandler);
    app.delete('/api/dashboards/:id', deleteDashboardHandler);
    app.put('/api/dashboards/:id', findAndUpdateDashboardHandler);
};

export default routes;