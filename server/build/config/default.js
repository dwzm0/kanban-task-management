"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.default = {
    port: 3001,
    dbUri: `mongodb+srv://dwzm00:${process.env.PASSWORD}@cluster0.ii6blwz.mongodb.net/Dashboard?retryWrites=true&w=majority`,
};
