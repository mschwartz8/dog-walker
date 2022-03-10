const router = require("express").Router();
const {
  models: {Walker},
} = require("../db");
module.exports = router;



router.get("/:id", async (req, res, next) => {
  try {
    const walker = await Walker.findByPk(req.params.id);
    res.send(walker)
  }catch (e) {
    next (e)
  }
})