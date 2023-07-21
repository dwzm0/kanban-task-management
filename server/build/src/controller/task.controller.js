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
exports.updateTaskHandler = exports.deleteTaskHandler = exports.createTaskHandler = exports.getTaskHandler = void 0;
const logger_1 = __importDefault(require("../utils/logger"));
const findDashboardById_1 = __importDefault(require("../utils/findDashboardById"));
const task_service_1 = require("../services/task.service");
const findColumnById_1 = __importDefault(require("../utils/findColumnById"));
const getTaskHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const dashBoardId = req.params.id;
        const columnId = req.params.colId;
        const taskId = req.params.taskId;
        const dashboard = yield (0, findDashboardById_1.default)(dashBoardId, res);
        if (!dashboard) {
            return res.status(404).send({ error: `Blog by ID ${dashBoardId} does not exist` });
        }
        const column = yield (0, findColumnById_1.default)(dashboard, columnId, res);
        if (!column) {
            return res.status(404).send({ error: `Column by ID ${columnId} does not exist` });
        }
        const task = (0, task_service_1.findTaskById)(column, taskId);
        if (!task) {
            return res.status(404).send({ error: `Task by ID ${taskId} does not exist` });
        }
        return res.status(200).send(task);
    }
    catch (error) {
        logger_1.default.error(error);
        return res.status(409).send(error.message);
    }
});
exports.getTaskHandler = getTaskHandler;
const createTaskHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const dashBoardId = req.params.id;
        const dashboard = yield (0, findDashboardById_1.default)(dashBoardId, res);
        if (!dashboard) {
            return res.status(404).send({ error: `Blog by ID ${dashBoardId} does not exist` });
        }
        const task = req.body;
        const currentTasks = yield (0, task_service_1.createTask)(dashBoardId, task);
        return res.status(200).send(currentTasks);
    }
    catch (error) {
        logger_1.default.error(error);
        return res.status(409).send(error.message);
    }
});
exports.createTaskHandler = createTaskHandler;
const deleteTaskHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const dashBoardId = req.params.id;
        const columnId = req.params.colId;
        const taskId = req.params.taskId;
        const dashboard = yield (0, findDashboardById_1.default)(dashBoardId, res);
        if (!dashboard) {
            return res.status(404).send({ error: `Blog by ID ${dashBoardId} does not exist` });
        }
        const column = yield (0, findColumnById_1.default)(dashboard, columnId, res);
        if (!column) {
            return res.status(404).send({ error: `Column by ID ${columnId} does not exist` });
        }
        const deletedTaskInd = yield (0, task_service_1.deleteTaskById)(dashboard, columnId, taskId);
        if (deletedTaskInd == -1) {
            return res.status(404).send({ error: `Task by ID ${taskId} does not exist` });
        }
        return res.sendStatus(200);
    }
    catch (error) {
        logger_1.default.error(error);
        return res.status(409).send(error.message);
    }
});
exports.deleteTaskHandler = deleteTaskHandler;
const updateTaskHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const dashBoardId = req.params.id;
        const columnId = req.params.colId;
        const taskId = req.params.taskId;
        const dashboard = yield (0, findDashboardById_1.default)(dashBoardId, res);
        if (!dashboard) {
            return res.status(404).send({ error: `Blog by ID ${dashBoardId} does not exist` });
        }
        const column = yield (0, findColumnById_1.default)(dashboard, columnId, res);
        if (!column) {
            return res.status(404).send({ error: `Column by ID ${columnId} does not exist` });
        }
        const taskIndexInArr = (_a = column === null || column === void 0 ? void 0 : column.tasks) === null || _a === void 0 ? void 0 : _a.findIndex(task => task._id == taskId);
        if (taskIndexInArr == -1) {
            return res.status(404).send({ error: `Task by ID ${taskId} does not exist` });
        }
        const update = req.body;
        const columns = yield (0, task_service_1.updateTaskById)(dashboard, columnId, taskId, update, taskIndexInArr);
        return res.status(200).send(columns);
    }
    catch (error) {
        logger_1.default.error(error);
        return res.status(409).send(error.message);
    }
});
exports.updateTaskHandler = updateTaskHandler;
