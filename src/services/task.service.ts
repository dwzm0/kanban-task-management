/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import DashboardModel from "../models/dashboard.model";
import {IBoard, IColumn, ITask } from "../types/models";

export const findTaskById = async (column:IColumn, taskId: string) => {
    try{
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

export const deleteTaskById = async (dashboard: IBoard, columnId: string, taskId: string) => {
    try{
        const bord = await DashboardModel.findById(dashboard._id);
        const column = bord?.columns?.find(item => item._id == columnId);
        const taskIndexInArr = column?.tasks?.findIndex(task => task._id == taskId) as number;
        column?.tasks?.splice(taskIndexInArr, 1);
        await bord?.save();
        return taskIndexInArr;
    }catch(error: any) {
        throw new Error(error); 
    }
};

export const updateTaskById = async (dashboard: IBoard, columnId: string, taskId: string, update: ITask, taskIndexInArr: number
    ) => {
   try{
       const bord = await DashboardModel.findById(dashboard._id);
       const column = bord?.columns?.find(item => item._id == columnId);
       const taskToUpdate = column.tasks[taskIndexInArr];
       if (update.status != taskToUpdate.status) {
          column?.tasks?.splice(taskIndexInArr, 1);
          const columnToInsert = bord?.columns?.find(item => item.name == update.status);
          columnToInsert?.tasks?.push(update);
       }else {
          column.tasks[taskIndexInArr] = update;
        }
      
       await bord?.save();
       return bord?.columns;
   }catch(error: any){
       throw new Error(error);
   }
};

