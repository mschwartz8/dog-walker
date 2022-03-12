const router = require("express").Router();
const {
  models: { Owner, Walker, Dog, Walks },
} = require("../db");
module.exports = router;

router.get("/", async (req, res, next) => {
  try {
    const walks = await Walks.findAll({
      where: {
        walkerId: null,
      },
      include: Dog,
    });
    res.send(walks);
  } catch (e) {
    next(e);
  }
});

//
// where : {
//   WalkerId: null
// }, include: {
//   Model: Dog

// })
