// mongoDB 접속 코드
const mongoclient = require('mongodb').MongoClient;
const ObjId = require('mongodb').ObjectId;
const url =
    'mongodb+srv://admin:12345@jingom368.cqg7rgs.mongodb.net/?retryWrites=true&w=majority';
let mydb;

mongoclient
    .connect(url)
    .then((client) => {
        mydb = client.db('myboard');

        // mydb.collection('post').find().toArray().then(result => {
        //     console.log(result);
        // })

        app.listen(8081, function () {
            console.log('포트 8081으로 서버 대기중 ...');
        });
    })
    .catch((err) => {
        console.log(err);
    });

// MYSQL + Node.js 접속 코드
var mysql = require('mysql');
var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'myboard',
});

conn.connect();

const express = require('express');
const app = express();

// body-parser 라이브러리 추가
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

// 정적 파일 라이브러리 추가
app.use(express.static('public'));

app.get('/', function (req, res) {
    // res.sendFile(__dirname + '/index.html');
    res.render('index.ejs');
});

app.get('/list', function (req, res) {
    // conn.query("select * from post", function (err, rows, fields) {
    //    if (err) throw err;
    //    console.log(rows);
    //    console.log(fields);
    // })

    // console.log('post : ', mydb.collection('post'));

    mydb.collection('post')
        .find()
        .toArray()
        .then(function (result) {
            // err에 내가 넣으려는 값이
            console.log('result:', result);
            res.render('list.ejs', { data: result });
        })
        .catch(function (err) {
            console.log(err);
        });
    // res.sendFile(__dirname + '/list.html');
    // res.render('list.ejs');
});

conn.query('select * from post', function (err, rows, fields) {
    if (err) throw err;
    // console.log('rows : ', rows);
    // console.log('fields : ', fields);
});

app.listen(8080, function () {
    console.log('포트 8080으로 서버 대기중 ...');
});

app.get('/book', function (req, res) {
    res.send('도서 목록 관련 페이지입니다.');
});

/* app.get('/', function(req,res){
    res.send(
        '<html>\
        <body>\
        <h1>홈입니다.</h1>\
        <marquee>장진웅님, 반갑습니다</marquee>\
        </body>\
        </html>'
    );
}) */ // 가독성 떨어짐

// '/enter' 요청에 대한 처리 루틴
app.get('/enter', function (req, res) {
    // res.sendFile(__dirname + '/enter.html');
    res.render('enter.ejs');
});

// 'save' 요청에 대한 post 방식의 처리 루틴
app.post('/save', function (req, res) {
    // console.log("저장완료");
    console.log(req.body.title);
    console.log(req.body.content);
    console.log(req.body.someDate);

    // 몽고DB에 데이터 저장하기
    mydb.collection('post')
        .insertOne({
            title: req.body.title,
            content: req.body.content,
            date: req.body.someDate,
        })
        .then((result) => {
            // console.log(result);
            console.log('데이터 추가 성공');
        });
    res.redirect('/list');
    // MySQL DB에 데이터 저장하기
    // let sql = "insert into post (title, content, created) values(?, ?, NOW())";
    // let params = [req.body.title, req.body.content];
    // conn.query(sql, params, function(err, result) {
    //     if (err) throw err;
    //     console.log('데이터 추가 성공');
    // });
    // res.send('데이터 추가 성공');
});

app.post('/delete', function (req, res) {
    console.log(req.body._id);
    req.body._id = new ObjId(req.body._id);
    console.log('삭제 완료');
    mydb.collection('post')
        .deleteOne(req.body)
        .then((result) => {
            console.log('삭제완료');
            res.status(200).send();
        })
        .catch((err) => {
            console.log(err);
            res.status(500).send();
        });
});

// '/content' 요청에 대한 처리 루틴
app.get('/content/:id', function (req, res) {
    console.log(req.params.id);
    req.params.id = new ObjId(req.params.id);
    mydb.collection('post')
        .findOne({ _id: req.params.id })
        .then((result) => {
            console.log(result);
            res.render('content.ejs', { data: result });
        });
});

