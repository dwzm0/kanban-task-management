import mongoose, { Schema } from 'mongoose';
import { ITask } from '../types/models';

const TaskSchema: Schema = new Schema({
    title: {type: String, require: true, unique: true}, 
    description: {type: String, require: false, unique: false},
    status: {type: String, require: true, unique: false},
    subtasks: {type: Array, require: false,}
});

export default mongoose.model<ITask>('Board', TaskSchema);