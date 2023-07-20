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
                .get(`/api/dashboards/${dashboard._id}/columns/${dashboard.columns[0]._id}tasks/${dashboard.columns[0].tasks[0]._id}`);
                expect(statusCode).toBe(200);
                console.log(body);

            });
        });
    });


});