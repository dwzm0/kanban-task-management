import mongoose, { Schema } from 'mongoose';
import { IBoard, IColumn, ITask, ISubTask} from '../types/models';

const SubTaskSchema: Schema = new Schema<ISubTask>({
    _id: {type: Schema.Types.ObjectId, default: new mongoose.Types.ObjectId() },
    title: {type: String, require: true, unique: true},
    isCompleted: {type: Boolean, require: false}
});

const TaskSchema: Schema = new Schema<ITask>({
    _id: {type: Schema.Types.ObjectId, default: new mongoose.Types.ObjectId() },
    title: {type: String, require: true, unique: true}, 
    description: {type: String, require: false, unique: false},
    status: {type: String, require: true, unique: false},
    subtasks: [SubTaskSchema],
});

const ColumnSchema: Schema = new Schema<IColumn>({
    _id: {type: Schema.Types.ObjectId, default: new mongoose.Types.ObjectId() },
    name: {type: String, require: true, unique: true},
    tasks: [TaskSchema],
});

const BoardSchema: Schema = new Schema<IBoard>({
    _id: {type: Schema.Types.ObjectId, default: new mongoose.Types.ObjectId() },
    name: {type: String, require: true, unique: true},
    columns: [ColumnSchema],
});

const DashboardModel = mongoose.model<IBoard>('Dashboard', BoardSchema);

export default DashboardModel;  