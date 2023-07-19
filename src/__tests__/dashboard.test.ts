/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */

import supertest from "supertest";
import createServer from "../utils/server";
import { MongoMemoryServer } from "mongodb-memory-server";
import mongoose from "mongoose";
import DashboardModel from "../models/dashboard.model";
import { initDashboards } from "./mockedDB";


const app = createServer();

describe('dashboard', () => {

    beforeAll(async () => {
       const mongoServer = await MongoMemoryServer.create();
        
       await mongoose.connect(mongoServer.getUri());
    });
    
    beforeEach(async () => {
        await DashboardModel.deleteMany({});
        await Promise.all(initDashboards.map((dashboard) => new DashboardModel(dashboard).save()));
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
    });
}); 