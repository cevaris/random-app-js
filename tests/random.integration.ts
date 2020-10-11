import http from 'http';
import request from 'supertest';
import { app } from '../src/app';

let server: http.Server;

beforeAll((done) => {
    // server does not get shutdown properly
    // https://github.com/facebook/jest/issues/6907
    server = app.listen(done);
})

afterAll(async (done) => {
    // after all test are executed, shutdown server
    server.close(done);
});

describe('random string api', () => {
    it('returns 200 for correct parameters', async () => {
        const length = 5;
        const resp = await request(server)
            .get(`/random/string.json?length=${length}`);

        expect(resp.status).toBe(200);
        expect(resp.body.ok).toBeTruthy();
        expect(resp.body.value.length).toBe(5);
    });

    it('returns 400 if missing length parameter', async () => {
        const resp = await request(server)
            .get(`/random/string.json`);

        expect(resp.status).toBe(400);
        expect(resp.body.ok).toBeFalsy();
        expect(resp.body.message).toBeDefined();
    });
});


describe('random number api', () => {
    it('returns 200 for correct parameters', async () => {
        const min = 5;
        const max = 15;
        const resp = await request(server)
            .get(`/random/number.json?min=${min}&max=${max}`);

        expect(resp.status).toBe(200);
        expect(resp.body.ok).toBeTruthy();
        expect(isNaN(resp.body.value)).toBeFalsy();
    });

    it('returns 400 for if min is > max', async () => {
        const min = 15;
        const max = 5;
        const resp = await request(server)
            .get(`/random/number.json?min=${min}&max=${max}`);

        expect(resp.status).toBe(400);
        expect(resp.body.ok).toBeFalsy();
        expect(resp.body.message).toBeDefined();
    });

    it('returns 400 if missing min parameter', async () => {
        const min = 5;
        const resp = await request(server)
            .get(`/random/number.json?min=${min}`);

        expect(resp.status).toBe(400);
        expect(resp.body.ok).toBeFalsy();
        expect(resp.body.message).toBeDefined();
    });

    it('returns 400 if missing max parameter', async () => {
        const max = 5;
        const resp = await request(server)
            .get(`/random/number.json?max=${max}`);

        expect(resp.status).toBe(400);
        expect(resp.body.ok).toBeFalsy();
        expect(resp.body.message).toBeDefined();
    });
});