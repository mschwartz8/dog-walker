const router = require("express").Router();
const {
  models: { Owner, Walker , Dog, Walks},
} = require("../db");
module.exports = router;




router.post("/", async (req, res, next) => {
    try {
      const owner = await Owner.findOne({where: {email: req.body.email}})
      let ownerId = owner.id
      const dog = await Dog.findOne({ where: { ownerId: ownerId }});
      await dog.createWalk({startTime: req.body.startTime, notes: req.body.notes, dogId: dog.id })
      res.sendStatus(201)
    } catch (e) {
      next(e);
    }
  });

  