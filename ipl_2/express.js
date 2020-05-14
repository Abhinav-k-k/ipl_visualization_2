const express = require('express')
const app = express()
const path=require('./public/data.json');
const port = 3000
app.use(express.static('public'));
app.get("/economy", function(req, res){ 
    let year = req.query.year;
    res.send(path.economicalBowlers[year])
})

app.listen(port, () => console.log('listening at http://localhost:3000'))