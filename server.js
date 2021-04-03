require('dotenv').config();

const sequelize = require('./database/database');
const express = require('express');
const body_parser = require('body-parser');
const helmet = require('helmet');
const cors = require('cors');
const jsonWebToken = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const exphbs = require('express-handlebars');
const path = require('path');
const app = express();

require('./database/database');

const privateKey = process.env.SECRET_KEY;
const apiRouter = require('./routes/api');

const PORT = process.env.PORT || 3000;

app.set('views', path.join(__dirname, '/views/layouts'));
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs',
    helpers: require('./lib/handlebars')
}));

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', '.hbs');

const logRequest = (req, res, next) => {
    console.log('Request Type', req.method)
    next();
}

app.use(helmet());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(logRequest);                            
app.use('/', apiRouter);

app.listen(PORT, () => {
    console.log(`Server listening at port ${PORT}`);
});