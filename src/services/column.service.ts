/* eslint-disable @typescript-eslint/no-unsafe-argument */
import DashboardModel from "../models/dashboard.model";
import { IColumn} from "../types/models";
/* import { QueryOptions, UpdateQuery } from "mongoose"; */

export const getColumn = async (query: string): Promise<IColumn> => {
    try{
        const column = await DashboardModel.findById(query);
        return column;
    }catch(error: any){
        throw new Error(error);
    }
};