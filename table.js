var knex = require("knex")({
    client: 'mysql',
    connection: {
        host: "127.0.0.1",
        user: "root",
        password: "navgurukul",
        database: "Council_project"
    },
});
module.exports = knex;

knex.schema.hasTable('council_details').then((exists) => {
    if (!exists) {
        return knex.schema.createTable('council_details', (table) => {
            table.increments('ID')
            table.string('STUDENT_NAME')
            table.string('COUNCIL_POST')
            table.string('COUNCIL_START_DATE')
        })
        .catch((err) => {
            console.log(err,"There is some err while writing the quety")
        })
    }
    return console.log('table is created!')
});