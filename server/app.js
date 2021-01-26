var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const data = require('./data.json');
const jsonParser = express.json();
const app = express()
const port = process.env.PORT || 80;
// cors
app.use(cors())

// items
var items = [];
var email = '';

// GET--getItems
app.get('/', (req, res) => {
    res.json(data);
})

// POST--addItem
app.post("/", jsonParser, function (req, res) {
    console.log('post:' + req.body.item.id);
    if (!req.body) {
        return res.sendStatus(400)
    }
    let item = req.body.item;
    items = [item, ...items];
    res.json({item});
});

// PUT--getBuyItems
app.get("/basket", jsonParser, function (req, res) {
    if (!req.body) {
        return res.sendStatus(400)
    }

    res.json({items})
});
// PUT--updateBuyItem
app.put("/", jsonParser, function (req, res) {
    console.log('put' + req.body.filterLabel);
    if (!req.body) {
        return res.sendStatus(400)
    }
        items = items.map(i => {
            if (i.id === req.body.id) {
                return {...i, quantity: req.body.text}
            }
            return i
        })
        res.json({
            id: req.body.id,
            text: req.body.text,
            result: true
        });
    });

// DELETE--deleteBuyItem
app.delete("/", jsonParser, function (req, res) {
    console.log('delete' + req.body.id);
    if (!req.body) {
        return res.sendStatus(400)
    }
    let id = req.body.id;
    items = items.filter(p => p.id !== id)
    res.json({id});
});


// POST--auth
app.post("/auth", jsonParser, function (req, res) {
    if (!req.body) {
        return res.sendStatus(400)
    }
    email = req.body.email;
    res.json({email})
});


/*
const pg = require('pg');
const conString = 'pg://postgres:10@localhost:5432/webdb';
var client = new pg.Client(conString);

const {Client} = require('pg');
const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
});

client.connect();

client.query('SELECT name FROM users;', [], (err, res) => {
    if (err) throw err;
    for (let row of res.rows) {
        console.log(JSON.stringify(row));
    }
    client.end();
});
*/


app.listen(port, () => {
    console.log(`Run at localhost:${port}`)
})
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});
// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
