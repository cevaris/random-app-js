import express from "express";
import { v4 as uuidV4 } from "uuid";

const router = express.Router();

router.get("/random/string.json", function (req: express.Request, res: express.Response) {
    res.json({ value: uuidV4() });
});

module.exports = router;