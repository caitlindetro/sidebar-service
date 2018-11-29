require('newrelic');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const sidebars = require('../database/sidebars.js');
const path = require('path');

const port = 3002;
//const port = 8081;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static(__dirname + '/../client/dist'));

app.get('/api/sidebar/', function(req, res) {
    //console.log(req.params.page)
    sidebars.getInfo(req.params.page, res);
})

app.get('/api/sidebar/:page', function(req, res) {
    //console.log(req.params.page);
    sidebars.db.connect();
    
    var data = [];  
    var id = Math.floor(Math.random() * (10000000 - 1 + 1)) + 1;
    var agentMax = id + 4;
    var saleMax = id + 3;

    sidebars.db.query(`select * from listing_agents where id between ${id} and ${agentMax}`)
    .then(res => data.push(res.rows))
    .then(() => sidebars.db.query(`select * from similar_sales where id between ${id} and ${saleMax}`))
    .then(res => data.push(res.rows))
    .then(() => res.send(data))
    .catch(err => console.log(err))
}) 

app.get('/:page', function(req, res) {
    //console.log(req.params.page);
    res.sendFile(path.join(`${__dirname}/../client/dist/index.html`));
})

// app.post('/api/sidebar', function(req, res) {
//     console.log('post request', req);
// })

app.listen(port, () => {
    console.log(`listening on port ${port}`);
})
