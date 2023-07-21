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
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
const supertest_1 = __importDefault(require("supertest"));
const server_1 = __importDefault(require("../utils/server"));
const mongodb_memory_server_1 = require("mongodb-memory-server");
const mongoose_1 = __importDefault(require("mongoose"));
const dashboard_model_1 = __importDefault(require("../models/dashboard.model"));
const mockedDashboard_1 = require("./mockedDashboard");
const app = (0, server_1.default)();
describe('dashboard', () => {
    beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
        const mongoServer = yield mongodb_memory_server_1.MongoMemoryServer.create();
        yield mongoose_1.default.connect(mongoServer.getUri());
    }));
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield dashboard_model_1.default.deleteMany({});
        yield new dashboard_model_1.default(mockedDashboard_1.dashboard).save();
    }));
    afterAll(() => __awaiter(void 0, void 0, void 0, function* () {
        yield mongoose_1.default.disconnect();
        yield mongoose_1.default.connection.close();
    }));
    describe('get all dashboards', () => {
        describe('given dashboards does not exist', () => {
            it('should return a 404', () => __awaiter(void 0, void 0, void 0, function* () {
                yield dashboard_model_1.default.deleteMany({});
                yield (0, supertest_1.default)(app).get(`/api/dashboards`).expect(404);
            }));
        });
        describe('given dashboards exists', () => {
            it('should return a 200', () => __awaiter(void 0, void 0, void 0, function* () {
                yield (0, supertest_1.default)(app).get(`/api/dashboards`).expect(200);
            }));
        });
    });
    describe('get single dashboard', () => {
        describe('given dashboard exists', () => {
            it('should return a 200', () => __awaiter(void 0, void 0, void 0, function* () {
                const { statusCode, body } = yield (0, supertest_1.default)(app).get(`/api/dashboards/${mockedDashboard_1.dashboard._id}`);
                expect(statusCode).toBe(200);
                expect(body.name).toEqual(mockedDashboard_1.dashboard.name);
            }));
        });
        describe('given dashboard do not exists', () => {
            it('should return a 404', () => __awaiter(void 0, void 0, void 0, function* () {
                yield dashboard_model_1.default.deleteMany({});
                const { statusCode, body } = yield (0, supertest_1.default)(app).get(`/api/dashboards/${mockedDashboard_1.dashboard._id}`);
                expect(statusCode).toBe(404);
                expect(body.error).toEqual(`Blog by ID ${mockedDashboard_1.dashboard._id} does not exist`);
            }));
        });
    });
    describe('can create dashboard', () => {
        describe('given proper req body', () => {
            it('should return a 200', () => __awaiter(void 0, void 0, void 0, function* () {
                const payload = {
                    name: 'Test dashboard',
                    columns: [
                        {
                            name: "Test col name",
                        }
                    ]
                };
                const { statusCode, body } = yield (0, supertest_1.default)(app).post('/api/dashboards').send(payload);
                expect(statusCode).toBe(200);
                expect(body.name).toEqual(payload.name);
            }));
        });
        describe('given mistaken req body', () => {
            it('should return a 400', () => __awaiter(void 0, void 0, void 0, function* () {
                const payload = {
                    n4me: 'Test dashboard',
                };
                const { statusCode, body } = yield (0, supertest_1.default)(app).post('/api/dashboards').send(payload);
                expect(statusCode).toBe(400);
                expect(body.name).not.toBe(payload.n4me);
            }));
        });
        describe('given only name field', () => {
            it('should return a 200', () => __awaiter(void 0, void 0, void 0, function* () {
                const payload = {
                    name: 'Test dashboard',
                };
                const { statusCode, body } = yield (0, supertest_1.default)(app).post('/api/dashboards').send(payload);
                expect(statusCode).toBe(200);
                expect(body.name).toBe(payload.name);
            }));
        });
    });
    describe('can delete dashboard', () => {
        describe('given dashboard exists', () => {
            it('should return 200', () => __awaiter(void 0, void 0, void 0, function* () {
                const { statusCode } = yield (0, supertest_1.default)(app).delete(`/api/dashboards/${mockedDashboard_1.dashboard._id}`);
                expect(statusCode).toBe(200);
                const boards = yield dashboard_model_1.default.find({});
                expect(boards.length).toBe(0);
            }));
        });
        describe('given dashboard do not exists', () => {
            it('should return 404', () => __awaiter(void 0, void 0, void 0, function* () {
                yield dashboard_model_1.default.deleteMany({});
                const { statusCode } = yield (0, supertest_1.default)(app).delete(`/api/dashboards/${mockedDashboard_1.dashboard._id}`);
                expect(statusCode).toBe(404);
            }));
        });
    });
    describe('can update dashboard', () => {
        describe('given dashboard exist', () => {
            it('should return 200', () => __awaiter(void 0, void 0, void 0, function* () {
                const payload = {
                    name: 'Test dashboard',
                    columns: [
                        {
                            name: "Test col name",
                        }
                    ]
                };
                const { statusCode, body } = yield (0, supertest_1.default)(app).put(`/api/dashboards/${mockedDashboard_1.dashboard._id}`).send(payload);
                expect(statusCode).toBe(200);
                expect(body.name).toEqual(payload.name);
            }));
        });
        describe('given dashboard do not exist', () => {
            it('should return 404', () => __awaiter(void 0, void 0, void 0, function* () {
                yield dashboard_model_1.default.deleteMany({});
                const payload = {
                    name: 'Test dashboard',
                    columns: [
                        {
                            name: "Test col name",
                        }
                    ]
                };
                const { statusCode, body } = yield (0, supertest_1.default)(app).put(`/api/dashboards/${mockedDashboard_1.dashboard._id}`).send(payload);
                expect(statusCode).toBe(404);
                expect(body.name).not.toEqual(payload.name);
            }));
        });
        describe('given receive no payload', () => {
            it('should return 400', () => __awaiter(void 0, void 0, void 0, function* () {
                const payload = {};
                const { statusCode, body } = yield (0, supertest_1.default)(app).put(`/api/dashboards/${mockedDashboard_1.dashboard._id}`).send(payload);
                expect(statusCode).toBe(400);
                expect(body.error).toEqual(`Provide proper payload`);
            }));
        });
    });
});
