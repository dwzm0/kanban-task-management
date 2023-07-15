/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import DashboardModel from "../models/dashboard.model";
import { IColumn, ITask } from "../types/models";

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

export const createTask = async (dashBoardId:string, input: ITask) => {
    try{
        const bord = await DashboardModel.findById(dashBoardId);
        const column: IColumn[] = bord?.columns?.filter(column => column.name === input.status) as IColumn[];
        column[0]?.tasks?.push(input);
        await bord?.save();
        return column[0]?.tasks;
    }catch(error: any){
        throw new Error(error);
    }
};