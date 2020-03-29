const express = require('express');
const Joi = require('joi');
const app = express();
const helmet = require('helmet');
const morgan = require('morgan');
const database = require('./connect');
const Data = require('./Data/data')
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('./html'));
app.use(helmet());
app.use(morgan());

//For Routing Of All Apis
app.use('/data', require('./router/router'));

//To show Html On the Page
app.get('/', (req, res) => {
    res.sendFile('index.html', { root: __dirname }) 
});
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}....`));
