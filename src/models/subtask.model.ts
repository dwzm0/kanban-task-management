import mongoose, { Schema } from 'mongoose';
import { ISubTask } from '../types/models';

const SubTaskSchema: Schema = new Schema({
    title: {type: String, require: true, unique: true},
    isCompleted: {type: Boolean, require: false}
});

export default mongoose.model<ISubTask>('Board', SubTaskSchema);