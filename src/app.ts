import express from "express";

export const app = express();

app.use(require('./middleware/cors'));

app.use(require('./routes/index'));
app.use(require('./routes/random'));
app.use(require('./routes/words'));
