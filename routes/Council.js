const express = require("express");
const council = express();
const CouncilDB   = require("../model/CouncilDB")

// 1
council.post('/postdata',(req,res) => {
    let insertdata = {
        STUDENT_NAME : req.body.STUDENT_NAME,
        COUNCIL_POST : req.body.COUNCIL_POST,
        COUNCIL_START_DATE : req.body.COUNCIL_START_DATE
    }
    CouncilDB.post_data(insertdata)
    .then(() => {
        res.send('insert.....')
    }).catch((err) => {
        res.send(err)
    })
});

// 2
council.get('/getdata/:ID', (req,res) => {
    var ID = req.params.ID
    CouncilDB.getid(ID)
    .then((Response) => {
        res.send(Response)
    }).catch((err) => {
        res.send(err)
    })
});

// 3
council.put('/update/:ID' ,(req,res) => {
    var ID = req.params.ID
    let updatedata = {
        STUDENT_NAME : req.body.STUDENT_NAME,
        COUNCIL_POST : req.body.COUNCIL_POST,
        COUNCIL_START_DATE : req.body.COUNCIL_START_DATE
    }
    CouncilDB.updata(updatedata,ID)
    .then(() => {
        res.send('update....')
    }).catch((err) => {
        res.send(err)
    })
});

// 4
council.get('/get/:search', (req,res) => {
    var search = req.params.search
    CouncilDB.get_data(search)
    .then((Response) => {
        res.send(Response)
    }).catch((err) => {
        res.send(err)
    })
});

module.exports = council