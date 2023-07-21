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
exports.deleteDashboard = exports.findAndUpdateDashboard = exports.findDashboard = exports.createDashboard = exports.getDashboard = void 0;
/* eslint-disable @typescript-eslint/no-unsafe-argument */
const dashboard_model_1 = __importDefault(require("../models/dashboard.model"));
const getDashboard = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const dashboard = yield dashboard_model_1.default.find({});
        return dashboard;
    }
    catch (error) {
        throw new Error(error);
    }
});
exports.getDashboard = getDashboard;
const createDashboard = (input) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newDashboard = yield dashboard_model_1.default.create(input);
        return newDashboard;
    }
    catch (error) {
        throw new Error(error);
    }
});
exports.createDashboard = createDashboard;
const findDashboard = (query, options = { lean: true }) => __awaiter(void 0, void 0, void 0, function* () {
    const dashboard = yield dashboard_model_1.default.findById(query, {}, options);
    return dashboard;
});
exports.findDashboard = findDashboard;
const findAndUpdateDashboard = (query, update, options) => __awaiter(void 0, void 0, void 0, function* () {
    return dashboard_model_1.default.findByIdAndUpdate(query, update, options);
});
exports.findAndUpdateDashboard = findAndUpdateDashboard;
const deleteDashboard = (query) => __awaiter(void 0, void 0, void 0, function* () {
    return dashboard_model_1.default.findByIdAndDelete(query);
});
exports.deleteDashboard = deleteDashboard;
