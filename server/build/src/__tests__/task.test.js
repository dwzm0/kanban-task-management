"use strict";
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
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
const supertest_1 = __importDefault(require("supertest"));
const server_1 = __importDefault(require("../utils/server"));
const mongodb_memory_server_1 = require("mongodb-memory-server");
const mongoose_1 = __importDefault(require("mongoose"));
const dashboard_model_1 = __importDefault(require("../models/dashboard.model"));
const mockedDashboard_1 = require("./mockedDashboard");
const app = (0, server_1.default)();
describe('task', () => {
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
    describe('get task', () => {
        describe('given col and task exits', () => {
            it('should return 200', () => __awaiter(void 0, void 0, void 0, function* () {
                const { statusCode, body } = yield (0, supertest_1.default)(app)
                    .get(`/api/dashboards/${mockedDashboard_1.dashboard._id}/columns/${mockedDashboard_1.dashboard.columns[0]._id}/tasks/${mockedDashboard_1.dashboard.columns[0].tasks[0]._id}`);
                expect(statusCode).toBe(200);
                expect(body.title).toEqual(mockedDashboard_1.dashboard.columns[0].tasks[0].title);
            }));
        });
        describe('given task doesnt exit', () => {
            it('should return 404', () => __awaiter(void 0, void 0, void 0, function* () {
                const fakeTask = '64ad951d1985a2de99048781';
                const { statusCode, body } = yield (0, supertest_1.default)(app)
                    .get(`/api/dashboards/${mockedDashboard_1.dashboard._id}/columns/${mockedDashboard_1.dashboard.columns[0]._id}/tasks/${fakeTask}`);
                expect(statusCode).toBe(404);
                expect(body.error).toEqual(`Task by ID ${fakeTask} does not exist`);
            }));
        });
        describe('given column doesnt exit', () => {
            it('should return 404', () => __awaiter(void 0, void 0, void 0, function* () {
                const fakeCol = '64ad951d1985a2de99048781';
                const { statusCode, body } = yield (0, supertest_1.default)(app)
                    .get(`/api/dashboards/${mockedDashboard_1.dashboard._id}/columns/${fakeCol}/tasks/${mockedDashboard_1.dashboard.columns[0].tasks[0]._id}`);
                expect(statusCode).toBe(404);
                expect(body.error).toEqual(`Column by ID ${fakeCol} does not exist`);
            }));
        });
        describe('given dashboard doesnt exit', () => {
            it('should return 404', () => __awaiter(void 0, void 0, void 0, function* () {
                const fakeDashboard = '64ad951d1985a2de99048781';
                const { statusCode, body } = yield (0, supertest_1.default)(app)
                    .get(`/api/dashboards/${fakeDashboard}/columns/${mockedDashboard_1.dashboard.columns[0]._id}/tasks/${mockedDashboard_1.dashboard.columns[0].tasks[0]._id}`);
                expect(statusCode).toBe(404);
                expect(body.error).toEqual(`Blog by ID ${fakeDashboard} does not exist`);
            }));
        });
    });
    describe('create task', () => {
        describe('given dashboard exists and proper req fields', () => {
            it('should return 200', () => __awaiter(void 0, void 0, void 0, function* () {
                const payload = {
                    "title": "Test task",
                    "status": "Todo",
                    "subtasks": [
                        {
                            "title": "with subtask",
                            "isCompleted": false
                        }
                    ]
                };
                const { statusCode, body } = yield (0, supertest_1.default)(app).post(`/api/dashboards/${mockedDashboard_1.dashboard._id}`).send(payload);
                expect(statusCode).toBe(200);
                expect(body[2].title).toEqual(payload.title);
            }));
        });
        describe('given dashboard does not exist and proper req fields', () => {
            it('should return 404', () => __awaiter(void 0, void 0, void 0, function* () {
                const fakeDashboard = '64ad951d1985a2de99048781';
                const payload = {
                    "title": "Test task",
                    "status": "Todo",
                    "subtasks": [
                        {
                            "title": "with subtask",
                            "isCompleted": false
                        }
                    ]
                };
                const { statusCode } = yield (0, supertest_1.default)(app).post(`/api/dashboards/${fakeDashboard}`).send(payload);
                expect(statusCode).toBe(404);
            }));
        });
        describe('given dashboard exists and not proper req fields', () => {
            it('should return 400', () => __awaiter(void 0, void 0, void 0, function* () {
                const payload = {
                    "status": "Todo",
                    "subtasks": [
                        {
                            "title": "with subtask",
                            "isCompleted": false
                        }
                    ]
                };
                const { statusCode, text } = yield (0, supertest_1.default)(app).post(`/api/dashboards/${mockedDashboard_1.dashboard._id}`).send(payload);
                expect(statusCode).toBe(400);
                expect(text).toEqual('Title is required');
            }));
        });
    });
    describe('delete task', () => {
        describe('given task exists', () => {
            it('should return 200', () => __awaiter(void 0, void 0, void 0, function* () {
                const { statusCode } = yield (0, supertest_1.default)(app)
                    .delete(`/api/dashboards/${mockedDashboard_1.dashboard._id}/columns/${mockedDashboard_1.dashboard.columns[0]._id}/tasks/${mockedDashboard_1.dashboard.columns[0].tasks[0]._id}`);
                expect(statusCode).toBe(200);
            }));
        });
        describe('given task doesnt exit', () => {
            it('should return 404', () => __awaiter(void 0, void 0, void 0, function* () {
                const fakeTask = '64ad951d1985a2de99048781';
                const { statusCode, body } = yield (0, supertest_1.default)(app)
                    .delete(`/api/dashboards/${mockedDashboard_1.dashboard._id}/columns/${mockedDashboard_1.dashboard.columns[0]._id}/tasks/${fakeTask}`);
                expect(statusCode).toBe(404);
                expect(body.error).toEqual(`Task by ID ${fakeTask} does not exist`);
            }));
        });
        describe('given column doesnt exit', () => {
            it('should return 404', () => __awaiter(void 0, void 0, void 0, function* () {
                const fakeCol = '64ad951d1985a2de99048781';
                const { statusCode, body } = yield (0, supertest_1.default)(app)
                    .delete(`/api/dashboards/${mockedDashboard_1.dashboard._id}/columns/${fakeCol}/tasks/${mockedDashboard_1.dashboard.columns[0].tasks[0]._id}`);
                expect(statusCode).toBe(404);
                expect(body.error).toEqual(`Column by ID ${fakeCol} does not exist`);
            }));
        });
        describe('given dashboard doesnt exit', () => {
            it('should return 404', () => __awaiter(void 0, void 0, void 0, function* () {
                const fakeDashboard = '64ad951d1985a2de99048781';
                const { statusCode, body } = yield (0, supertest_1.default)(app)
                    .delete(`/api/dashboards/${fakeDashboard}/columns/${mockedDashboard_1.dashboard.columns[0]._id}/tasks/${mockedDashboard_1.dashboard.columns[0].tasks[0]._id}`);
                expect(statusCode).toBe(404);
                expect(body.error).toEqual(`Blog by ID ${fakeDashboard} does not exist`);
            }));
        });
    });
    describe('update task', () => {
        describe('given task exists', () => {
            it('should return 200', () => __awaiter(void 0, void 0, void 0, function* () {
                const payload = {
                    "title": "Test task",
                    "status": "Todo",
                    "subtasks": [
                        {
                            "title": "with subtask",
                            "isCompleted": false
                        }
                    ]
                };
                const { statusCode } = yield (0, supertest_1.default)(app)
                    .put(`/api/dashboards/${mockedDashboard_1.dashboard._id}/columns/${mockedDashboard_1.dashboard.columns[0]._id}/tasks/${mockedDashboard_1.dashboard.columns[0].tasks[0]._id}`)
                    .send(payload);
                expect(statusCode).toBe(200);
            }));
        });
        describe('given task doesnt exit', () => {
            it('should return 404', () => __awaiter(void 0, void 0, void 0, function* () {
                const payload = {
                    "title": "Test task",
                    "status": "Todo",
                    "subtasks": [
                        {
                            "title": "with subtask",
                            "isCompleted": false
                        }
                    ]
                };
                const fakeTask = '64ad951d1985a2de99048781';
                const { statusCode, body } = yield (0, supertest_1.default)(app)
                    .put(`/api/dashboards/${mockedDashboard_1.dashboard._id}/columns/${mockedDashboard_1.dashboard.columns[0]._id}/tasks/${fakeTask}`).send(payload);
                expect(statusCode).toBe(404);
                expect(body.error).toEqual(`Task by ID ${fakeTask} does not exist`);
            }));
        });
        describe('given column doesnt exit', () => {
            it('should return 404', () => __awaiter(void 0, void 0, void 0, function* () {
                const payload = {
                    "title": "Test task",
                    "status": "Todo",
                    "subtasks": [
                        {
                            "title": "with subtask",
                            "isCompleted": false
                        }
                    ]
                };
                const fakeCol = '64ad951d1985a2de99048781';
                const { statusCode, body } = yield (0, supertest_1.default)(app)
                    .put(`/api/dashboards/${mockedDashboard_1.dashboard._id}/columns/${fakeCol}/tasks/${mockedDashboard_1.dashboard.columns[0].tasks[0]._id}`).send(payload);
                expect(statusCode).toBe(404);
                expect(body.error).toEqual(`Column by ID ${fakeCol} does not exist`);
            }));
        });
        describe('given dashboard doesnt exit', () => {
            it('should return 404', () => __awaiter(void 0, void 0, void 0, function* () {
                const payload = {
                    "title": "Test task",
                    "status": "Todo",
                    "subtasks": [
                        {
                            "title": "with subtask",
                            "isCompleted": false
                        }
                    ]
                };
                const fakeDashboard = '64ad951d1985a2de99048781';
                const { statusCode, body } = yield (0, supertest_1.default)(app)
                    .put(`/api/dashboards/${fakeDashboard}/columns/${mockedDashboard_1.dashboard.columns[0]._id}/tasks/${mockedDashboard_1.dashboard.columns[0].tasks[0]._id}`).send(payload);
                expect(statusCode).toBe(404);
                expect(body.error).toEqual(`Blog by ID ${fakeDashboard} does not exist`);
            }));
        });
        describe('given task exists, new task status changing it column', () => {
            it('should return 200', () => __awaiter(void 0, void 0, void 0, function* () {
                const task = mockedDashboard_1.dashboard.columns[0].tasks[0];
                task.status = "Doing";
                const payload = Object.assign({}, task);
                const { statusCode, body } = yield (0, supertest_1.default)(app)
                    .put(`/api/dashboards/${mockedDashboard_1.dashboard._id}/columns/${mockedDashboard_1.dashboard.columns[0]._id}/tasks/${mockedDashboard_1.dashboard.columns[0].tasks[0]._id}`)
                    .send(payload);
                expect(statusCode).toBe(200);
                expect(body[1].tasks[2].title).toEqual(payload.title);
            }));
        });
    });
});
