/* eslint-disable @typescript-eslint/no-misused-promises */
import { Express } from "express";
import {getDashboardHander, createDashboardHandler, deleteDashboardHandler} from './controller/dashboard.controller';

const routes = (app: Express) => {
    app.get('/api/dashboards', getDashboardHander);
    app.post('/api/dashboards', createDashboardHandler);
    app.delete('/api/dashboards/:id', deleteDashboardHandler);
    
};

export default routes;