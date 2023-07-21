import { Types } from "mongoose";
import { Response } from "express";
import {findDashboard} from "../services/dashboard.service";

const findDashboardById = async (dashBoardId: string, res: Response) => {
        const dashboard = await findDashboard(dashBoardId);
        if(!Types.ObjectId.isValid(dashBoardId)){
           return res.status(404).send({ error: `${dashBoardId} is not valid id` }); 
        }else {
           return dashboard;
        }
};

export default findDashboardById;