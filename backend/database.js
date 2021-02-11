const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/mydb",
    { useUnifiedTopology: true, useNewUrlParser: true },
    () => { console.log("mongose db ye baglandı") }
);