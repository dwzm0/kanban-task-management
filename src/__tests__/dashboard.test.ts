/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */

import supertest from "supertest";
import createServer from "../utils/server";
import { MongoMemoryServer } from "mongodb-memory-server";
import mongoose from "mongoose";


const app = createServer();

describe('dashboard', () => {

    beforeAll(async () => {
       const mongoServer = await MongoMemoryServer.create();
        
       await mongoose.connect(mongoServer.getUri());
    });
    
    afterAll(async() => {
        await mongoose.disconnect();
        await mongoose.connection.close();
    });

    describe('get all dashboards', () => {
        
        describe('given dashboards does not exist', () => {
            it('should return a 404', async () => {
                await supertest(app).get(`/api/dashboards`).expect(404);    
            });
        });
    });
}); 