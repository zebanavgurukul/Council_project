const knex = require("../knexFile"); 

// 1
let post_data = (insertdata) => {
    return knex('council_details').insert(insertdata)
};

// 2
let getid = (ID) => {
    return knex('council_details').select('*').where('ID',ID)
};

// 3
let updata = (updatedata,ID) => {
    return knex('council_details').update(updatedata).where('ID',ID)
};

// 4
let get_data = (search) => { 
    return knex.select('*').from('council_details').where('STUDENT_NAME','like',  '%' +search+ '%')
};

// 5
let getDate = () => {
    return knex.select('*').from('council_details')
};

// 6
let postData = (Data) => {
    return knex('Council_Work').insert(Data)
};

// 7
let getdata = (search) => { 
    return knex.select('*').from('Council_Work').where('COUNCIL_POST','like',  '%' +search+ '%')
};

module.exports = {post_data,getid,updata,get_data,getDate,postData,getdata} 