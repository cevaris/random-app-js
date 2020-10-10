import express from 'express';

const allowedOrigins = [
    'http://localhost:8100',
    'https://randomapp-b753b.web.app',
];

module.exports = function allowCrossDomain(req: express.Request, res: express.Response, next: Function) {
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Credentials', 'true');

    var origin = req.headers.origin;
    if (origin && allowedOrigins.indexOf(origin) >= 0) {
        res.setHeader('Access-Control-Allow-Origin', origin);
    }

    if (req.method === 'OPTIONS') {
        res.send(200);
    } else {
        next();
    }
}