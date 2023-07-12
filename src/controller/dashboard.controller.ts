/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Request, Response } from "express";
import { getDashboard, createDashboard } from "../services/dashboard.service";
import logger from '../utils/logger';
import DashboardModel from "../models/dashboard.model";

export const getDashboardHander = async (_req: Request, res: Response) => {
    try {
        const dashboards = await getDashboard();
        res.json(dashboards);
    }catch(error: any){
        logger.error(error);
        return res.status(409).send(error.message);
    }
};

export const createDashboardHandler = async (req: Request, res: Response) => {
    try {
        const dashboard = new DashboardModel({
            name: req.body.name,
            columns: req.body.columns,
        });
        const newDashboard = await createDashboard(dashboard);
        res.status(200).json(newDashboard);
    }catch(error: any){
        logger.error(error);
        return res.status(409).send(error.message);
    }
};