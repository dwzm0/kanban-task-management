/* eslint-disable @typescript-eslint/no-misused-promises */
import { Express, Request, Response } from "express";
import {getDashboardHander} from './controller/dashboard.controller';

const routes = (app: Express) => {
    app.get('/healthcheck', (_req: Request, res: Response) => res.sendStatus(200));

    app.get('/api/dashboards', getDashboardHander);
};

export default routes;