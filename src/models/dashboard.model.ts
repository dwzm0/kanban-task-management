import mongoose, { Schema } from 'mongoose';
import { IDashBoard } from '../types/models';


const DashboardSchema: Schema = new Schema({
    boards: {type: Array, require: false}
});

const DashboardModel = mongoose.model<IDashBoard>('Dashboard', DashboardSchema);

export default DashboardModel;