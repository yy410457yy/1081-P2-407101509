const Midterm = require("../models/midtermModel");

exports.getMidterm = (req, res, next) => {
  Midterm.fetchMidterm()
    .then( ([rows]) => {
        console.log(JSON.stringify(rows));
        //res.send(JSON.stringify(rows));
        res.render('midterm', { 
            data: rows,
            title: 'Midterm Project' 
        });
    })
};

exports.getGuodong =  (req, res, next) => {
  Midterm.fetchGuodong()
    .then( ([rows]) => {
        console.log(JSON.stringify(rows));
        //res.send(JSON.stringify(rows));
        res.render('guodong', { 
            data: rows,
            title: 'AAAAAAAAAAAA' 
        });
    })
};