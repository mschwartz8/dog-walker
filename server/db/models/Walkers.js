const Sequelize = require('sequelize');
const db = require('../db')

const Walker = db.define('walker', {
    name: {
        type: Sequelize.STRING,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true

    }
})

module.exports = Walker