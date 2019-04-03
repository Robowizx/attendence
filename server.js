const express = require('express');
//const data = require('./data.js');
const app = express();

app.set('view engine', 'ejs');

app.use('/',require('./routes/routes'));

app.listen(8080, (error) => {
    if (error)
        throw error;
    console.log("listening to port 8080 " + "rendering views");
});