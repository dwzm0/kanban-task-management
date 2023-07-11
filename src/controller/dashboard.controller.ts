import { Request, Response } from "express";
import { getDashboard } from "../services/dashboard.service";
import logger from '../utils/logger';

export const getDashboardHander = async (_req: Request, res: Response) => {
    try {
        const dashboards = await getDashboard();
        console.log(dashboards);
        res.json(dashboards);
    }catch(error: any){
        logger.error(error);
        return res.status(409).send(error.message);
    }
};