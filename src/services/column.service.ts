/* eslint-disable @typescript-eslint/no-unsafe-argument */
import DashboardModel from "../models/dashboard.model";


export const findTaskById = async (dashboard: any, columnId: string, taskId: string,
     ) => {
    try{
        const bord = await DashboardModel.findById(dashboard._id);
        const column = bord?.columns?.find(item => item._id == columnId);
        const task = column?.tasks?.find(item => item._id == taskId);
        return task;
    }catch(error: any){
        throw new Error(error);
    }
};