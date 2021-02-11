const express = require('express');
const app = express();
const port = 3000 || process.env.port
const cors = require('cors');
const bodyParser = require('body-parser');
require('./database');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/',require('./routes/userRouter'));


app.listen(port, () => {
    console.log("server calışıyor...");
})