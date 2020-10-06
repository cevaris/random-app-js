// create an express app
import express from "express";
import { v4 as uuidV4 } from "uuid";
import * as cors from './middleware/cors';
import { dictionary } from "./words";

const app = express();

cors.register(app);

// define the first route
app.get("/", function (req, res) {
    res.send("<h1>Hello World!</h1>")
})

app.get("/random/string.json", function (req, res) {
    res.json({ value: uuidV4() });
})

app.get("/words.json", function (req, res) {
    if (req.query.q && typeof (req.query.q) === 'string') {
        const query: string = req.query.q;
        const words = dictionary.filter(w => w.word.includes(query));
        return res.json(words);
    }
    res.json({ message: 'missing query paramter' });
})

// start the server listening for requests
app.listen(process.env.PORT || 3000,
    () => console.log("Random API is running..."));