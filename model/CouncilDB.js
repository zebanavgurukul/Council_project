const knex = require("../knexFile"); 

// 1
let post_data = (insertdata) => {
    return knex('council_details').insert(insertdata)
};

// 2
let getid = (ID) => {
    return knex('council_details').select('*').where('ID',ID)
};

module.exports = {post_data,getid}