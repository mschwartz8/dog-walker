//this is the access point for all things database related!

const db = require('./db')

const User = require('./models/User')
const Owner = require('./models/Owner')
const Dog = require('./models/Dogs')
const Walker = require('./models/Walkers')
const Walks = require('./models/Walks')

//associations could go here!
Dog.belongsTo(Owner)
Owner.hasMany(Dog)
Dog.belongsToMany(Walker, { through: Walks })
Walker.belongsToMany(Dog, { through: Walks });

module.exports = {
  db,
  models: {
    User,
    Owner,
    Dog,
    Walker,
    Walks
  },
}
