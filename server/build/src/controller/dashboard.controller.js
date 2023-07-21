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
exports.findAndUpdateDashboardHandler = exports.deleteDashboardHandler = exports.createDashboardHandler = exports.getSingleDashboardHandler = exports.getDashboardsHander = void 0;
const dashboard_service_1 = require("../services/dashboard.service");
const logger_1 = __importDefault(require("../utils/logger"));
const dashboard_model_1 = __importDefault(require("../models/dashboard.model"));
const findDashboardById_1 = __importDefault(require("../utils/findDashboardById"));
const getDashboardsHander = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const dashboards = yield (0, dashboard_service_1.getDashboard)();
        if (dashboards.length === 0) {
            return res.status(404).send({ error: "Dasboards missing" });
        }
        return res.status(200).json(dashboards);
    }
    catch (error) {
        logger_1.default.error(error);
        return res.status(409).send(error.message);
    }
});
exports.getDashboardsHander = getDashboardsHander;
const getSingleDashboardHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const dashBoardId = req.params.id;
        const dashboard = yield (0, findDashboardById_1.default)(dashBoardId, res);
        if (!dashboard) {
            return res.status(404).send({ error: `Blog by ID ${dashBoardId} does not exist` });
        }
        return res.status(200).send(dashboard);
    }
    catch (error) {
        logger_1.default.error(error);
        return res.status(409).send(error.message);
    }
});
exports.getSingleDashboardHandler = getSingleDashboardHandler;
const createDashboardHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const dashboard = new dashboard_model_1.default({
            name: req.body.name,
            columns: req.body.columns,
        });
        const newDashboard = yield (0, dashboard_service_1.createDashboard)(dashboard);
        return res.status(200).json(newDashboard);
    }
    catch (error) {
        logger_1.default.error(error);
        return res.status(409).send(error.message);
    }
});
exports.createDashboardHandler = createDashboardHandler;
const deleteDashboardHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const dashBoardId = req.params.id;
        const dashboard = yield (0, findDashboardById_1.default)(dashBoardId, res);
        if (!dashboard) {
            return res.status(404).send({ error: `Blog by ID ${dashBoardId} does not exist` });
        }
        yield (0, dashboard_service_1.deleteDashboard)(dashBoardId);
        return res.sendStatus(200);
    }
    catch (error) {
        logger_1.default.error(error);
        return res.status(409).send(error.message);
    }
});
exports.deleteDashboardHandler = deleteDashboardHandler;
const findAndUpdateDashboardHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const dashBoardId = req.params.id;
        const dashboard = yield (0, findDashboardById_1.default)(dashBoardId, res);
        if (!dashboard) {
            return res.status(404).send({ error: `Blog by ID ${dashBoardId} does not exist` });
        }
        if (Object.keys(req.body).length == 0) {
            return res.status(400).send({ error: `Provide proper payload` });
        }
        const update = req.body;
        const updatedDashboard = yield (0, dashboard_service_1.findAndUpdateDashboard)(dashBoardId, update, {
            new: true,
        });
        return res.status(200).send(updatedDashboard);
    }
    catch (error) {
        logger_1.default.error(error);
        return res.status(409).send(error.message);
    }
});
exports.findAndUpdateDashboardHandler = findAndUpdateDashboardHandler;
