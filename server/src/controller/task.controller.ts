/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Request, Response } from "express";
import logger from '../utils/logger';
import findDashboardById from "../utils/findDashboardById";
import { GetTaskInput, CreateTaskInput, DeleteTaskInput, UpdateTaskInput } from "../schema/task.schema";
import { findTaskById, createTask, deleteTaskById, updateTaskById  } from "../services/task.service";
import {IBoard, ITask, IColumn } from "../types/models";
import findColumnById from "../utils/findColumnById";

export const getTaskHandler = async (req: Request<GetTaskInput['params']>, res: Response) => {
    try{
        const dashBoardId = req.params.id;
        const columnId = req.params.colId;
        const taskId = req.params.taskId;

        const dashboard = await findDashboardById(dashBoardId, res) as IBoard;
        if (!dashboard){
            return res.status(404).send({ error: `Blog by ID ${dashBoardId} does not exist` });  
        }

        const column = await findColumnById(dashboard, columnId, res) as IColumn;
        if (!column) {
            return res.status(404).send({ error: `Column by ID ${columnId} does not exist`});
        }

        const task = findTaskById(column, taskId);
        if (!task) {
            return res.status(404).send({ error: `Task by ID ${taskId} does not exist`}); 
        }

        return res.status(200).send(task);
    }catch(error: any){
        logger.error(error);
        return res.status(409).send(error.message);
    }
};

export const createTaskHandler = async (req: Request<CreateTaskInput['params']>, res: Response) => {
    try{
        const dashBoardId = req.params.id;
        const dashboard = await findDashboardById(dashBoardId, res);

        if (!dashboard){
            return res.status(404).send({ error: `Blog by ID ${dashBoardId} does not exist` });  
        }

        const task: ITask = req.body;
        const currentTasks = await createTask(dashBoardId, task);
        return res.status(200).send(currentTasks);
    }catch(error: any){
        logger.error(error);
        return res.status(409).send(error.message);
    }
};

export const deleteTaskHandler = async (req: Request<DeleteTaskInput['params']>, res: Response) => {
    try{
        const dashBoardId = req.params.id;
        const columnId = req.params.colId;
        const taskId = req.params.taskId; 

        const dashboard = await findDashboardById(dashBoardId, res) as IBoard;
        if (!dashboard){
            return res.status(404).send({ error: `Blog by ID ${dashBoardId} does not exist` });  
        }

        const column = await findColumnById(dashboard, columnId, res) as IColumn;
        if (!column) {
            return res.status(404).send({ error: `Column by ID ${columnId} does not exist`});
        }

        const deletedTaskInd = await deleteTaskById(dashboard, columnId, taskId);
        if (deletedTaskInd == -1) {
            return res.status(404).send({ error: `Task by ID ${taskId} does not exist`}); 
        }

        return res.sendStatus(200);
    }catch(error: any){
        logger.error(error);
        return res.status(409).send(error.message);
    }
};

export const updateTaskHandler = async (req: Request<UpdateTaskInput['params']>, res: Response) => {
    try{
        const dashBoardId = req.params.id;
        const columnId = req.params.colId;
        const taskId = req.params.taskId;

        const dashboard = await findDashboardById(dashBoardId, res) as IBoard;
        if (!dashboard){
            return res.status(404).send({ error: `Blog by ID ${dashBoardId} does not exist` });  
        }

        const column = await findColumnById(dashboard, columnId, res) as IColumn;
        if (!column) {
            return res.status(404).send({ error: `Column by ID ${columnId} does not exist`});
        }

        const taskIndexInArr = column?.tasks?.findIndex(task => task._id == taskId);
        if (taskIndexInArr == -1) {
            return res.status(404).send({ error: `Task by ID ${taskId} does not exist`}); 
        }

        const update: ITask = req.body;
        const columns = await updateTaskById(dashboard, columnId, taskId, update, taskIndexInArr);

        return res.status(200).send(columns);
    }catch(error: any){
        logger.error(error);
        return res.status(409).send(error.message);
    }
};

 