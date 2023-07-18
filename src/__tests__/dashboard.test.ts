import supertest from "supertest";
import createServer from "../utils/server";

const app = createServer();

describe('dashboard', () => {

    describe('get all dashboards', () => {
        
        describe('given dashboards does not exist', () => {
            it('should return a 404', async () => {
                await supertest(app).get(`/api/dashboards`).expect(404);
            });
        });
    });
}); 