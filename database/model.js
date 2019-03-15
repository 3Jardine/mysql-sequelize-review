const sequelize = require('sequelize');
const connection = require('./index');

const Model = connection.define(
    'Todo',
    {
        name: { type: sequelize.STRING, allowNULL: false },
    },
    { timestamps: false },
);

connection
    .sync()
    .then(() => console.log('Synced with MySQL Database'))
    .catch(error => console.error(error));

module.exports = Model;