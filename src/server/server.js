const express = require('express')
// const session = require('express-session')
// const massive = require('massive')
const bodyParser = require('body-parser')
const path = require('path');
// require('dotenv').config()

const app = express();
const port = process.env.SERVER_PORT;

app.use(bodyParser.json())

app.use( express.static( `${__dirname}/../build` ) );

app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname, '../build/index.html'));
});

app.listen(port, () => {
    console.log("listening on port : ", port)
})