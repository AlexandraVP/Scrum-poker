const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3005;

app.use(bodyParser.json());

let estimates = {};

app.post('/estimate', (req, res) => {
    console.log("POST /estimate " + JSON.stringify(req.body));
    const {name, estimate} = req.body;
    estimates[name] = estimate;
    res.send({status: "ok"});
});

app.get('/estimate', (req, res) => {
   const payload = Object.entries(estimates).map(([name, estimate])=>{
       return {name, estimate};
   });
   res.send(payload);
});

app.del('/estimate', (req, res) => {
    estimates = {};
    res.send({status: "ok"});
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});