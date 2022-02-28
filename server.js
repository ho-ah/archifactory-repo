const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({extended: true}));

const MongoClient = require('mongodb').MongoClient;

var db;
MongoClient.connect('mongodb+srv://Teamfactory:tf04060925@cluster0.ioxfy.mongodb.net/Archifactory?retryWrites=true&w=majority', {useUnifiedTopology: true}, function(에러, clinet){
    if (에러) return console.log(에러)
    db = clinet.db('Archifactory');

    db.collection('project').insertOne({이름 : 'Hong', 나이 : 28}, function(에러, 결과){
        console.log('저장완료');
    });

    app.listen(443, function(){
        console.log('listening on 443');
    });
});


app.get('/', function(요청, 응답){
    응답.sendFile(__dirname + 'index.html')
});

app.get('/project', function(요청, 응답){
    응답.sendFile(__dirname + 'project.html')
})

app.post('/contactadd', function(요청, 응답){
    응답.send('전송완료');
    console.log(요청.body); 
});

