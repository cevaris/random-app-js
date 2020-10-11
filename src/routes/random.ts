import express from "express";

const router = express.Router();

router.get("/random/string.json", function (req: express.Request, res: express.Response) {
    const defaultLength = 10;
    const length = parseInt(req.query.length as string || defaultLength.toString());
    res.json({ ok: true, value: randString(length) });
});

router.get("/random/number.json", function (req: express.Request, res: express.Response) {
    if (!req.query.min) {
        return res.status(400).json({ ok: false, message: 'missing min query parameter' });
    }
    if (!req.query.max) {
        return res.status(400).json({ ok: false, message: 'missing max query parameter' });
    }

    const min = parseInt(req.query.min as string);
    const max = parseInt(req.query.max as string);

    if (isNaN(min)) {
        return res.status(400).json({ ok: false, message: `min is not a number ${req.query.min}` });
    }
    if (isNaN(max)) {
        return res.status(400).json({ ok: false, message: `max is not a number ${req.query.max}` });
    }

    if (min > max) {
        return res.status(400).json({ ok: false, message: `min value cannot be greater than max value` });
    }

    const randNumber = Math.random() * (max - min) + min;
    res.json({ ok: true, value: randNumber });
});

router.get("/random/choose.json", function (req: express.Request, res: express.Response) {
    if (!req.query.data) {
        return res.status(400).json({ ok: false, message: 'missing data query parameter' });
    }
    const data = (req.query.data as string).split(',');

    if (data.length > 1) {
        res.json({ ok: true, value: data[Math.floor(Math.random() * data.length)] });
    } else {
        res.json({ ok: true, value: data[0] });
    }
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