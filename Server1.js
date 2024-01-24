const mongoclient = require('mongodb').MongoClient;
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
let mydb;

app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine', 'ejs');

const url = 'mongodb+srv://admin:12345@jingom368.cqg7rgs.mongodb.net/?retryWrites=true&w=majority';

mongoclient.connect(url)
    .then(client => {
        mydb = client.db('myboard');

        app.get('/book', function(req,res){
            res.send('도서 목록 관련 페이지입니다.');
        })

        app.get('/', function(req,res){
            res.sendFile(__dirname + '/index.html');
        })

        app.get('/list', function(req,res){
            mydb.collection('post').find().toArray(function(err,result) {
                console.log(result);
                res.render('list.ejs', { data: result });
            })
        });

        app.get('/enter', function(req,res) {
            res.sendFile(__dirname + '/enter.html');
        });

        app.post('/save', function(req,res) {
            console.log(req.body.title);
            console.log(req.body.content);    

            mydb.collection('post').insertOne(
                {title: req.body.title, content: req.body.content}
            ).then(result => {
                console.log(result);
                console.log('데이터 추가 성공');
            });

            res.send('데이터 추가 성공');
        });

        app.listen(8081, function() {
            console.log('포트 8081으로 서버 대기중 ...');
        });
    }).catch(err => {
        console.log(err);
    });