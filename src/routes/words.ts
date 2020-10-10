import express from "express";
import { dictionary } from "../storage/words";

const router = express.Router();

router.get("/words.json", function (req: express.Request, res: express.Response) {
    if (req.query.q && typeof (req.query.q) === 'string') {
        const query: string = req.query.q;
        const words = dictionary.filter(w => w.word.includes(query));
        return res.json(words);
    }
    res.json({ message: 'missing query paramter' });
});

module.exports = router;