import { Types } from "mongoose";
import { Response } from "express";
import {findDashboard} from "../services/dashboard.service";

const findDashboardById = async (dashBoardId: string, res: Response) => {
        if(!Types.ObjectId.isValid(dashBoardId)){
            return res.status(404).json({ error: `${dashBoardId} is not valid id` }); 
        }

        const dashboard = await findDashboard(dashBoardId);
        if (!dashboard){
            return res.status(404).json({ error: `Blog by ID ${dashBoardId} does not exist` }); 
        }

        return dashboard;
};

export default findDashboardById;