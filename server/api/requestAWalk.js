const router = require("express").Router();
const {
  models: { Owner, Walker , Dog, Walks},
} = require("../db");
module.exports = router;




router.post("/", async (req, res, next) => {
    try {
      const dog = await Dog.findOne({ where: { id: 3 }});
      await dog.createWalk({startTime: req.body.startTime, notes: req.body.notes })
      res.sendStatus(201)
    } catch (e) {
      next(e);
    }
  });

  