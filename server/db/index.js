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
Walks.belongsTo(Walker)
Walker.hasMany(Walks)
Walks.belongsTo(Dog);
Dog.hasMany(Walks)

// Dog.belongsToMany(Walker, { through: Walks, foreignKey: { name: "dogId", allowNull: false} })
// Walker.belongsToMany(Dog, { through: Walks });

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
