/* eslint-disable @typescript-eslint/no-unsafe-argument */
import DashboardModel from "../models/dashboard.model";
import { IBoard} from "../types/models";




export const getDashboard = async (): Promise<IBoard[]> => {
    try {
        const dashboard = await DashboardModel.find({});
        return dashboard;
    }catch(error: any){
        throw new Error(error);
    }
};

export const createDashboard = async (input: IBoard) => {
    try {
        const newDashboard = await DashboardModel.create(input);
        return newDashboard;
    }catch(error: any){
        throw new Error(error);
}
};

export const deleteDashboard = async (query: string) => {
    return DashboardModel.findByIdAndDelete(query);
};