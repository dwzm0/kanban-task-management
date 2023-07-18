import { Types } from "mongoose";
import { Response } from "express";
import { IBoard } from "../types/models";
import DashboardModel from "../models/dashboard.model";

const findColumnById = async (dashboard: IBoard, columnId:string, res: Response) => {
    const bord = await DashboardModel.findById(dashboard._id); // to have model instance, otherwise I have no methods and model fields.

    if(!Types.ObjectId.isValid(columnId)){
        return res.status(404).send({ error: `${columnId} is not valid id` }); 
    }

    const column = bord?.columns?.find(item => item._id == columnId);
    return column;
};

export default findColumnById;