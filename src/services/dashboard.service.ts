import DashboardModel from "../models/dashboard.model";
/* import { IDashBoard } from "../types/models"; */

export const getDashboard = async () => {
    try {
        const dashboard = await DashboardModel.find({});
        return dashboard[0].boards;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    }catch(error: any){
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        throw new Error(error);
    }
};