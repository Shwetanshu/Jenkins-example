var express = require('express');
var app =  express();

app.get("/", function(req, res){
    res.send("Hello World1234!!");
});

app.listen(3000, function(){
    console.log("App is listening on PORT 3000");
});