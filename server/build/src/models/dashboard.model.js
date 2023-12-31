"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
const SubTaskSchema = new mongoose_1.Schema({
    title: { type: String, require: true, unique: true },
    isCompleted: { type: Boolean, require: false, default: false }
});
const TaskSchema = new mongoose_1.Schema({
    _id: { type: String, require: false },
    title: { type: String, require: true, unique: true },
    description: { type: String, require: false, unique: false },
    status: { type: String, require: true, unique: false },
    subtasks: [SubTaskSchema],
});
const ColumnSchema = new mongoose_1.Schema({
    name: { type: String, require: true, unique: true },
    tasks: [TaskSchema],
});
const BoardSchema = new mongoose_1.Schema({
    name: { type: String, require: true, unique: true },
    columns: [ColumnSchema],
});
const DashboardModel = mongoose_1.default.model('Dashboard', BoardSchema);
exports.default = DashboardModel;
