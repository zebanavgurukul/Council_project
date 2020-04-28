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

// 5
council.get('/getData', (req,res) => {
    CouncilDB.getDate()
    .then((Response) => {
        let COUNCIL_START_DATE = Response[0]['COUNCIL_START_DATE']
        if (COUNCIL_START_DATE == '3 month'){
            var minDate = new Date(); 
            minDate.setMonth(minDate.getMonth() + 3);
            console.log(minDate)
            console.log('should be changed council members');
            res.send("should be changed council members")
        }
    }).catch((err) => {
        res.send(err)
    })
});

// 6
council.post('/postApi',(req,res) => {
    let data = {
        Council_members_Work_in_Hindi : req.body.Council_members_Work_in_Hindi,
        Council_members_Work_in_English : req.body.Council_members_Work_in_English,
        COUNCIL_POST : req.body.COUNCIL_POST
    }
    CouncilDB.postData(data)
    .then(() => {
        res.send('insert....')
    }).catch((err) => {
        res.send(err)
    })
});

// 7
council.get('/getapi/:search', (req,res) => {
    var search = req.params.search
    CouncilDB.getdata(search)
    .then((Response) => {
        res.send(Response)
    }).catch((err) => {
        res.send(err)
    })
});

// 8
council.put('/putApi/:ID',(req,res) => {
    let ID = req.params.ID
    let data = {
        Council_members_Work_in_Hindi : req.body.Council_members_Work_in_Hindi,
        Council_members_Work_in_English : req.body.Council_members_Work_in_English,
        COUNCIL_POST : req.body.COUNCIL_POST
    }
    CouncilDB.put(data,ID)
    .then(() => {
        res.send('update....')
    }).catch((err) => {
        res.send(err)
    })
});

module.exports = council