const Sequelize = require('sequelize');
const db = require('../db')

const Walks = db.define('walks', {
    startTime : {
        type: Sequelize.STRING,
        TimeCol: {
            type: Sequelize.TIME
          }
    },
    date : {
        type: Sequelize.DATEONLY
    },
    Notes: {
        type: Sequelize.TEXT

    }
})

module.exports = Walks