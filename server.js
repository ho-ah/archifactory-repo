const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({extended: true})) 

app.listen(443, function(){
    console.log('listening on 443');
});

app.get('/', function(요청, 응답){
    응답.sendFile(__dirname + 'index.html')
});

app.get('/project', function(요청, 응답){
    응답.sendFile(__dirname + 'project.html')
})

app.post('/contactadd', function(){
    응답.send('전송완료');
    console.log(요청.body);
    
});

