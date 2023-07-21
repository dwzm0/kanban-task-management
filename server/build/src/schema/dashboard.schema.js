"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteDashboardSchema = exports.getSingleDashboardSchema = exports.findAndUpdateDashboardSchema = exports.createDashboardSchema = void 0;
const zod_1 = require("zod");
const createPayload = {
    body: (0, zod_1.object)({
        name: (0, zod_1.string)({
            required_error: "Name is required"
        }),
        columns: (0, zod_1.array)((0, zod_1.object)({ name: (0, zod_1.string)() })).optional(),
    })
};
const updatePayload = {
    body: (0, zod_1.object)({
        name: (0, zod_1.string)({
            required_error: "Name is required"
        }).optional(),
        columns: (0, zod_1.array)((0, zod_1.object)({ name: (0, zod_1.string)() })).optional(),
    })
};
const params = {
    params: (0, zod_1.object)({
        id: (0, zod_1.string)({
            required_error: "id is required",
        }).length(24, { message: "Must be exactly 24 characters long" })
    })
};
exports.createDashboardSchema = (0, zod_1.object)(Object.assign({}, createPayload));
exports.findAndUpdateDashboardSchema = (0, zod_1.object)(Object.assign(Object.assign({}, updatePayload), params));
exports.getSingleDashboardSchema = (0, zod_1.object)(Object.assign({}, params));
exports.deleteDashboardSchema = (0, zod_1.object)(Object.assign({}, params));
