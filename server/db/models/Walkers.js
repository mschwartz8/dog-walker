const Sequelize = require('sequelize');
const db = require('../db')

const Walker = db.define('walker', {
    name: {
        type: Sequelize.STRING,
    },
})

module.exports = Walker