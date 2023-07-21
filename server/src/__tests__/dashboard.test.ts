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

describe('dashboard', () => {

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

    describe('get all dashboards', () => {
        
        describe('given dashboards does not exist', () => {
            it('should return a 404', async () => {
                await DashboardModel.deleteMany({});
                await supertest(app).get(`/api/dashboards`).expect(404);    
            });
        });
        describe('given dashboards exists', () => {
            it('should return a 200', async () => {
                await supertest(app).get(`/api/dashboards`).expect(200);    
            });
        });
    });

    describe('get single dashboard', () => {

        describe('given dashboard exists', () => {
            it('should return a 200', async () => {
                const {statusCode, body} = await supertest(app).get(`/api/dashboards/${dashboard._id}`);

                expect(statusCode).toBe(200);
                expect(body.name).toEqual(dashboard.name);
            });
        });

        describe('given dashboard do not exists', () => {
            it('should return a 404', async () => {
                await DashboardModel.deleteMany({});
                const {statusCode, body} = await supertest(app).get(`/api/dashboards/${dashboard._id}`);

                expect(statusCode).toBe(404);
                expect(body.error).toEqual(`Blog by ID ${dashboard._id} does not exist`);
            });
        });
    });

    describe('can create dashboard', () => {

        describe('given proper req body', () => {
            it('should return a 200', async () => {
                const payload = {
                    name: 'Test dashboard',
                    columns: [
                        {
                            name: "Test col name",
                        }
                    ]
                };
               const {statusCode, body} = await supertest(app).post('/api/dashboards').send(payload);
               expect(statusCode).toBe(200);
               expect(body.name).toEqual(payload.name);
            });
        });

        describe('given mistaken req body', () => {
            it('should return a 400', async () => {
                const payload = {
                    n4me: 'Test dashboard',
                };
               const {statusCode, body} = await supertest(app).post('/api/dashboards').send(payload);
               expect(statusCode).toBe(400);
               expect(body.name).not.toBe(payload.n4me);
            });
        });

        describe('given only name field', () => {
            it('should return a 200', async () => {
                const payload = {
                    name: 'Test dashboard',
                };
               const {statusCode, body} = await supertest(app).post('/api/dashboards').send(payload);
               expect(statusCode).toBe(200);
               expect(body.name).toBe(payload.name);
            });
        });
    });

    describe('can delete dashboard', () => {

        describe('given dashboard exists', () => {
            it('should return 200', async () => {
                const {statusCode} = await supertest(app).delete(`/api/dashboards/${dashboard._id}`);
                expect(statusCode).toBe(200);
                const boards = await DashboardModel.find({});
                expect(boards.length).toBe(0);
            });
        });

        describe('given dashboard do not exists', () => {
            it('should return 404', async () => {
                await DashboardModel.deleteMany({});
                const {statusCode} = await supertest(app).delete(`/api/dashboards/${dashboard._id}`);
                expect(statusCode).toBe(404);
            });
        });
    });

    describe('can update dashboard', () => {

        describe('given dashboard exist', () => {
            it('should return 200', async () => {
                const payload = {
                    name: 'Test dashboard',
                    columns: [
                        {
                            name: "Test col name",
                        }
                    ]
                };
            const {statusCode, body} = await supertest(app).put(`/api/dashboards/${dashboard._id}`).send(payload);
            expect(statusCode).toBe(200);
            expect(body.name).toEqual(payload.name);
            });
        });

        describe('given dashboard do not exist', () => {
            it('should return 404', async () => {
            await DashboardModel.deleteMany({});
            const payload = {
                name: 'Test dashboard',
                columns: [
                    {
                        name: "Test col name",
                    }
                ]
            };
            const {statusCode, body} = await supertest(app).put(`/api/dashboards/${dashboard._id}`).send(payload);
            expect(statusCode).toBe(404);
            expect(body.name).not.toEqual(payload.name);
            });
        });

        describe('given receive no payload', () => {
            it('should return 400', async () => {
            const payload = {};
            const {statusCode, body} = await supertest(app).put(`/api/dashboards/${dashboard._id}`).send(payload);
            expect(statusCode).toBe(400);
            expect(body.error).toEqual(`Provide proper payload`);
            });
        });
    });
}); 