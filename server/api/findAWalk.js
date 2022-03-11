const router = require("express").Router();
const {
  models: { Owner, Walker , Dog, Walks},
} = require("../db");
module.exports = router;




router.post("/", async (req, res, next) => {
    try {
      const dog = await Dog.findOne({ where: { id: 3 }});
      await dog.createWalk({startTime: "2022-03-14 20:40:17.897 +00:00", notes: "she's moody today" })
      res.sendStatus(201)
    } catch (e) {
      next(e);
    }
  });