// '/edit/' 요청에 대한 처리 루틴
app.get('/edit/:id', function (req, res) {
    // console.log(req.params.id);
    req.params.id = new ObjId(req.params.id);
    mydb.collection('post')
        .findOne({ _id: req.params.id })
        .then((result) => {
            console.log(result);
            res.render('edit.ejs', { data: result });
        });
});

// '/edit/' 요청에 대한 처리 루틴
app.post('/edit', function (req, res) {
    // console.log(req.params.id);
    console.log(req.body);
    req.body.id = new ObjId(req.body.id);
    mydb.collection('post')
        // .findOne({ _id: req.params.id })
        .updateOne(
            { _id: req.body.id },
            {
                $set: {
                    title: req.body.title,
                    content: req.body.content,
                    date: req.body.someDate,
                },
            },
        )
        .then((result) => {
            // console.log(result);
            // res.render('edit.ejs', { data: result });
            console.log('수정완료');
            res.redirect('/list');
        })
        .catch((err) => {
            console.log(err);
        });
});

let cookieParser = require('cookie-parser');

app.use(cookieParser());
app.get('/cookie', function (req, res) {
    res.cookie('milk', '1000원');
    res.send('product : ' + req.cookies.milk);
});

/*

const mongoclient = require('mongodb').MongoClient;
const ObjId = require('mongodb').ObjectId;
const url =
    'mongodb+srv://admin:12345@jingom368.cqg7rgs.mongodb.net/?retryWrites=true&w=majority';
let mydb;

mongoclient
    .connect(url)
    .then((client) => {
        mydb = client.db('myboard');

        app.listen(8081, function () {
            console.log('포트 8081으로 서버 대기중 ...');
        });
    })
    .catch((err) => {
        console.log(err);
    });

var mysql = require('mysql');
var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'myboard',
});

conn.connect();

const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.get('/list', function (req, res) {

    mydb.collection('post')
        .find()
        .toArray()
        .then(function (result) {
            console.log('result:', result);
            res.render('list.ejs', { data: result });
        })
        .catch(function (err) {
            console.log(err);
        });
});

conn.query('select * from post', function (err, rows, fields) {
    if (err) throw err;
});

app.listen(8080, function () {
    console.log('포트 8080으로 서버 대기중 ...');
});

app.get('/book', function (req, res) {
    res.send('도서 목록 관련 페이지입니다.');
});

app.get('/enter', function (req, res) {
    res.render('enter.ejs');
});

app.post('/save', function (req, res) {
    console.log(req.body.title);
    console.log(req.body.content);
    console.log(req.body.someDate);

    mydb.collection('post')
        .insertOne({
            title: req.body.title,
            content: req.body.content,
            date: req.body.someDate,
        })
        .then((result) => {
            console.log('데이터 추가 성공');
        });
    res.send('데이터 추가 성공');
});

app.post('/delete', function (req, res) {
    console.log(req.body._id);
    req.body._id = new ObjId(req.body._id);
    console.log('삭제 완료');
    mydb.collection('post')
        .deleteOne(req.body)
        .then((result) => {
            console.log('삭제완료');
            res.status(200).send();
        })
        .catch((err) => {
            console.log(err);
            res.status(500).send();
        });
});

app.get('/content/:id', function (req, res) {
    console.log(req.params.id);
    req.params.id = new ObjId(req.params.id);
    mydb.collection('post')
        .findOne({ _id: req.params.id })
        .then((result) => {
            console.log(result);
            res.render('content.ejs', { data: result });
        });
});

app.get('/edit/:id', function (req, res) {
    req.params.id = new ObjId(req.params.id);
    mydb.collection('post')
        .findOne({ _id: req.params.id })
        .then((result) => {
            console.log(result);
            res.render('edit.ejs', { data: result });
        });
});

app.post('/edit/:id', function (req, res) {
    console.log(req.body);
    req.body.id = new ObjId(req.body.id);
    mydb.collection('post')
        .updateOne(
            { _id: req.body.id },
            {
                $set: {
                    title: req.body.title,
                    content: req.body.content,
                    date: req.body.someDate,
                },
            },
        )
        .then((result) => {
            console.log('수정완료');
            res.redirect('/list');
        })
        .catch((err) => {
            console.log(err);
        });
});


이거 지금 edit post가 안돼..왜지 ?

*/
