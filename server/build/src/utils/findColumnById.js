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
const mongoose_1 = require("mongoose");
const dashboard_model_1 = __importDefault(require("../models/dashboard.model"));
const findColumnById = (dashboard, columnId, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const bord = yield dashboard_model_1.default.findById(dashboard._id); // to have model instance, otherwise I have no methods and model fields.
    if (!mongoose_1.Types.ObjectId.isValid(columnId)) {
        return res.status(404).send({ error: `${columnId} is not valid id` });
    }
    const column = (_a = bord === null || bord === void 0 ? void 0 : bord.columns) === null || _a === void 0 ? void 0 : _a.find(item => item._id == columnId);
    return column;
});
exports.default = findColumnById;
