/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Request, Response } from "express";
import logger from '../utils/logger';
import findDashboardById from "../utils/findDashboardById";
import { GeTaskInput } from "../schema/column.schema";
import { findTaskById } from "../services/column.service";


export const getTaskHandler = async (req: Request<GeTaskInput['params']>, res: Response) => {
    try{
        const dashBoardId = req.params.id;
        const columnId = req.params.colId;
        const taskId = req.params.taskId;
        const dashboard = await findDashboardById(dashBoardId, res);
        const task = await findTaskById(dashboard, columnId, taskId);
        res.json(task);
    }catch(error: any){
        logger.error(error);
        return res.status(409).send(error.message);
    }
};