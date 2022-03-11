const router = require("express").Router();
const {
  models: { Owner, Walker , Dog, Walks},
} = require("../db");
module.exports = router;




router.post("/", async (req, res, next) => {
    try {
      const dog = await Dog.findOne({ where: { id: 3 }});
      await dog.createWalk({startTime: "2022-03-14 20:40:17.897 +00:00", notes: "she's moody today" })
      // const newWalk = await Walks.create({
      //   startTime: "11:00",
      //   date: "2022-04-28",
      //   Notes: "she's feeling good",
      //   dogId: null,
      //   walkerId: 1
      // })

      res.sendStatus(201)
    } catch (e) {
      next(e);
    }
  });