/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Types } from "mongoose";
import { Request, Response } from "express";
import { getDashboard, 
         createDashboard,
         deleteDashboard,
         findDashboard,
         findAndUpdateDashboard,       
} from "../services/dashboard.service";
import logger from '../utils/logger';
import DashboardModel from "../models/dashboard.model";
import { CreateDashboardInput, FindAndUpdateDashboardInput } from "../schema/dashboard.schema";

export const getDashboardHander = async (_req: Request, res: Response) => {
    try {
        const dashboards = await getDashboard();
        res.json(dashboards);
    }catch(error: any){
        logger.error(error);
        return res.status(409).send(error.message);
    }
};

export const createDashboardHandler = async (req: Request<object, object, CreateDashboardInput['body']>, res: Response) => {
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

export const deleteDashboardHandler = async (req: Request<FindAndUpdateDashboardInput['params']>, res: Response) => {
    try {
        const dashBoardId = req.params.id;
        if(!Types.ObjectId.isValid(dashBoardId)){
            return res.status(404).json({ error: `${dashBoardId} is not valid id` }); 
        }

        const dashboard = await findDashboard(dashBoardId);
        if (!dashboard){
            return res.status(404).json({ error: `Blog by ID ${dashBoardId} does not exist` }); 
        }

        const createdDashboard = await deleteDashboard(dashBoardId);
        res.status(200).send(createdDashboard);
    }catch(error: any){
        logger.error(error);
        return res.status(409).send(error.message);
    }
};

export const findAndUpdateDashboardHandler = async (req: Request<FindAndUpdateDashboardInput['params']>, res: Response) => {
    try {
        const dashBoardId = req.params.id;
        if(!Types.ObjectId.isValid(dashBoardId)){
            return res.status(404).json({ error: `${dashBoardId} is not valid id` }); 
        }

        const dashboard = await findDashboard(dashBoardId);
        if (!dashboard){
            return res.status(404).json({ error: `Blog by ID ${dashBoardId} does not exist` });
        }
        console.log(dashboard);
        

        const update = req.body;

        const updatedDashboard = await findAndUpdateDashboard(dashBoardId, update, {
            new: true, 
        } );
        return res.status(200).send(updatedDashboard);
    }catch(error: any){
        logger.error(error);
        return res.status(409).send(error.message);
    }
};