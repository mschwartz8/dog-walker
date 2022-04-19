const Sequelize = require('sequelize');
const db = require('../db')

const Walks = db.define('walks', {
    startTime : {
        type: Sequelize.DATE,
    },
    notes: {
        type: Sequelize.TEXT

    },

})

module.exports = Walks