/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */

import supertest from "supertest";
import createServer from "../utils/server";
import { MongoMemoryServer } from "mongodb-memory-server";
import mongoose from "mongoose";
import DashboardModel from "../models/dashboard.model";
import { dashboard } from "./mockedDashboard";

const app = createServer();

describe('task', () => {

    beforeAll(async () => {
       const mongoServer = await MongoMemoryServer.create();
        
       await mongoose.connect(mongoServer.getUri());
    });
    
    beforeEach(async () => {
        await DashboardModel.deleteMany({});
        await new DashboardModel(dashboard).save();
    });

    afterAll(async() => {
        await mongoose.disconnect();
        await mongoose.connection.close();
    });

    describe('get task', () => {

        describe('given col and task exits', () => {
            it('should return 200', async () => {
                const {statusCode, body} = await supertest(app)
                .get(`/api/dashboards/${dashboard._id}/columns/${dashboard.columns[0]._id}/tasks/${dashboard.columns[0].tasks[0]._id}`);
                expect(statusCode).toBe(200);
                expect(body.title).toEqual(dashboard.columns[0].tasks[0].title);
            });
        });

        describe('given task doesnt exit', () => {
            it('should return 404', async () => {
                const fakeTask = '64ad951d1985a2de99048781';
                const {statusCode, body} = await supertest(app)
                .get(`/api/dashboards/${dashboard._id}/columns/${dashboard.columns[0]._id}/tasks/${fakeTask}`);
                expect(statusCode).toBe(404);
                expect(body.error).toEqual(`Task by ID ${fakeTask} does not exist`);
            });
        });

        describe('given column doesnt exit', () => {
            it('should return 404', async () => {
                const fakeCol = '64ad951d1985a2de99048781';
                const {statusCode, body} = await supertest(app)
                .get(`/api/dashboards/${dashboard._id}/columns/${fakeCol}/tasks/${dashboard.columns[0].tasks[0]._id}`);
                expect(statusCode).toBe(404);
                expect(body.error).toEqual(`Column by ID ${fakeCol} does not exist`);
            });
        });

        describe('given dashboard doesnt exit', () => {
            it('should return 404', async () => {
                const fakeDashboard = '64ad951d1985a2de99048781';
                const {statusCode, body} = await supertest(app)
                .get(`/api/dashboards/${fakeDashboard}/columns/${dashboard.columns[0]._id}/tasks/${dashboard.columns[0].tasks[0]._id}`);
                expect(statusCode).toBe(404);
                expect(body.error).toEqual(`Blog by ID ${fakeDashboard} does not exist`);
            });
        });
    });

    describe('create task', () => {

        describe('given dashboard exists and proper req fields', () => {
            it('should return 200', async () => {
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
                const {statusCode, body} = await supertest(app).post(`/api/dashboards/${dashboard._id}`).send(payload);
                expect(statusCode).toBe(200);
                expect(body[2].title).toEqual(payload.title);
            });
        });

        describe('given dashboard does not exist and proper req fields', () => {
            it('should return 404', async () => {
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
                const {statusCode} = await supertest(app).post(`/api/dashboards/${fakeDashboard}`).send(payload);
                expect(statusCode).toBe(404);
            });
        });

        describe('given dashboard exists and not proper req fields', () => {
            it('should return 400', async () => {
                const payload = {
                    "status": "Todo",
                    "subtasks": [
                        {
                            "title": "with subtask",
                            "isCompleted": false
                        }
                    ]
                };
                const {statusCode, text} = await supertest(app).post(`/api/dashboards/${dashboard._id}`).send(payload);
                expect(statusCode).toBe(400);
                expect(text).toEqual('Title is required');
            });
        });

    });

    describe('delete task', () => {

        describe('given task exists', () => {
            it('should return 200', async() => {
                const {statusCode} = await supertest(app)
                .delete(`/api/dashboards/${dashboard._id}/columns/${dashboard.columns[0]._id}/tasks/${dashboard.columns[0].tasks[0]._id}`);
                expect(statusCode).toBe(200);
            });
        });

        describe('given task doesnt exit', () => {
            it('should return 404', async () => {
                const fakeTask = '64ad951d1985a2de99048781';
                const {statusCode, body} = await supertest(app)
                .delete(`/api/dashboards/${dashboard._id}/columns/${dashboard.columns[0]._id}/tasks/${fakeTask}`);
                expect(statusCode).toBe(404);
                expect(body.error).toEqual(`Task by ID ${fakeTask} does not exist`);
            });
        });

        describe('given column doesnt exit', () => {
            it('should return 404', async () => {
                const fakeCol = '64ad951d1985a2de99048781';
                const {statusCode, body} = await supertest(app)
                .delete(`/api/dashboards/${dashboard._id}/columns/${fakeCol}/tasks/${dashboard.columns[0].tasks[0]._id}`);
                expect(statusCode).toBe(404);
                expect(body.error).toEqual(`Column by ID ${fakeCol} does not exist`);
            });
        });

        describe('given dashboard doesnt exit', () => {
            it('should return 404', async () => {
                const fakeDashboard = '64ad951d1985a2de99048781';
                const {statusCode, body} = await supertest(app)
                .delete(`/api/dashboards/${fakeDashboard}/columns/${dashboard.columns[0]._id}/tasks/${dashboard.columns[0].tasks[0]._id}`);
                expect(statusCode).toBe(404);
                expect(body.error).toEqual(`Blog by ID ${fakeDashboard} does not exist`);
            });
        });
    });

    describe('update task', () => {
        describe('given task exists', () => {
            it('should return 200', async() => {
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

                const {statusCode} = await supertest(app)
                .put(`/api/dashboards/${dashboard._id}/columns/${dashboard.columns[0]._id}/tasks/${dashboard.columns[0].tasks[0]._id}`)
                .send(payload);
                expect(statusCode).toBe(200);
            });
        });

        describe('given task doesnt exit', () => {
            it('should return 404', async () => {
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
                const {statusCode, body} = await supertest(app)
                .put(`/api/dashboards/${dashboard._id}/columns/${dashboard.columns[0]._id}/tasks/${fakeTask}`).send(payload);
                expect(statusCode).toBe(404);
                expect(body.error).toEqual(`Task by ID ${fakeTask} does not exist`);
            });
        });

        describe('given column doesnt exit', () => {
            it('should return 404', async () => {
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
                const {statusCode, body} = await supertest(app)
                .put(`/api/dashboards/${dashboard._id}/columns/${fakeCol}/tasks/${dashboard.columns[0].tasks[0]._id}`).send(payload);
                expect(statusCode).toBe(404);
                expect(body.error).toEqual(`Column by ID ${fakeCol} does not exist`);
            });
        });

        describe('given dashboard doesnt exit', () => {
            it('should return 404', async () => {
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
                const {statusCode, body} = await supertest(app)
                .put(`/api/dashboards/${fakeDashboard}/columns/${dashboard.columns[0]._id}/tasks/${dashboard.columns[0].tasks[0]._id}`).send(payload);
                expect(statusCode).toBe(404);
                expect(body.error).toEqual(`Blog by ID ${fakeDashboard} does not exist`);
            });
        });

        describe('given task exists, new task status changing it column', () => {
            it('should return 200', async() => {
                const task = dashboard.columns[0].tasks[0];
                task.status = "Doing";
                const payload = {
                    ...task
                };

                const {statusCode, body} = await supertest(app)
                .put(`/api/dashboards/${dashboard._id}/columns/${dashboard.columns[0]._id}/tasks/${dashboard.columns[0].tasks[0]._id}`)
                .send(payload);
                expect(statusCode).toBe(200);
                expect(body[1].tasks[2].title).toEqual(payload.title);
            });
        });
    });
});