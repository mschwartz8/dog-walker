'use strict'

const {db, models: {User, Owner, Dog, Walker, Walks} } = require('../server/db')

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
  await db.sync({ force: true }) // clears db and matches models to tables
  console.log('db synced!')

  // Creating Users
  const users = await Promise.all([
    User.create({ username: 'cody', password: '123' }),
    User.create({ username: 'murphy', password: '123' }),
  ])

  // Create Owners
  const owners = await Promise.all([
    Owner.create({ name: 'Sheena'}),
    Owner.create({ name: 'Keenan' }),
    Owner.create({ name: 'Kels' })
  ])

  // Create Walkers
  const walkers = await Promise.all([
    Walker.create({ name: 'Test' }),
    Walker.create({ name: 'CeeCee'}),
    Walker.create({ name: 'DeeDee' }),
    Walker.create({ name: 'FeeFee' })
    
  ])

  // Create Dogs 
  const dogs = await Promise.all([
    Dog.create({ name: 'Fluffy', personality: "Adventurous, Playful, Active, Cuddly", breed: "Beagle", size: "medium", imageURL:"https://images.pexels.com/photos/879788/pexels-photo-879788.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"  }),
    Dog.create({ name: 'Orchard', personality: "Energetic, Self-Sufficient, Happy with Alone Time", breed: "Greyhound", size: "large", imageURL: "https://images.pexels.com/photos/10117827/pexels-photo-10117827.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" }),
    Dog.create({ name: 'Meena', personality: "Loyal, Good-natured, Curious", breed: "Alaskan Malmute", size: "large", imageURL: "https://images.pexels.com/photos/5745210/pexels-photo-5745210.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"  })
  ])

  // assign dog to Owner
  await dogs[0].setOwner(owners[0]);
  await dogs[1].setOwner(owners[0]);
  await dogs[2].setOwner(owners[1]);

  // Create faux Owner walk requests
  // const walks = await Promise.all([
  //   // Walks.create({ startTime: "13:00", date: "2022-04-28", Notes: "please bring his favorite chew toy that looks like cheeseburger", dogId: 1, walkerId: 1}),
  //   // Walks.create({ startTime: "14:00", date: "2022-04-29", Notes: "please use her raincoat with the avocadoes doing yoga on it", dogId: 2, walkerId: 1 }),
  //   // Walks.create({ startTime: "11:00", date: "2022-04-30", Notes: "feel free to give her treats", dogId: 3, walkerId: 1 }),

  // ])

  






  
  // Create Dogs

  console.log(`seeded ${users.length} users`)
  console.log(`seeded successfully`)
  return {
    users: {
      cody: users[0],
      murphy: users[1]
    }
  }
}

/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
