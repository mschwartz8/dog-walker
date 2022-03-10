const Sequelize = require('sequelize');
const db = require('../db')

const Dog = db.define('dog', {
    name: {
        type: Sequelize.STRING,
    },
    personality: {
        type: Sequelize.TEXT,
        defaultValue: "good boy"

    }, 
    size: {
        type: Sequelize.ENUM("small", "medium", "large", "extra-large")
    },
    breed: {
        type: Sequelize.STRING,
        defaultValue: "mixed"

    },
    imageURL: {
        type: Sequelize.STRING,
        defaultValue: "https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"

    }
})

module.exports = Dog;