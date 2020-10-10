import express from "express";

const router = express.Router();

interface Request extends express.Request {
    query: {
        length?: string
    }
}

router.get("/random/string.json", function (req: Request, res: express.Response) {
    const defaultLength = 10;
    const length = parseInt(req.query.length || defaultLength.toString());
    res.json({ value: randString(length) });
});

module.exports = router;

function randString(length: number) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}