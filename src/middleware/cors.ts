import express from 'express';

const allowedOrigins = [
    'http://localhost:8100',
    'https://stormy-cliffs-90695.herokuapp.com',
];

export const register = (app: express.Express) => {
    function allowCrossDomain(req: any, res: any, next: any) {
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        res.setHeader('Access-Control-Allow-Credentials', true);

        var origin = req.headers.origin;
        if (allowedOrigins.indexOf(origin) >= 0) {
            res.setHeader('Access-Control-Allow-Origin', origin);
        }

        if (req.method === 'OPTIONS') {
            res.send(200);
        } else {
            next();
        }
    }

    app.use(allowCrossDomain);
};