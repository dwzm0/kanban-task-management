import mongoose, { Schema } from 'mongoose';
import { IDashBoard} from '../types/models';

const SubTaskSchema: Schema = new Schema({
    title: {type: String, require: true, unique: true},
    isCompleted: {type: Boolean, require: false}
});

const TaskSchema: Schema = new Schema({
    title: {type: String, require: true, unique: true}, 
    description: {type: String, require: false, unique: false},
    status: {type: String, require: true, unique: false},
    subtasks: [SubTaskSchema],
});

const ColumnSchema: Schema = new Schema({
    name: {type: String, require: true, unique: true},
    task: [TaskSchema],
});

const BoardSchema: Schema = new Schema({
    name: {type: String, require: true, unique: true},
    columns: [ColumnSchema],
});

const DashboardSchema: Schema = new Schema({
    _id: Schema.Types.ObjectId,
    boards: [BoardSchema]
});

const DashboardModel = mongoose.model<IDashBoard>('Dashboard', DashboardSchema, 'dashboards');


DashboardModel.find({}).then((data) => console.log(data[0].boards)).catch(error => console.log(error));


export default DashboardModel;  