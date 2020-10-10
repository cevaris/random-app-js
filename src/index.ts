// create an express app
import express from "express";
import * as cors from './middleware/cors';

const app = express();

cors.register(app);

app.use(require('./routes/index'));
app.use(require('./routes/random'));
app.use(require('./routes/words'));

// start the server listening for requests
app.listen(process.env.PORT || 8080,
    () => console.log("Random API is running..."));