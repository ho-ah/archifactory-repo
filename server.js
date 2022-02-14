const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname + '/public'));

app.listen(8000, function(){
    console.log('listening on 8000');
});

app.get('/', function(요청, 응답){
    응답.sendFile(__dirname + '/public/index.html')
});





