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

router.put("/", async (req, res, next) => {
  try {   
    const walker = await Walker.findOne({where: {email: req.body.email}});
    const walk = await Walks.findOne({where: {dogId: req.body.dogId, startTime: req.body.startTime }});
    res.send( await walk.update({walkerId: walker.id}))

  } catch (e){
    next(e)
  }
})