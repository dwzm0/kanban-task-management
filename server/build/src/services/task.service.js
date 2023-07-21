"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTaskById = exports.deleteTaskById = exports.createTask = exports.findTaskById = void 0;
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
const dashboard_model_1 = __importDefault(require("../models/dashboard.model"));
const findTaskById = (column, taskId) => {
    var _a;
    try {
        const task = (_a = column === null || column === void 0 ? void 0 : column.tasks) === null || _a === void 0 ? void 0 : _a.find(item => item._id == taskId);
        return task;
    }
    catch (error) {
        throw new Error(error);
    }
};
exports.findTaskById = findTaskById;
const createTask = (dashBoardId, input) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d;
    try {
        const bord = yield dashboard_model_1.default.findById(dashBoardId);
        const column = (_a = bord === null || bord === void 0 ? void 0 : bord.columns) === null || _a === void 0 ? void 0 : _a.filter(column => column.name === input.status);
        (_c = (_b = column[0]) === null || _b === void 0 ? void 0 : _b.tasks) === null || _c === void 0 ? void 0 : _c.push(input);
        yield (bord === null || bord === void 0 ? void 0 : bord.save());
        return (_d = column[0]) === null || _d === void 0 ? void 0 : _d.tasks;
    }
    catch (error) {
        throw new Error(error);
    }
});
exports.createTask = createTask;
const deleteTaskById = (dashboard, columnId, taskId) => __awaiter(void 0, void 0, void 0, function* () {
    var _e, _f, _g;
    try {
        const bord = yield dashboard_model_1.default.findById(dashboard._id);
        const column = (_e = bord === null || bord === void 0 ? void 0 : bord.columns) === null || _e === void 0 ? void 0 : _e.find(item => item._id == columnId);
        const taskIndexInArr = (_f = column === null || column === void 0 ? void 0 : column.tasks) === null || _f === void 0 ? void 0 : _f.findIndex(task => task._id == taskId);
        (_g = column === null || column === void 0 ? void 0 : column.tasks) === null || _g === void 0 ? void 0 : _g.splice(taskIndexInArr, 1);
        yield (bord === null || bord === void 0 ? void 0 : bord.save());
        return taskIndexInArr;
    }
    catch (error) {
        throw new Error(error);
    }
});
exports.deleteTaskById = deleteTaskById;
const updateTaskById = (dashboard, columnId, taskId, update, taskIndexInArr) => __awaiter(void 0, void 0, void 0, function* () {
    var _h, _j, _k, _l;
    try {
        const bord = yield dashboard_model_1.default.findById(dashboard._id);
        const column = (_h = bord === null || bord === void 0 ? void 0 : bord.columns) === null || _h === void 0 ? void 0 : _h.find(item => item._id == columnId);
        const taskToUpdate = column.tasks[taskIndexInArr];
        update = Object.assign({ _id: taskId }, update);
        if (update.status != taskToUpdate.status) {
            (_j = column === null || column === void 0 ? void 0 : column.tasks) === null || _j === void 0 ? void 0 : _j.splice(taskIndexInArr, 1);
            const columnToInsert = (_k = bord === null || bord === void 0 ? void 0 : bord.columns) === null || _k === void 0 ? void 0 : _k.find(item => item.name == update.status);
            (_l = columnToInsert === null || columnToInsert === void 0 ? void 0 : columnToInsert.tasks) === null || _l === void 0 ? void 0 : _l.push(update);
        }
        else {
            column.tasks[taskIndexInArr] = update;
        }
        yield (bord === null || bord === void 0 ? void 0 : bord.save());
        return bord === null || bord === void 0 ? void 0 : bord.columns;
    }
    catch (error) {
        throw new Error(error);
    }
});
exports.updateTaskById = updateTaskById;
