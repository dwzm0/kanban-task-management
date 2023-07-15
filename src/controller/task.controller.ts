/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Request, Response } from "express";
import logger from '../utils/logger';
import findDashboardById from "../utils/findDashboardById";
import { GetTaskInput, CreateTaskInput } from "../schema/task.schema";
import { findTaskById } from "../services/task.service";
import { createTask } from "../services/task.service";
import { ITask } from "../types/models";

export const getTaskHandler = async (req: Request<GetTaskInput['params']>, res: Response) => {
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

export const createTaskHandler = async (req: Request<CreateTaskInput['params']>, res: Response) => {
    try{
        const dashBoardId = req.params.id;
        const dashboard = await findDashboardById(dashBoardId, res);

        if (dashboard) {
            const task: ITask = req.body;
            const currentTasks = await createTask(dashBoardId, task);
            return res.status(200).send(currentTasks);
        }
    }catch(error: any){
        logger.error(error);
        return res.status(409).send(error.message);
    }
};