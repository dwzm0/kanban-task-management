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
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const dashboard_service_1 = require("../services/dashboard.service");
const findDashboardById = (dashBoardId, res) => __awaiter(void 0, void 0, void 0, function* () {
    const dashboard = yield (0, dashboard_service_1.findDashboard)(dashBoardId);
    if (!mongoose_1.Types.ObjectId.isValid(dashBoardId)) {
        return res.status(404).send({ error: `${dashBoardId} is not valid id` });
    }
    else {
        return dashboard;
    }
});
exports.default = findDashboardById;
