"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTaskSchema = exports.deleteTaskSchema = exports.getTaskSchema = exports.createTaskSchema = void 0;
const zod_1 = require("zod");
const payload = {
    body: (0, zod_1.object)({
        title: (0, zod_1.string)({
            required_error: "Title is required"
        }),
        description: (0, zod_1.string)().optional(),
        status: (0, zod_1.string)({
            required_error: "Status is required"
        }),
        subtasks: (0, zod_1.array)((0, zod_1.object)({ title: (0, zod_1.string)(), isCompleted: (0, zod_1.boolean)() })).optional()
    })
};
const params = {
    params: (0, zod_1.object)({
        id: (0, zod_1.string)({
            required_error: "id is required",
        }).length(24, { message: "Must be exactly 24 characters long" }),
        colId: (0, zod_1.string)({
            required_error: "colId is required",
        }).length(24, { message: "Must be exactly 24 characters long" }),
        taskId: (0, zod_1.string)({
            required_error: "taskId is required",
        }).length(24, { message: "Must be exactly 24 characters long" }),
    })
};
const paramsCreate = {
    params: (0, zod_1.object)({
        id: (0, zod_1.string)({
            required_error: "id is required",
        }).length(24, { message: "Must be exactly 24 characters long" }),
    })
};
exports.createTaskSchema = (0, zod_1.object)(Object.assign(Object.assign({}, payload), paramsCreate));
exports.getTaskSchema = (0, zod_1.object)(Object.assign({}, params));
exports.deleteTaskSchema = (0, zod_1.object)(Object.assign({}, params));
exports.updateTaskSchema = (0, zod_1.object)(Object.assign(Object.assign({}, params), payload));
