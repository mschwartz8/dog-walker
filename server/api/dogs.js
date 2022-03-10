const router = require("express").Router();
const {
  models: { Owner, Walks , Dog },
} = require("../db");
module.exports = router;



router.get("/:id", async (req, res, next) => {
  try {
    const dog = await Dog.findByPk(req.params.id);
    res.send(dog)
  }catch (e) {
    next (e)
  }
})