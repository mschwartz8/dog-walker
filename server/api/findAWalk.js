const router = require("express").Router();
const {
  models: { Owner, Walker , Dog, Walk},
} = require("../db");
module.exports = router;




router.post("/", async (req, res, next) => {
    try {
      const dog = await Dog.findOne({ where: { id: 1, ownerId: 1 }, include: Walk});
      // const walker = await Walker.findByPk(2)
      await dog.addWalk()
      res.status(201)
    } catch (e) {
      next(e);
    }
  });