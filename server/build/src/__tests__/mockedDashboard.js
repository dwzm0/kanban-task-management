"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dashboard = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.dashboard = {
    "_id": new mongoose_1.default.Types.ObjectId().toString(),
    "name": "Platform Launch",
    "columns": [
        {
            "_id": new mongoose_1.default.Types.ObjectId().toString(),
            "name": "Todo",
            "tasks": [
                {
                    "_id": new mongoose_1.default.Types.ObjectId().toString(),
                    "title": "Build UI for onboarding flow",
                    "description": "",
                    "status": "Todo",
                    "subtasks": [
                        {
                            "_id": new mongoose_1.default.Types.ObjectId().toString(),
                            "title": "Sign up page",
                            "isCompleted": true
                        }
                    ]
                },
                {
                    "title": "Build UI for search",
                    "description": "",
                    "status": "Todo",
                    "subtasks": [
                        {
                            "title": "Search page",
                            "isCompleted": false
                        }
                    ]
                },
            ]
        },
        {
            "_id": new mongoose_1.default.Types.ObjectId().toString(),
            "name": "Doing",
            "tasks": [
                {
                    "_id": new mongoose_1.default.Types.ObjectId().toString(),
                    "title": "Design settings and search pages",
                    "description": "",
                    "status": "Doing",
                    "subtasks": [
                        {
                            "_id": new mongoose_1.default.Types.ObjectId().toString(),
                            "title": "Settings - Account page",
                            "isCompleted": true
                        },
                    ]
                },
                {
                    "_id": new mongoose_1.default.Types.ObjectId().toString(),
                    "title": "Add account management endpoints",
                    "description": "",
                    "status": "Doing",
                    "subtasks": [
                        {
                            "_id": new mongoose_1.default.Types.ObjectId().toString(),
                            "title": "Upgrade plan",
                            "isCompleted": true
                        },
                        {
                            "_id": new mongoose_1.default.Types.ObjectId().toString(),
                            "title": "Cancel plan",
                            "isCompleted": true
                        },
                    ]
                },
            ]
        },
    ]
};
