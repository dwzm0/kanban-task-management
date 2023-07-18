/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Request, Response } from "express";
import { getDashboard, 
         createDashboard,
         deleteDashboard,
         findAndUpdateDashboard,       
} from "../services/dashboard.service";
import logger from '../utils/logger';
import DashboardModel from "../models/dashboard.model";
import { CreateDashboardInput, FindAndUpdateDashboardInput, GetSingleDashboardSchemaInput } from "../schema/dashboard.schema";
import findDashboardById from "../utils/findDashboardById";

export const getDashboardsHander = async (_req: Request, res: Response) => {
    try {
        const dashboards = await getDashboard();

        if (!dashboards) {
            return res.status(404).json({ error: "Dasboards missing" });
        }

        return res.json(dashboards);
    }catch(error: any){
        logger.error(error);
        return res.status(409).send(error.message);
    }
};

export const getSingleDashboardHandler = async (req: Request<GetSingleDashboardSchemaInput['params']>, res: Response) => {
    try {
        const dashBoardId = req.params.id;
        const dashboard = await findDashboardById(dashBoardId, res);
        if (!dashboard){
            return res.status(404).send({ error: `Blog by ID ${dashBoardId} does not exist` });  
        }
        return res.status(200).send(dashboard);
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
        return res.status(200).json(newDashboard);
    }catch(error: any){
        logger.error(error);
        return res.status(409).send(error.message);
    }
};

export const deleteDashboardHandler = async (req: Request<FindAndUpdateDashboardInput['params']>, res: Response) => {
    try {
        const dashBoardId = req.params.id;
        const dashboard = await findDashboardById(dashBoardId, res);
        if (!dashboard){
            return res.status(404).send({ error: `Blog by ID ${dashBoardId} does not exist` });  
        } 
        await deleteDashboard(dashBoardId);
        return res.sendStatus(200);
    }catch(error: any){
        logger.error(error);
        return res.status(409).send(error.message);
    }
};

export const findAndUpdateDashboardHandler = async (req: Request<FindAndUpdateDashboardInput['params']>, res: Response) => {
    try {
        const dashBoardId = req.params.id;
        const dashboard = await findDashboardById(dashBoardId, res);
        if (!dashboard){
            return res.status(404).send({ error: `Blog by ID ${dashBoardId} does not exist` });  
        }
        
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