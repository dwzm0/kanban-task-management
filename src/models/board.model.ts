import mongoose, { Schema } from 'mongoose';
import { IBoard } from '../types/models';

const BoardSchema: Schema = new Schema({
    name: {type: String, require: true, unique: true},
    columns: {type: Array, require: false,}
});


export default mongoose.model<IBoard>('Board', BoardSchema);