"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dashboard_controller_1 = require("./controller/dashboard.controller");
const task_controller_1 = require("./controller/task.controller");
const validateResource_1 = __importDefault(require("./middleware/validateResource"));
const dashboard_schema_1 = require("./schema/dashboard.schema");
const task_schema_1 = require("./schema/task.schema");
const routes = (app) => {
    app.get('/api/dashboards', dashboard_controller_1.getDashboardsHander);
    app.get('/api/dashboards/:id', (0, validateResource_1.default)(dashboard_schema_1.getSingleDashboardSchema), dashboard_controller_1.getSingleDashboardHandler);
    app.post('/api/dashboards', (0, validateResource_1.default)(dashboard_schema_1.createDashboardSchema), dashboard_controller_1.createDashboardHandler);
    app.delete('/api/dashboards/:id', (0, validateResource_1.default)(dashboard_schema_1.deleteDashboardSchema), dashboard_controller_1.deleteDashboardHandler);
    app.put('/api/dashboards/:id', (0, validateResource_1.default)(dashboard_schema_1.findAndUpdateDashboardSchema), dashboard_controller_1.findAndUpdateDashboardHandler);
    app.get('/api/dashboards/:id/columns/:colId/tasks/:taskId', (0, validateResource_1.default)(task_schema_1.getTaskSchema), task_controller_1.getTaskHandler);
    app.post('/api/dashboards/:id', (0, validateResource_1.default)(task_schema_1.createTaskSchema), task_controller_1.createTaskHandler);
    app.delete('/api/dashboards/:id/columns/:colId/tasks/:taskId', (0, validateResource_1.default)(task_schema_1.deleteTaskSchema), task_controller_1.deleteTaskHandler);
    app.put('/api/dashboards/:id/columns/:colId/tasks/:taskId', (0, validateResource_1.default)(task_schema_1.updateTaskSchema), task_controller_1.updateTaskHandler);
};
exports.default = routes;
