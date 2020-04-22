const knex = require ("knex");

const connection = {
    client : "mysql",
    connection : {
        host : "localhost",
        user : "root",
        password : "navgurukul",
        database : "Council_project"
    }
};

module.exports = knex(connection);