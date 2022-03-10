const Sequelize = require('sequelize');
const db = require('../db')

const Owner = db.define('owner', {
    name: {
        type: Sequelize.STRING,
    },
})

module.exports = Owner