const Sequelize = require('sequelize');
const db = require('../db')

const Owner = db.define('owner', {
    name: {
        type: Sequelize.STRING,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true

    }
})

module.exports = Owner