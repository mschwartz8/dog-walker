const router = require("express").Router();
const {
  models: { Owner, Walks , Dog },
} = require("../db");
module.exports = router;



router.get("/:id", async (req, res, next) => {
  try {
    const owner = await Owner.findByPk(req.params.id);
    res.send(owner)
  }catch (e) {
    next (e)
  }
})