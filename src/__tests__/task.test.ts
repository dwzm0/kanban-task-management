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

        describe('given task doesnt exit', () => {
            it('should return 404', async () => {
                const fakeCol = '64ad951d1985a2de99048781';
                const {statusCode, body} = await supertest(app)
                .get(`/api/dashboards/${dashboard._id}/columns/${fakeCol}/tasks/${dashboard.columns[0].tasks[0]._id}`);
                expect(statusCode).toBe(404);
                expect(body.error).toEqual(`Column by ID ${fakeCol} does not exist`);
            });
        });

        describe('given task doesnt exit', () => {
            it('should return 404', async () => {
                const fakeDashboard = '64ad951d1985a2de99048781';
                const {statusCode, body} = await supertest(app)
                .get(`/api/dashboards/${fakeDashboard}/columns/${dashboard.columns[0]._id}/tasks/${dashboard.columns[0].tasks[0]._id}`);
                expect(statusCode).toBe(404);
                expect(body.error).toEqual(`Blog by ID ${fakeDashboard} does not exist`);
            });
        });
    });


});