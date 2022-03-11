const router = require("express").Router();
const {
  models: { Owner, Walker , Dog, Walks},
} = require("../db");
module.exports = router;




router.post("/", async (req, res, next) => {
    try {
      const dog = await Dog.findOne({ where: { id: 3, ownerId: 2 }});
      // await dog.addWalk({startTime: "12:00", date: "2022-04-27", Notes: "she's moody today" })
      const newWalk = await Walks.create({
        startTime: "11:00",
        date: "2022-04-28",
        Notes: "she's feeling good",
        dogId: 3,
        walkerId: 1
      })

      res.status(201).send(newWalk)
    } catch (e) {
      next(e);
    }
  });