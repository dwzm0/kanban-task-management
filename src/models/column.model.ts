import mongoose, { Schema } from 'mongoose';
import { IColumn } from '../types/models';

const ColumnSchema: Schema = new Schema({
    name: {type: String, require: true, unique: true},
    task: {type: Array, require: false, unique: true }
});

export default mongoose.model<IColumn>('Column', ColumnSchema);