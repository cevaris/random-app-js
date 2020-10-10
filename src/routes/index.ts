import express from "express";

const router = express.Router();

router.get("/", function (req: express.Request, res: express.Response) {
    res.send("<h1>Random API</h1>")
})

module.exports = router;